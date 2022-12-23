import { put, takeLatest } from "redux-saga/effects";
import moviesActionTypes from "../types";
import {
  fetchTopRatedMoviesSuccess,
  fetchTopRatedMoviesFail,
} from "../actions";
import httpClient from "../../../utils/http-client";
import { api_key } from "../../../utils/utils";

export function* fetchTopRatedMovies() {
  try {
    const response = yield httpClient.get("/movie/top_rated", {
      params: { api_key },
    });
    yield put(fetchTopRatedMoviesSuccess(response?.data?.results));
  } catch (error) {
    yield put(fetchTopRatedMoviesFail(error?.message));
  }
}

export function* onFetchTopRatedMoviesStart() {
  yield takeLatest(
    moviesActionTypes.FETCH_TOP_RATED_MOVIES_START,
    fetchTopRatedMovies
  );
}
