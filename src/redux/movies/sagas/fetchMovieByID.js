import { put, takeLatest } from "redux-saga/effects";
import moviesActionTypes from "../types";
import {
  fetchmovieByIDSuccess,
  fetchmovieByIDFail,
} from "../actions";
import httpClient from "../../../utils/http-client";
import { api_key } from "../../../utils/utils";

export function* fetchMovieByID({id}) {
  try {
    const response = yield httpClient.get(`/movie/${id}`, {
      params: { api_key },
    });
    yield put(fetchmovieByIDSuccess(response?.data));
  } catch (error) {
    yield put(fetchmovieByIDFail(error?.message));
  }
}

export function* onFetchMovieByIDStart() {
  yield takeLatest(
    moviesActionTypes.FETCH_MOVIE_BY_ID_START,
    fetchMovieByID
  );
}
