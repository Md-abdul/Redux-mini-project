import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from "../Redux/Products/action";
import { ProductsCard } from "./ProductsCard";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

export const ProductsList = () => {
  const [searchParams] = useSearchParams();
  const data = useSelector((store) => store.productsReducer.products);
  const dispatch = useDispatch();

  let obj = {
    params: {
      category: searchParams.getAll("category"),
      gender: searchParams.getAll("gender"),
      _sort: searchParams.get('order') && 'price',
      _order:searchParams.get('order'),
    },
  };

  useEffect(() => {
    dispatch(GetProducts(obj));
  }, [searchParams]);

  return (
    <DIV>
      {data.length > 0 &&
        data.map((el) => {
          return <ProductsCard key={el.id} {...el} />;
        })}
    </DIV>
  );
};

const DIV = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px;
  gap: 20px;
  margin-top: -14px;
  margin-left: 40px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;
