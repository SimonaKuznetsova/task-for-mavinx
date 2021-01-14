import { SIGN_UP_REQUEST, SIGN_IN_REQUEST, SIGN_OUT_REQUEST } from "./const";

export const signUp = ({
  name,
  surname,
  name_customer,
  email,
  phone,
  role,
  password,
  password_confirmation,
}) => {
  return {
    type: SIGN_UP_REQUEST,
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
  };
};

export const signIn = ({ email, password }) => {
  return {
    type: SIGN_IN_REQUEST,
    payload: { email, password },
  };
};

export const signOut = (token) => {
  return {
    type: SIGN_OUT_REQUEST,
    token,
  };
};
