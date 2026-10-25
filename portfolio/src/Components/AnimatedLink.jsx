import React from "react";
import { useNavigate } from "react-router-dom";

const AnimatedLink = ({ to, children, setPageState }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    setPageState("exit");
    setTimeout(() => {
      navigate(to);
    }, 500); // duration until going to next page
  };

  return (
    <button
      onClick={handleClick}
      className=" hover:scale-105 transition-transform duration-300 shadow-md font-semibold py-2 px-4 rounded-xl"
    >
      {children}
    </button>
  );
};

export default AnimatedLink;
