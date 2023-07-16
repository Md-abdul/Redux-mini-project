import { DELETE_PRODUCTS_REQUEST, GET_PRODUCTS_REQUEST, PATCH_PRODUCTS_REQUEST, POST_PRODUCT_SUCRSS, PRODUCT_ERROR, PRODUCT_REQUEST } from "./actionType";

const initialState = {
  products: [],
  isLoaing: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST: {
      return { ...state, isLoaing: true };
    }
    case POST_PRODUCT_SUCRSS: {
      return {
        ...state,
        isLoaing: false,
        isError: false,
        products: [...state.products, payload]
      };
    }
    case PRODUCT_ERROR: {
      return { ...state, isLoaing: false, isError: true };
    }
    case GET_PRODUCTS_REQUEST:{
      return {...state, isLoaing:false, products:payload}
    }
    case DELETE_PRODUCTS_REQUEST:{
      return {...state, isLoaing:false, payload:[...state.products]}
    }
    case PATCH_PRODUCTS_REQUEST:{
      return {...state, isLoaing:false}
    }
    default: {
      return state;
    }
  }
};
