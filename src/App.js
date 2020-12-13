import React, { Fragment } from "react";
import Overview from "./components/Overview";
import CustomInput from "./components/CustomInput";
import topImage from "./images/bg-desktop-light.jpg";

const App = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="topImage">
          <img src={topImage} alt="" />
          <div className="bottomBg"></div>
        </div>
        {/* i think it will be better to have a todo component */}
        <Overview title="Todo" />
        <CustomInput type="text" placeholder="Create a todo" />
      </div>
    </Fragment>
  );
};

export default App;
