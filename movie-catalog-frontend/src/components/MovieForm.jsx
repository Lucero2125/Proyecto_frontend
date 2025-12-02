import React, { useState, useEffect } from 'react';
import { createMovie, updateMovie } from '../services/api';

const MovieForm = ({ onMovieCreated, onMovieUpdated, editingMovie }) => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseYear, setReleaseYear] = useState('');

  useEffect(() => {
    if (editingMovie) {
      setTitle(editingMovie.title);
      setDirector(editingMovie.director);
      setGenre(editingMovie.genre);
      setReleaseYear(editingMovie.releaseYear);
    } else {
      setTitle('');
      setDirector('');
      setGenre('');
      setReleaseYear('');
    }
  }, [editingMovie]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const movieData = { title, director, genre, releaseYear: parseInt(releaseYear) };

    if (editingMovie) {
      const updated = await updateMovie({ ...movieData, id: editingMovie.id });
      onMovieUpdated(updated);
    } else {
      const createdMovie = await createMovie(movieData);
      onMovieCreated(createdMovie);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingMovie ? 'Edit Movie' : 'Add a New Movie'}</h2>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Director:</label>
        <input type="text" value={director} onChange={(e) => setDirector(e.target.value)} required />
      </div>
      <div>
        <label>Genre:</label>
        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} required />
      </div>
      <div>
        <label>Release Year:</label>
        <input type="number" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} required />
      </div>
      <button type="submit">{editingMovie ? 'Update Movie' : 'Add Movie'}</button>
    </form>
  );
};

export default MovieForm;
