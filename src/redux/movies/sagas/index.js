import { all, call } from 'redux-saga/effects';
import { onFetchNowPlayingMoviesStart } from "./fetchNowPlayingMovies";
import { onFetchPopularMoviesStart } from "./fetchPopularMovies";
import { onFetchTopRatedMoviesStart } from "./fetchTopRatedMovies";
import { onFetchGenresStart } from "./fetchGenres";
import { onFetchMovieByIDStart } from "./fetchMovieByID";

export function* MoviesSagas() {
  yield all([
    call(onFetchNowPlayingMoviesStart),
    call(onFetchPopularMoviesStart),
    call(onFetchTopRatedMoviesStart),
    call(onFetchGenresStart),
    call(onFetchMovieByIDStart),
  ]);
};
