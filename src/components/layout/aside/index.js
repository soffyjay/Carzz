import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FiHome, FiBarChart2 } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { ImNotification } from "react-icons/im";
import { HiOutlineLocationMarker } from "react-icons/hi";
import vector from "../../../images/Vector.png";
import logo from "../../../images/logo.png";

const Aside = () => {
  return (
    <div className="aside-container">
      <div className="image-container">
        <img src={logo} />
      </div>

      <ul>
        <li>
          <span className="icons">
            <FiHome />
          </span>

          <Link to="/">Home</Link>
        </li>
        <li>
          <span className="icons">
            <FiBarChart2 />
          </span>

          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <span className="icons">
            <BsSearch />
          </span>

          <Link to="/">Verify</Link>
        </li>
        <li>
          <span className="icons">
            <ImNotification />
          </span>

          <Link to="/">Report</Link>
        </li>
        <li>
          <span className="icons">
            <HiOutlineLocationMarker fontSize={24} />
          </span>

          <Link to="/">Location</Link>
        </li>
        <li>
          <img src={vector} />
          <Link to="/">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Aside;
