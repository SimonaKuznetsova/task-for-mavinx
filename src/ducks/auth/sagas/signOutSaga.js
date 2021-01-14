import axios from "axios";
import { call, put } from "redux-saga/effects";
import { SIGN_OUT_ERROR, SIGN_OUT_SUCCESS } from "ducks/auth/const";

export default function* signOutSaga({ token }) {
  const callApi = "https://prozorro.mavinx.com/api/test/logout";
  console.log(token);
  try {
    const options = {
      method: "post",
      url: callApi,
      data: token,
      //   data: {
      //     token,
      //   },
    };

    const res = yield call(axios, options);
    console.log(res);

    if (res) {
      yield put({
        type: SIGN_OUT_SUCCESS,
      });
    }
  } catch (error) {
    yield put({
      type: SIGN_OUT_ERROR,
      error,
    });
  }
}
