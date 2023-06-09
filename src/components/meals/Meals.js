/* eslint-disable quotes */
import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./Meals.scss";
import { useSelector } from "react-redux";
import Meal from "../Meal/Meal";

function Meals() {
  const meals = useSelector((state) => state.meals);
  // console.log(meals);
  return (
    <div className="meals-container">
      {meals.map((el1) => (
        <>
          <h1>{el1.name}</h1>
          {el1.list.map((el) => (
            <Meal meal={el} CatagoryId={el1.id} key={uuidv4()} />
          ))}
        </>
      ))}
    </div>
  );
}

export default Meals;
