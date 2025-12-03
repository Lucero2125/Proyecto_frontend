let movies = [
  { id: 1, title: 'Movie 1', director: 'Director 1', genre: 'Genre 1', releaseYear: 2021, rating: 0 },
  { id: 2, title: 'Movie 2', director: 'Director 2', genre: 'Genre 2', releaseYear: 2022, rating: 0 },
  { id: 3, title: 'Movie 3', director: 'Director 3', genre: 'Genre 3', releaseYear: 2023, rating: 0 },
];

export const getMovies = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(movies);
    }, 500);
  });
};

export const createMovie = (movie) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newMovie = { ...movie, id: movies.length + 1, rating: 0 };
      movies = [...movies, newMovie];
      resolve(newMovie);
    }, 500);
  });
};

export const updateMovie = (updatedMovie) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      movies = movies.map((movie) =>
        movie.id === updatedMovie.id ? updatedMovie : movie
      );
      resolve(updatedMovie);
    }, 500);
  });
};

export const deleteMovie = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (window.confirm('Are you sure you want to delete this movie?')) {
        movies = movies.filter((movie) => movie.id !== id);
        resolve();
      } else {
        reject('Delete cancelled');
      }
    }, 500);
  });
};

export const login = (credentials) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (credentials.username === 'admin' && credentials.password === 'password') {
        resolve({
          user: { username: 'admin', role: 'admin' },
          token: 'fake-jwt-token',
        });
      } else {
        reject('Invalid credentials');
      }
    }, 500);
  });
};

export const rateMovie = (movieId, rating) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      movies = movies.map((movie) =>
        movie.id === movieId ? { ...movie, rating } : movie
      );
      resolve({ movieId, rating });
    }, 500);
  });
};
