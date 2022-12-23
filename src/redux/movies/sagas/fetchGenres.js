import { put, takeLatest } from "redux-saga/effects";
import moviesActionTypes from "../types";
import {
  fetchGenresSuccess,
  fetchGenresFail,
} from "../actions";
import httpClient from "../../../utils/http-client";
import { api_key } from "../../../utils/utils";

export function* fetchGenres() {
  try {
    const response = yield httpClient.get("genre/movie/list", {
      params: { api_key },
    });
    yield put(fetchGenresSuccess(response?.data?.genres));
  } catch (error) {
    yield put(fetchGenresFail(error?.message));
  }
}

export function* onFetchGenresStart() {
  yield takeLatest(
    moviesActionTypes.FETCH_GENRES_START,
    fetchGenres
  );
}
