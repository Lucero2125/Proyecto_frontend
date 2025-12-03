import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';
import useAuth from './hooks/useAuth';
import { getMovies, deleteMovie, rateMovie } from './services/api';

const App = () => {
  const { user, login, logout } = useAuth();
  const [movies, setMovies] = React.useState([]);
  const [editingMovie, setEditingMovie] = React.useState(null);
  const navigate = useNavigate();

  const fetchMovies = async () => {
    const moviesData = await getMovies();
    setMovies(moviesData);
  };

  React.useEffect(() => {
    if (user) {
      fetchMovies();
    }
  }, [user]);

  const handleLogin = (userData) => {
    login(userData);
    navigate('/');
  };

  const handleMovieCreated = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleMovieUpdated = (updatedMovie) => {
    setMovies(movies.map((movie) => (movie.id === updatedMovie.id ? updatedMovie : movie)));
    setEditingMovie(null);
  };

  const handleEdit = (movie) => {
    setEditingMovie(movie);
  };

  const handleDelete = async (id) => {
    try {
      await deleteMovie(id);
      setMovies(movies.filter((movie) => movie.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleRate = async (movieId, rating) => {
    try {
      await rateMovie(movieId, rating);
      setMovies(
        movies.map((movie) =>
          movie.id === movieId ? { ...movie, rating } : movie
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Movie Catalog</h1>
      {user && <button onClick={logout}>Logout</button>}
      <Routes>
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <MovieForm
                onMovieCreated={handleMovieCreated}
                onMovieUpdated={handleMovieUpdated}
                editingMovie={editingMovie}
              />
              <MovieList
                movies={movies}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onRate={handleRate}
              />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
