import { all, call } from "redux-saga/effects";
import { MoviesSagas } from "./movies/sagas";

export default function* rootSaga() {
  yield all([call(MoviesSagas)]);
}
