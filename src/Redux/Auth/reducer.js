import { AUTH_ERROR, AUTH_REQUEST, AUTH_SUCRSS } from "./actionType";

const initialState = {
  isAuth: false,
  token: "",
  isLoaing: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_REQUEST: {
      return { ...state, isLoaing: true };
    }
    case AUTH_SUCRSS: {
      return {
        ...state,
        isLoaing: false,
        isAuth: true,
        token: payload,
      };
    }
    case AUTH_ERROR: {
      return { ...state, isLoaing: false, isError: true };
    }
    default: {
      return state;
    }
  }
};
