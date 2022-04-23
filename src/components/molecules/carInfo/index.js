import React from "react";
import Amount from "../../atoms/amount";
import "./style.css";

const CarInfo = () => {
  return (
    <div className="car-info">
      <span className="circle"></span>
      <span>Carfax vehicle history</span>
      <Amount />
    </div>
  );
};

export default CarInfo;
