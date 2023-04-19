import React from "react";
import classses from "./MyInput.module.css";

const MyInput = (props) => {
  return <input className={classses.MyInput} {...props} type="text"/>;
};

export default MyInput;
