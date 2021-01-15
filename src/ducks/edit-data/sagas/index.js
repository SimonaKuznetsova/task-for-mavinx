import { takeEvery } from "redux-saga/effects";
import editDataSaga from "./editDataSaga";
import { EDIT_DATA_REQUEST } from "../const";

export default function* saga() {
  yield takeEvery(EDIT_DATA_REQUEST, editDataSaga);
}
