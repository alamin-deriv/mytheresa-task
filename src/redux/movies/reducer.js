import { persistReducer } from "redux-persist";
import storage from "localforage";
import moviesActionTypes from "./types";

const INITIAL_STATE = {
  isLoading: false,
  listOfNowPlayingMovies: [],
  listOfPopularMovies: [],
  listOfTopRatedMovies: [],
  listOfGenres: [],
  currentMovie: {},
  watchlist: [],
  watchlistIds: [],
};

function moviesReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case moviesActionTypes.FETCH_NOW_PLAYING_MOVIES_START:
      return {
        ...state,
        isLoading: true,
      };

    case moviesActionTypes.FETCH_NOW_PLAYING_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listOfNowPlayingMovies: payload,
      };
    case moviesActionTypes.FETCH_NOW_PLAYING_MOVIES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: null,
      };

    case moviesActionTypes.FETCH_POPULAR_MOVIES_START:
      return {
        ...state,
        isLoading: true,
      };

    case moviesActionTypes.FETCH_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listOfPopularMovies: payload,
      };
    case moviesActionTypes.FETCH_POPULAR_MOVIES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: null,
      };

    case moviesActionTypes.FETCH_TOP_RATED_MOVIES_START:
      return {
        ...state,
        isLoading: true,
      };

    case moviesActionTypes.FETCH_TOP_RATED_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listOfTopRatedMovies: payload,
      };
    case moviesActionTypes.FETCH_TOP_RATED_MOVIES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: null,
      };

    case moviesActionTypes.FETCH_GENRES_START:
      return {
        ...state,
        isLoading: true,
      };

    case moviesActionTypes.FETCH_GENRES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listOfGenres: payload,
      };
    case moviesActionTypes.FETCH_GENRES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: null,
      };

    case moviesActionTypes.FETCH_MOVIE_BY_ID_START:
      return {
        ...state,
        isLoading: true,
      };

    case moviesActionTypes.FETCH_MOVIE_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentMovie: payload,
      };
    case moviesActionTypes.FETCH_MOVIE_BY_ID_FAIL:
      return {
        ...state,
        isLoading: false,
        error: null,
      };

    case moviesActionTypes.ADD_TO_WATCHLIST:
      return {
        ...state,
        watchlistIds: [...state.watchlistIds, payload.id],
        watchlist: [...state.watchlist, payload],
        error: null,
      };

    case moviesActionTypes.REMOVE_FROM_WATCHLIST:
      const watchlistIds = state.watchlistIds.filter((id) => id !== payload.id);
      const watchlist = state.watchlist.filter(
        (movie) => movie.id !== payload.id
      );
      return {
        ...state,
        watchlistIds,
        watchlist,
        error: null,
      };

    default:
      return state;
  }
}

const persistConfig = {
  key: "movies",
  storage,
  blacklist: [
    "error",
    "isLoading",
  ],
};

export default persistReducer(persistConfig, moviesReducer);
