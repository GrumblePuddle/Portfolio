import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="block w-full max-w-screen-lg px-4 py-2 mx-auto text-white bg-white shadow-md rounded-md lg:px-8 lg:py-3 mt-10">
      <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
        <a
          href="#"
          className="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold"
        >
          Gustav Liffner
        </a>
        <div className="hidden lg:block">
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
              <Link to="/">Landing Page</Link>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
              <Link to="/about">About Me</Link>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
              <a href="#" className="flex items-center">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
