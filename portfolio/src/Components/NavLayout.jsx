import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const NavLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* This will render the child routes */}
    </div>
  );
};

export default NavLayout;
