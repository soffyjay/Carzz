import React from "react";
import "./style.css";
import { BsBell } from "react-icons/bs";
import Avatar from "../../../images/Avatar.svg";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./style.css";
const Profile = () => {
  return (
    <div className="profile">
      <BsBell fontSize={18} color={"#667085"} />
      <img src={Avatar} alt="profile pic" />
      <RiArrowDropDownLine fontSize={34} color={"#98A2B3"} />
    </div>
  );
};

export default Profile;
