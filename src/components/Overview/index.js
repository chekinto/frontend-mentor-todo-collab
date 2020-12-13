import React from "react";
import "./overview.css";
import sunIcon from "../../images/icon-moon.svg";

const Overview = ({ title }) => {
  return (
    <div className="overview">
      <h1 className="overview__header">{title}</h1>
      <div className="overview__image">
        <img src={sunIcon} alt="sun icon" />
      </div>
    </div>
  );
};

export default Overview;
