import axios from "axios";
import {
  DELETE_PRODUCTS_REQUEST,
  GET_PRODUCTS_REQUEST,
  PATCH_PRODUCTS_REQUEST,
  POST_PRODUCT_SUCRSS,
  PRODUCT_ERROR,
  PRODUCT_REQUEST,
} from "./actionType";

export const PostProducts = (newProduct) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .post(`http://localhost:8080/products`, newProduct)
    .then((res) => {
      dispatch({ type: POST_PRODUCT_SUCRSS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_ERROR });
    });
};

export const GetProducts = (obj) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get(`http://localhost:8080/products`, obj)
    .then((res) => {
      dispatch({ type: GET_PRODUCTS_REQUEST, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_ERROR });
    });
};

export const deleteProducts = (id,) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
 return axios
    .delete(`http://localhost:8080/products/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_PRODUCTS_REQUEST });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_ERROR });
    });
};


export const EditProducts = (id,data) => (dispatch) => {
  dispatch({type:PRODUCT_REQUEST})
  axios.patch(`http://localhost:8080/products/${id}`,data)
  .then((res) => {
    dispatch({type:PATCH_PRODUCTS_REQUEST})
  })
  .catch((err) => {
    dispatch({type:PRODUCT_ERROR})
  })
}