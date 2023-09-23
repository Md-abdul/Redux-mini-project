import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { EditProducts } from "../Redux/Products/action";

const initialState = {
  image: "",
  price: "",
  brand: "",
  name: "",
  category: "",
  gender: "",
};

export const EditProduct = () => {
  const produc = useSelector((store) => store.productsReducer.products)
  const { id } = useParams();
  const [product, setProduct] = useState(initialState);
  
  const dispatch = useDispatch()

  const handelUpdate = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: name === "price" ? +value : value });
  };

  const handelEditbtn = () => {
    dispatch(EditProducts(id, product))
  }

  useEffect(() => {
    const data = produc.find(el => el.id === +id)
    setProduct(data)
  }, [])

  return (
    <DIV>
      <h1>EditProduct id is :- {id}</h1>
      <input
        type="text"
        placeholder="IMAGE"
        value={product.image}
        name="image"
        onChange={handelUpdate}
      />
      <input
        type="number"
        placeholder="PRICE"
        value={product.price}
        name="price"
        onChange={handelUpdate}
      />
      <input
        type="text"
        placeholder="BRAND"
        value={product.brand}
        name="brand"
        onChange={handelUpdate}
      />
      <input
        type="text"
        placeholder="NAME"
        value={product.name}
        name="name"
        onChange={handelUpdate}
      />
      <input
        type="text"
        placeholder="CATEGORY"
        value={product.category}
        name="category"
        onChange={handelUpdate}
      />
      <input
        type="text"
        placeholder="GENDER"
        value={product.gender}
        name="gender"
        onChange={handelUpdate}
      />
      <button onClick={handelEditbtn} type="submit">UPDATE PRODUCT</button>
    </DIV>
  );
};

const DIV = styled.div`
   width: 400px;
  margin: auto;
  padding: 30px;
  margin-top: 130px;
  border-radius: 20px;


  button {
    width: 50%;
    height: 35;
    border: none;
    cursor: pointer;
    padding: 15px;
    margin-top: 8px;
  }

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  input {
    margin-top: 10px;
    height: 40px;
    font-size: large;
    width: 90%;
    /* box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px; */
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    border: none;
    border-radius: 10px;
    padding: 4px;
  }

  
  div {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
`;
