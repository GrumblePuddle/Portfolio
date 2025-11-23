import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ProjectCarousel from "./ProjectCarusel";

const NavLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* Bottom: fixed carousel */}
      <div className="fixed bottom-0 left-0 right-0 z-20">
        <ProjectCarousel />
      </div>
    </div>
  );
};

export default NavLayout;
