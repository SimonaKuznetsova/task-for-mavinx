import axios from "axios";
import { call, put } from "redux-saga/effects";
import { SIGN_UP_ERROR, SIGN_UP_SUCCESS } from "ducks/auth/const";

export default function* signUpSaga({
  payload: {
    name,
    surname,
    name_customer,
    email,
    phone,
    role,
    password,
    password_confirmation,
  },
}) {
  const callApi = "https://prozorro.mavinx.com/api/test/register";
  try {
    const options = {
      method: "post",
      url: callApi,
      data: {
        name,
        surname,
        name_customer,
        email,
        phone,
        role,
        password,
        password_confirmation,
      },
    };

    const res = yield call(axios, options);
    console.log("SignUp here!!!");

    if (res) {
      yield put({
        type: SIGN_UP_SUCCESS,
        payload: res,
      });
    }
  } catch (error) {
    yield put({
      type: SIGN_UP_ERROR,
      error,
    });
  }
}
