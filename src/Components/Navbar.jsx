import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <DIV>
      <h1>Product List</h1>
      <Link className="link" to={"/"}>
        Home
      </Link>
      <Link className="link" to={"/login"}>
        Login
      </Link>
      <Link className="link" to={"/admin"}>
        Admin
      </Link>
    </DIV>
  );
};
//
const DIV = styled.div`

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  background-color: white;
 

  h1 {
    /* margin-right: auto; */
    margin-left: 30px;
  }

  nav {
    display: flex;
    align-items: center;
  }

  .link {
    text-decoration: none;
    font-size: 25px;
    font-weight: 20px;
    margin-left: 50px;
  }
`;
