import React from "react";
import ThemeController from "../../common/controllers/ThemeController";
import { Link } from "react-router-dom";
import LanguageController from "../../common/controllers/LanguageController";

const Navbar = ({ content }) => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link className="text-lg font-semibold" to={"/About"}>
                {content.nav1}
              </Link>
            </li>
            <li>
              <Link className="text-lg font-semibold" to={"Skills"}>
                {content.nav2}
              </Link>
            </li>
            <li>
              <Link className="text-lg font-semibold" to={"/Contact"}>
                {content.nav3}
              </Link>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          Camilo Medina
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <Link className="text-lg font-semibold" to={"/About"}>
              {content.nav1}
            </Link>
          </li>
          <li>
            <Link className="text-lg font-semibold" to={"/Skills"}>
              {content.nav2}
            </Link>
          </li>
          <li>
            <Link className="text-lg font-semibold" to={"/Contact"}>
              {content.nav3}
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeController />
        <LanguageController />
      </div>
    </div>
  );
};

export default Navbar;
