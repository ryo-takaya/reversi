import React from "react";
import shortid from "shortid";
import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/style.css";
import Cell from "./Cell";

const Bord = () => {
  const bord = useSelector((state) => state.bord);
  const list = [];
  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      list.push(
        <Cell
          initialColor={bord[row][column]}
          row={row}
          column={column}
          key={shortid.generate()}
        />
      );
    }
  }

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      className="container"
    >
      {list}
    </div>
  );
};

export default Bord;
