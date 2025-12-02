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
      className="bg-violet-300 hover:bg-violet-400 text-white font-semibold py-2 px-4 rounded-xl transition-colors duration-300"
    >
      {children}
    </button>
  );
};

export default AnimatedLink;
