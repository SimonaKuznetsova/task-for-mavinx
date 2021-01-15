import axios from "axios";
import { call, put } from "redux-saga/effects";
import { EDIT_DATA_ERROR, EDIT_DATA_SUCCESS } from "ducks/edit-data/const";

export default function* editDataSaga({
  payload: { name, surname, name_customer, role, token },
}) {
  const callApi = "https://prozorro.mavinx.com/api/test/edit-user";
  try {
    const options = {
      method: "post",
      url: callApi,
      data: {
        name,
        surname,
        name_customer,
        role,
      },
      headers: {
        Authorization: `${token}`,
      },
    };

    const res = yield call(axios, options);

    if (res) {
      yield put({
        type: EDIT_DATA_SUCCESS,
        payload: {
          user: res.data.user,
        },
      });
    }
  } catch (error) {
    yield put({
      type: EDIT_DATA_ERROR,
      error,
    });
  }
}
