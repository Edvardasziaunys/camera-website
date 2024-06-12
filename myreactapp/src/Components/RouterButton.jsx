// import React from "react";
import "./RouterButton.css";
import { useNavigate } from "react-router-dom";

const RouterButton = ({ name, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return <button onClick={handleClick}>{name}</button>;
};

export default RouterButton;
