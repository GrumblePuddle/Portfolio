import React from "react";
import { Link } from "react-router-dom";
import Portratt from "../Images/portratt.jpg";
import AnimatedLink from "./AnimatedLink";

const Navbar = ({ setPageState }) => {
  return (
    <nav className="w-full px-4 py-4">
      <div className="mx-auto max-w-screen-lg rounded-2xl bg-[conic-gradient(at_top,_#f5f1ec,_#e8e3d7,_#f5f1ec)] animate-gradient shadow-md overflow-hidden">
        <div className="flex items-center justify-between">
          {/* Bilden helt flush mot vänster, top, bottom */}
          <div className="h-18 w-22 rounded-r-full overflow-hidden">
            <img src={Portratt} alt="" className="h-full w-full object-cover" />
          </div>

          {/* Länkar till höger, med padding så att bilden får utrymme */}
          <ul className="flex items-center gap-10 text-base text-slate-600 pr-8">
            <li>
              <AnimatedLink to="/" setPageState={setPageState}>
                Landing Page
              </AnimatedLink>
            </li>
            <li>
              <AnimatedLink to="/about" setPageState={setPageState}>
                About Me
              </AnimatedLink>
            </li>
            <li>
              <AnimatedLink to="/portfolio" setPageState={setPageState}>
                Portfolio
              </AnimatedLink>
            </li>
            <li>
              <AnimatedLink to="/contact" setPageState={setPageState}>
                Contact
              </AnimatedLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
