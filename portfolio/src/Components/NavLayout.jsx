import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import ProjectCarousel from "./ProjectCarusel";
import { useState, useEffect } from "react";

const NavLayout = () => {
  const location = useLocation();
  const [pageState, setPageState] = useState("idle");
  // "enter" | "idle" | "exit"

  const animationClasses = {
    enter:
      "transform translate-y-0 opacity-100 transition-all duration-700 ease-out",
    exit: "transform -translate-y-full opacity-0 transition-all duration-500 ease-in",
    idle: "transform translate-y-0 opacity-100",
  };

  useEffect(() => {
    // varje gång path ändras vill du trigga en "enter"-animation
    // t.ex:
    // 1. börja i ett "off-screen"-läge
    // 2. i nästa tick → sätt "enter"

    setPageState("enter");
    console.log("Path changed, triggering enter animation");

    // pseudo:
    // setPageState("idle");    // t.ex. translate-x-full utan transition
    // requestAnimationFrame(() => setPageState("enter"));
  }, [location.pathname]);

  return (
    <div className="bg-[conic-gradient(at_top,_#f5f1ec,_#e8e3d7,_#f5f1ec)] min-h-screen flex flex-col">
      <Navbar setPageState={setPageState} />
      <div className="flex-1 overflow-hidden relative">
        <div className={animationClasses[pageState]}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default NavLayout;
