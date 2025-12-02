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
      "transform translate-x-0 opacity-100 transition-all duration-700 ease-out",
    exit: "transform -translate-x-full opacity-0 transition-all duration-500 ease-in",
    idle: "transform translate-x-0 opacity-100",
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
    <div className="bg-linear-to-bl from-violet-500 to-fuchsia-500 min-h-screen flex flex-col">
      <Navbar setPageState={setPageState} />
      <div className="flex-1 overflow-hidden relative">
        <div className={animationClasses[pageState]}>
          <Outlet />
        </div>
      </div>
      {/* Bottom: fixed carousel */}
      <div className="fixed bottom-0 left-0 right-0 z-20">
        <ProjectCarousel />
      </div>
    </div>
  );
};

export default NavLayout;
