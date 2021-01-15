import axios from "axios";
import { call, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import { SIGN_IN_ERROR, SIGN_IN_SUCCESS } from "ducks/auth/const";

export default function* signInSaga({ payload: { email, password } }) {
  const callApi = "https://prozorro.mavinx.com/api/test/login";
  try {
    const options = {
      method: "post",
      url: callApi,
      data: {
        email,
        password,
      },
    };

    const res = yield call(axios, options);

    if (res) {
      yield put({
        type: SIGN_IN_SUCCESS,
        payload: {
          token: res.data.token,
          user: res.data.user,
        },
      });

      yield put(push("/"));
    }
  } catch (error) {
    yield put({
      type: SIGN_IN_ERROR,
      error,
    });
  }
}
