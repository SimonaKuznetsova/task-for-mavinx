import Auth from "ducks/auth/sagas";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([Auth()]);
}
