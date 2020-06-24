import React from "react";
import { useSelector } from "react-redux";

const ColorBord = () => {
  const currentColor = useSelector((store) => store.currentStone);
  return (
    <div
      style={{
        background: "green",
        textAlign: "center",
        width: 200,
        position: "absolute",
        top: 300,
        left: 80,
        paddingBottom: 20,
      }}
    >
      <h2>現在の色</h2>
      <div
        style={{ width: 100, height: 100, margin: "auto" }}
        data-color={currentColor}
      ></div>
    </div>
  );
};

export default ColorBord;
