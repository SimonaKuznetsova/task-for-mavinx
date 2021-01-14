import axios from "axios";
import { call, put } from "redux-saga/effects";
import { SIGN_IN_ERROR, SIGN_IN_SUCCESS } from "ducks/auth/const";

export default function* signInSaga({ payload: { email, password } }) {
  const callApi = "https://prozorro.mavinx.com/api/test/login";
  try {
    const options = {
      method: "post",
      url: callApi,
      params: {
        email,
        password,
      },
    };

    const res = yield call(axios, options);
    console.log("SignIn here!!!");

    if (res) {
      yield put({
        type: SIGN_IN_SUCCESS,
        payload: res.user,
        token: res.token,
      });
    }
  } catch (error) {
    yield put({
      type: SIGN_IN_ERROR,
      error,
    });
  }
}
