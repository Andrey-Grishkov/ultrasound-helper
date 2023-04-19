import "./Errors.scss";
import React from "react";

const Errors = ({errorText}) => {

  return (
    <p className="errors"><span>{`${errorText ? `${errorText.name}:` : ''}`}</span>{`${errorText ? errorText.text : ''}`}</p>
  );
};

export default Errors;
