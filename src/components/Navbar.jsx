import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { Context } from "../context";
import "../style/navbar.scss";
import SidebarLeft from "./SidebarList";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { state, dispatch } = useContext(Context);
  const { searchbar } = state;
  const [nav, setNav] = useState();
 const scrollUp = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link
            className="logo-nav"
            to={"/"}
            onClick={() => dispatch({ type: "SearchOff", payload: searchbar })}>
            <h1>All Digital</h1>
          </Link>
        </div>
        <div className="bknav" onClick={scrollUp}>
          <Link
            className="list-nav mobi"
            to="/mobile"
            onClick={() => dispatch({ type: "SearchOn", payload: searchbar })}
          >
            Mobile
          </Link>

          <Link
            className="list-nav"
            to="/labtab"
            onClick={() => dispatch({ type: "SearchOn", payload: searchbar })}
          >
            Labtab
          </Link>
          <Link
            className="list-nav"
            to="/tablet"
            onClick={() => dispatch({ type: "SearchOn", payload: searchbar })}
          >
            Tablet
          </Link>
          <Link
            className="list-nav"
            to="/Flash Memory"
            onClick={() => dispatch({ type: "SearchOn", payload: searchbar })}
          >
            Flash
          </Link>
          <Link
            className="list-nav"
            to="/Hdd Disk"
            onClick={() => dispatch({ type: "SearchOn", payload: searchbar })}
          >
            Hard 
          </Link>
          <Link
            className="list-nav"
            to="/Sdd Disk"
            onClick={() => dispatch({ type: "SearchOn", payload: searchbar })}
          >
             sdd
          </Link>
        </div>

        <button className="btn-menu">
          <div>
            <i
              onClick={() => dispatch({ type: "SHOW" })}
              className={`fa-solid fa-bars ${state.openMenu}`}
            ></i>
          </div>
          <div>
            <i
              onClick={() => dispatch({ type: "HIDEN" })}
              className={`fa-solid fa-xmark ${state.closeMenu}`}
            ></i>
          </div>
        </button>
      </div>
      <SidebarLeft />
    </>
  );
};

export default Navbar;
