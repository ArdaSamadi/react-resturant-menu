/* eslint-disable quotes */
import React from "react";
import "./Types.scss";
// import { useSelector } from "react-redux";
// import Catagory from "../catagory/Catagory";
import Meals from "../meals/Meals";

function Types() {
  // const types = useSelector((state) => state.meals);
  return (
    <div className="type-container">
      <h1>منو</h1>
      <Meals />
    </div>
  );
}

export default Types;
