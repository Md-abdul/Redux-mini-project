import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../Redux/Auth/action";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("");

  const auth = useSelector((store) => store.authReducer.isAuth);
  const error = useSelector((store) => store.authReducer.isError);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate(location.state, { replace: true });
    }
  }, [auth]);

  const handleLogin = () => {
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  return (
    <WRAPPER auth={auth} isError={error}>
       
      <h1>Hey budy login first 👋 </h1>
      <h1>{auth ? "Login Successfull!!!" : "Login To Continue"}</h1>

      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} type="submit">
        Login
      </button>
    </WRAPPER>
  );
};

const WRAPPER = styled.div`
  width: 400px;
  margin: 40px auto;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 20px;
  padding: 50px;
  /* background-color: #676363; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  h1 {
    color: ${({ auth }) => (auth ? "green" : "red")};
  }

  input {
    height: 40px;
    border: ${({ isError }) => (isError ? "3px solid red" : "3px solid green")};
  }

  button {
    height: 35px;
    cursor: pointer;
  }
`;

//insted of div we can wrote any tag it will created link div form
