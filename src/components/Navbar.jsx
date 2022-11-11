import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { Context } from "../context";
import "../style/navbar.scss";
import SidebarLeft from "./SidebarList";
import { Link } from "react-router-dom";
const Navbar = ({ setShowMain,search }) => {
  const { state, dispatch } = useContext(Context);

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link className="logo-nav" to={"/"} onClick={()=>dispatch('SerachOff')}>
            <h1>All Digital</h1>
          </Link>
        </div>
        <div className="bknav" onClick={()=> dispatch("SerachOn")}>
          <Link className="list-nav mobi" to="/mobile">
            Mobile
          </Link>
          <Link className="list-nav" to="/labtab">
            Labtab
          </Link>
          <Link className="list-nav" to="/tablet">
            Tablet
          </Link>
          <Link className="list-nav" to="/Flash Memory">
            Flash
          </Link>
          <Link className="list-nav" to="/Hdd Disk">
            Hard ext
          </Link>
          <Link className="list-nav" to="/Sdd Disk">
            Hard sdd
          </Link>
        </div>
        <button className="btn-menu">
          <div>
            <i
              onClick={() => dispatch("SHOW")}
              className={`fa-solid fa-bars ${state.openMenu}`}
            ></i>
          </div>
          <div>
            <i
              onClick={() => dispatch("HIDEN")}
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
