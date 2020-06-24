import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/style.css";
import { getStone8way, changeColor } from "../fuctions/index";

const Cell = (props) => {
  const color = useSelector((state) => state.currentStone);
  const bord = useSelector((state) => state.bord);
  const cell = useRef(null);
  const dispatch = useDispatch();

  function clickStone(e) {
    if (e.target.dataset.color === "w" || e.target.dataset.color === "b") {
      return;
    }
    const { row, column } = e.target.dataset;
    const getTarget = getStone8way(row, column, bord, color);
    let i = 0;
    for (const key in getTarget) {
      i += getTarget[key].length;
    }
    if (i === 0) {
      return;
    }

    changeColor(bord, getTarget, dispatch, color, row, column);
    //  e.target.dataset.color = color;
    dispatch({ type: "CHANGE_STONE", color: color === "b" ? "w" : "b" });
  }

  // useEffect(() => {
  //   cell.current.addEventListener("click", () => {
  //     const result = color === "b" ? "w" : "b";
  //     console.log(color);
  //     dispatch({ type: "CHANGE_STONE", color: result });
  //   });
  // }, []);
  return (
    <div
      data-color={props.initialColor}
      data-row={props.row}
      data-column={props.column}
      ref={cell}
      onClick={clickStone}
      className="grid-item"
    ></div>
  );
};

export default Cell;
