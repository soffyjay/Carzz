import React from "react";
import "./style.css";

const VehicleDetail = () => {
  return (
    <div className="second-box">
      <div className="contents">
        <div>
          <span className="light-text">Model</span>
          <h4 className="sub-text">HONDA CR-V 2.0L</h4>
        </div>
        <div>
          <span className="light-text">Manufacturer</span>
          <h4>HONDA MOTORS CO., LTD</h4>
        </div>
      </div>
      <div className="contents">
        <div>
          <span className="light-text">Vehicle type</span>
          <h4 className="sub-text">MULTIPURPOSE PASSENGER VEHICLE (MPV)</h4>
        </div>
        <div>
          <span className="light-text">Body class</span>
          <h4 className="sub-text">WAGON</h4>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;
