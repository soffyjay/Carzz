import React from "react";
import Header from "../header";
import "./style.css";
import Back from "../../atoms/back";
import VehicleDetail from "../../organisms/vehicleDetail";
import VehicleInfo from "../../organisms/vehicleInfo";
import CarInfo from "../../molecules/carInfo";

const Main = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <div className="main-container">
        <div className="vehicle-details">
          <Back />
          <h2 className="vehicle-heading">Vehicle details</h2>
          <div className="vehicle-infos">
            <VehicleInfo />
            <VehicleDetail />
          </div>
          <div className="car-history">
            <h3 className="car-history-title">
              Buy report and view detailed history for:
            </h3>
            <h3 className="car-history-model">
              HONDA CR-V 2.0L (JHLRE4859C401526Z)
            </h3>
            <span className="services">Select one or more services to buy</span>
            <div className="history-detail">
              <CarInfo />
              <CarInfo />
              <CarInfo />
              <CarInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
