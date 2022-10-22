import React,{useContext} from "react";
import { useRef, useState, useEffect } from "react";
import { Context } from "../context";
import "../style/navbar.scss";
import SidebarLeft from "./SidebarList";
const Nabnar = ({ setShowCard }) => {
  const { state, dispatch } = useContext(Context);
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <i className="fa-solid fa-store"></i>
          <h1 onClick={() => setShowCard(false)}>All Digital</h1>
        </div>
        <div className="list-nav">
          <a href="#">Mobile</a>
          <a href="#">Labtab</a>
          <a href="#">Tablet</a>
          <a href="#">Flash Memory</a>
          <a href="#">Hdd</a>
          <a href="#">Sdd</a>
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

export default Nabnar;
