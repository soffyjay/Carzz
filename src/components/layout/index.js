import React from "react";
import Aside from "./aside";
import Main from "./main";
import "./style.css";

const Layout = () => {
  return (
    <div className="layout">
      <div className="left-pane">
        <Aside />
      </div>
      <div className="main-content">
        <Main />
      </div>
    </div>
  );
};

export default Layout;
