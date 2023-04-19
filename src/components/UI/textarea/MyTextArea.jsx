import React from "react";
import classses from "./MyTextArea.module.css";

const MyTextArea = (props) => {
  return (
    <textarea className={classses.MyTextArea} {...props } name="description" cols="40" rows="3"></textarea>
  );
};

export default MyTextArea;
