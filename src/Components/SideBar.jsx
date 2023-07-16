import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

export const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("category");
  const initialGender = searchParams.getAll("gender");
  const initialOrder = searchParams.get("order");
  const [category, setCategory] = useState(initialCategory || []);
  const [gender, setGender] = useState(initialGender || []);

  const [order, setOrder] = useState(initialOrder || "");

  useEffect(() => {
    let params = {
      gender,
      category,
    };

    order && (params.order = order);

    setSearchParams(params);
  }, [category, gender, order]);

  const handelCategory = (e) => {
    const { value } = e.target;

    let newCategory = [...category];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };

  const handelGender = (e) => {
    const { value } = e.target;
    let newGender = [...gender];

    if (newGender.includes(value)) {
      newGender = newGender.filter((el) => el !== value);
    } else {
      newGender.push(value);
    }

    setGender(newGender);
  };

  const handelOrder = (e) => {
    const { value } = e.target;
    setOrder(value);
  };

  return (
    <DIV>
      <h3>Filter By Category</h3>
      <div>
        <input
          type="checkbox"
          value={"top-wear"}
          onChange={handelCategory}
          checked={category.includes("top-wear")}
        />
        <label>Top Wear</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"bottom-wear"}
          onChange={handelCategory}
          checked={category.includes("bottom-wear")}
        />
        <label>Bottom Wear</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"foot-wear"}
          onChange={handelCategory}
          checked={category.includes("foot-wear")}
        />
        <label>Foot Wear</label>
      </div>

      <br />

      <h3>Filter By Gender</h3>
      <div>
        <input
          type="checkbox"
          value={"male"}
          onChange={handelGender}
          checked={gender.includes("male")}
        />
        <label>Male</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"female"}
          onChange={handelGender}
          checked={gender.includes("female")}
        />
        <label>Woman</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"kids"}
          onChange={handelGender}
          checked={gender.includes("kids")}
        />
        <label>Kids</label>
      </div>

      <br />

      <h3>Sort By Price</h3>
      <div onChange={handelOrder}>
        <div>
          <input
            type="radio"
            name="order"
            value={"asc"}
            defaultChecked={order === "asc"}
          />
          <label> Ascending</label>
        </div>
        <div>
          <input
            type="radio"
            name="order"
            value={"desc"}
            defaultChecked={order === "desc"}
          />
          <label> Descending</label>
        </div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 30px;
  min-height: 90vh;
  margin-top: -14px;
  margin-left: 10px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  position: fixed;
  z-index: 900;
  background-color: white;

  h3{
    font-size: 25px;
    font-family: sans-serif;
  }
`;
