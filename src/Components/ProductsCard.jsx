import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { GetProducts, deleteProducts } from "../Redux/Products/action";
export const ProductsCard = ({
  id,
  image,
  name,
  brand,
  price,
  gender,
  category,
}) => {
  const dispatch = useDispatch();

  const handelDelte = (id) => {
    dispatch(deleteProducts(id)).then((res) => {
      dispatch(GetProducts());
    });
  };

  return (
    <DIV>
      <img src={image} alt="product" />
      <h3>{name}</h3>
      <p>Price : {price}</p>
      <p>Brand : {brand}</p>
      <p>Category : {category}</p>
      <p>Gender : {gender}</p>

      <div className="btn">
        <Link to={`/edit/${id}`}>
          <button className="editbtn">EDIT</button>
        </Link>

        <button className="deletebtn" onClick={() => handelDelte(id)}>
          DELETE
        </button>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  border-radius: 20px;
  margin-top: 20px;
  font-size: 20px;
  font-style: italic;
  button {
    margin-bottom: 10px;
  }

  font-family: sans-serif;

  img {
    width: 80%;
    margin-top: 20px;
    /* box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px; */
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius: 20px;
  }


  .editbtn{
    cursor: pointer;
    font-size: 20px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border: none;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-style: italic;
  }

  .editbtn:hover{
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px
    ;
    color: teal;
  }

  .deletebtn:hover{
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px
    
    ;
    color: teal;
  }


  .deletebtn{
    cursor: pointer;
    font-size: 20px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border: none;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-style: italic;
  }
  .btn{
    display: flex;
    justify-content: space-around;
  }
`;
