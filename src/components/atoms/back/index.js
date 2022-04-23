import React from "react";
import { BsArrowLeft } from "react-icons/bs";

const Back = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "24px 0 0 44px",
      }}
    >
      <BsArrowLeft color={"#667085"} />
      <span style={{ color: "#475467;", fontSize: "16px", paddingLeft: "8px" }}>
        Back
      </span>
    </div>
  );
};

export default Back;
