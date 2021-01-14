import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_IN_REQUEST,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
} from "ducks/auth/const";

const defaultState = {
  user: null,
  loading: null,
  error: null,
  registered: false,
  auth: false,
  token: null,
};

export default function reducer(state = defaultState, action) {
  const { type, payload, error } = action;

  switch (type) {
    case SIGN_UP_REQUEST:
      return { ...state, loading: true };
    case SIGN_UP_SUCCESS:
      return { ...state, loading: false, registered: true, error: null };
    case SIGN_UP_ERROR:
      return { ...state, loading: false, error };

    case SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload.res,
        auth: true,
        error: null,
      };
    case SIGN_IN_ERROR:
      return { ...state, loading: false, error };

    case SIGN_OUT_REQUEST:
      return { ...state, user: null };
    case SIGN_OUT_SUCCESS:
      return { ...state, user: null };
    case "ENTER_NAME":
      return {
        ...state,
        loading: false,
        userData: { firstName: payload.firstName },
      };
  }

  return state;
}