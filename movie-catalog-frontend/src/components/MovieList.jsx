import React from 'react';

const MovieList = ({ movies, onEdit, onDelete }) => {
  if (!movies || movies.length === 0) return <p>No movies available.</p>;

  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>Director: {movie.director}</p>
            <p>Genre: {movie.genre}</p>
            <p>Release Year: {movie.releaseYear}</p>
            <button onClick={() => onEdit(movie)}>Edit</button>
            <button onClick={() => onDelete(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
