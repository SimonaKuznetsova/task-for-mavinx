import axios from "axios";
import { call, put } from "redux-saga/effects";
import { SIGN_OUT_ERROR, SIGN_OUT_SUCCESS } from "ducks/auth/const";

export default function* signOutSaga({ payload: { token } }) {
  const callApi = "https://prozorro.mavinx.com/api/test/logout";
  try {
    const options = {
      method: "post",
      url: callApi,
      params: {
        token,
      },
    };

    const res = yield call(axios, options);
    console.log("SignOut here!!!");

    if (res) {
      yield put({
        type: SIGN_OUT_SUCCESS,
        payload: res.user,
        token: res.token,
      });
    }
  } catch (error) {
    yield put({
      type: SIGN_OUT_ERROR,
      error,
    });
  }
}
