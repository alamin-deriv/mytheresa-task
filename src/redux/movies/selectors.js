import { createSelector } from "reselect";

const selectMovies = (state) => state.movies;


export const selectIsLoading = createSelector(
  [selectMovies],
  (movies) => movies.isLoading
);

export const selectListOfNowPlayingMovies = createSelector(
  [selectMovies],
  (movies) => movies.listOfNowPlayingMovies
);

export const selectListOfPopularMovies = createSelector(
  [selectMovies],
  (movies) => movies.listOfPopularMovies
);

export const selectListOfTopRatedMovies = createSelector(
  [selectMovies],
  (movies) => movies.listOfTopRatedMovies
);

export const selectListOfGenres = createSelector(
  [selectMovies],
  (movies) => movies.listOfGenres
);

export const selectCurrentMovie = createSelector(
  [selectMovies],
  (movies) => movies.currentMovie
);

export const selectWatchlistIds = createSelector(
  [selectMovies],
  (movies) => movies.watchlistIds
);

export const selectWatchlist = createSelector(
  [selectMovies],
  (movies) => movies.watchlist
);

