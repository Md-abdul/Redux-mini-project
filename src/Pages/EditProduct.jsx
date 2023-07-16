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
  border: 1px solid black;
  padding: 30px;

  button {
    width: 50%;
    height: 35;
    border: none;
    cursor: pointer;
    padding: 15px;
  }

  input {
    height: 40px;
    font-size: large;
    width: 90%;
    gap: 20px;
  }
`;
