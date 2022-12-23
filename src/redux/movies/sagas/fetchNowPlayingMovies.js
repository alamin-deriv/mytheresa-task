import { put, takeLatest } from "redux-saga/effects";
import moviesActionTypes from "../types";
import {
  fetchNowPlayingMoviesSuccess,
  fetchNowPlayingMoviesFail,
} from "../actions";
import httpClient from "../../../utils/http-client";
import { api_key } from "../../../utils/utils";

export function* fetchNowPlayingMovies() {
  try {
    const response = yield httpClient.get("/movie/now_playing", {
      params: { api_key },
    });
    yield put(fetchNowPlayingMoviesSuccess(response?.data?.results));
  } catch (error) {
    yield put(fetchNowPlayingMoviesFail(error?.message));
  }
}

export function* onFetchNowPlayingMoviesStart() {
  yield takeLatest(
    moviesActionTypes.FETCH_NOW_PLAYING_MOVIES_START,
    fetchNowPlayingMovies
  );
}
