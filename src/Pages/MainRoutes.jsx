import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePgae } from "./HomePgae";
import { Login } from "./Login";
import { Admin } from "./Admin";
import { PrivateRoutes } from "../Components/PrivateRoutes";
import { EditProduct } from "./EditProduct";
export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePgae />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/edit/:id"
          element={
            <PrivateRoutes>
              <EditProduct />
            </PrivateRoutes>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoutes>
              <Admin />
            </PrivateRoutes>
          }
        />
      </Routes>
    </div>
  );
};
