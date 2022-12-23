import { put, takeLatest } from "redux-saga/effects";
import moviesActionTypes from "../types";
import { fetchPopularMoviesSuccess, fetchPopularMoviesFail } from "../actions";
import httpClient from "../../../utils/http-client";
import { api_key } from "../../../utils/utils";

export function* fetchPopularMovies() {
  try {
    const response = yield httpClient.get("/movie/popular", {
      params: { api_key },
    });
    yield put(fetchPopularMoviesSuccess(response?.data?.results));
  } catch (error) {
    yield put(fetchPopularMoviesFail(error?.message));
  }
}

export function* onFetchPopularMoviesStart() {
  yield takeLatest(
    moviesActionTypes.FETCH_POPULAR_MOVIES_START,
    fetchPopularMovies
  );
}
