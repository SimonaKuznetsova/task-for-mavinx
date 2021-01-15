import Auth from "ducks/auth/sagas";
import EditData from "ducks/edit-data/sagas";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([Auth(), EditData()]);
}
