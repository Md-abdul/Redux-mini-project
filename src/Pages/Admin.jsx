import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import styled from "styled-components";
import { PostProducts } from "../Redux/Products/action";

const initialState = {
  image: "",
  price: "",
  brand: "",
  name: "",
  category: "",
  gender: "",
};

export const Admin = () => {
  const [product, setProducts] = useState(initialState);
  const dispatch = useDispatch()
  const handelChange = (e) => {
    const {value,name} = e.target;
    console.log(product)
    console.log('slkfslk')
    setProducts((pre) => {
      return {...pre, [name]:name==="price" ? +value : value}
    })
  };

  const handelForm = (e) => {
    e.preventDefault()
    // console.log(product)
    dispatch(PostProducts(product))
  }

  return (
    <WRAP>
      <h1>Add Products</h1>
      <form onSubmit={handelForm}>
        <input
          type="text"
          placeholder="Image"
          value={product.image}
          onChange={(e) => handelChange(e)}
          name="image"
        />
        <input
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={(e) => handelChange(e)}
          name="price"
        />
        <input
          type="text"
          placeholder="Brand"
          value={product.brand}
          onChange={(e) => handelChange(e)}
          name="brand"
        />
        <input
          type="text"
          placeholder="Name"
          value={product.name}
          onChange={(e) => handelChange(e)}
          name="name"
        />
        <select
          name="category"
          value={product.category}
          onChange={(e) => handelChange(e)}
        >
          <option value="">Select Category</option>
          <option value="top-wear">Top Wear</option>
          <option value="bottom-wear">Bottom Wear</option>
          <option value="foot-wear">Shoes</option>
        </select>

        <select
          name="gender"
          value={product.gender}
          onChange={(e) => handelChange(e)}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="kids">Kids</option>
        </select>
        <button type="submit">ADD PRODUCTS</button>
      </form>
    </WRAP>
  );
};

const WRAP = styled.div`
  width: 400px;
  margin: auto;
  padding: 30px;
  margin-top: 130px;
  border-radius: 20px;

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }

  input {
    height: 40px;
    font-size: large;
    width: 90%;
    /* box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px; */
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    border: none;
    border-radius: 10px;
    padding: 5px;
  }

  select {
    height: 40px;
    font-size: large;
    width: 90%;
  }

  button {
    width: 50%;
    height: 35;
    border: none;
    cursor: pointer;
    padding: 15px;
  }

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;
