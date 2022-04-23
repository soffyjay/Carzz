import React from "react";
import honda from "../../../images/image 1.png";
import "./style.css";

const VehicleInfo = () => {
  return (
    <div className="first-box">
      <div className="first-box-wrapper">
        <div className="honda-logo">
          <img src={honda} alt="honda" className="image" />
        </div>
        <h2 className="honda-text">HONDA </h2>
        <p className="vin-num">VIN NUMBER:</p>
        <p className="code">JHLRE4859C401526Z</p>
      </div>
    </div>
  );
};

export default VehicleInfo;
