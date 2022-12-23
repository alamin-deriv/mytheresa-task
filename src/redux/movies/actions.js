import moviesActionTypes from "./types";


export const fetchNowPlayingMoviesStart = () => ({
  type: moviesActionTypes.FETCH_NOW_PLAYING_MOVIES_START,
});

export const fetchNowPlayingMoviesSuccess = (data) => ({
  type: moviesActionTypes.FETCH_NOW_PLAYING_MOVIES_SUCCESS,
  payload: data,
});

export const fetchNowPlayingMoviesFail = (error) => ({
  type: moviesActionTypes.FETCH_NOW_PLAYING_MOVIES_FAIL,
  payload: error,
});

export const fetchTopRatedMoviesStart = () => ({
  type: moviesActionTypes.FETCH_TOP_RATED_MOVIES_START,
});

export const fetchTopRatedMoviesSuccess = (data) => ({
  type: moviesActionTypes.FETCH_TOP_RATED_MOVIES_SUCCESS,
  payload: data,
});

export const fetchTopRatedMoviesFail = (error) => ({
  type: moviesActionTypes.FETCH_TOP_RATED_MOVIES_FAIL,
  payload: error,
});

export const fetchPopularMoviesStart = () => ({
  type: moviesActionTypes.FETCH_POPULAR_MOVIES_START,
});

export const fetchPopularMoviesSuccess = (data) => ({
  type: moviesActionTypes.FETCH_POPULAR_MOVIES_SUCCESS,
  payload: data,
});

export const fetchPopularMoviesFail = (error) => ({
  type: moviesActionTypes.FETCH_POPULAR_MOVIES_FAIL,
  payload: error,
});

export const fetchGenresStart = () => ({
  type: moviesActionTypes.FETCH_GENRES_START,
});

export const fetchGenresSuccess = (data) => ({
  type: moviesActionTypes.FETCH_GENRES_SUCCESS,
  payload: data,
});

export const fetchGenresFail = (error) => ({
  type: moviesActionTypes.FETCH_GENRES_FAIL,
  payload: error,
});

export const fetchmovieByIDStart = (id) => ({
  type: moviesActionTypes.FETCH_MOVIE_BY_ID_START,
  id
});

export const fetchmovieByIDSuccess = (data) => ({
  type: moviesActionTypes.FETCH_MOVIE_BY_ID_SUCCESS,
  payload: data,
});

export const fetchmovieByIDFail = (error) => ({
  type: moviesActionTypes.FETCH_MOVIE_BY_ID_FAIL,
  payload: error,
});

export const addToWatchlist = (currentMovie) => ({
  type: moviesActionTypes.ADD_TO_WATCHLIST,
  payload: currentMovie,
});

export const removeFromWatchlist = (currentMovie) => ({
  type: moviesActionTypes.REMOVE_FROM_WATCHLIST,
  payload: currentMovie,
});



