import React,{useContext} from "react";
import { useRef, useState, useEffect } from "react";
import { Context } from "../context";
import "../style/navbar.scss";
const Nabnar = () => {
  const { state, dispatch } = useContext(Context);
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <i className="fa-solid fa-store"></i>
          <h1>All Digital</h1>
        </div>
        <div className="list-nav">
          <a href="#">Mobile</a>
          <a href="#">Labtab</a>
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
        <div className={`sidebarLeft ${state.sidebar}`}>
          <ul className="trans">
            <h2>All Digital</h2>
            <li
              className="list "
              onClick={() =>
                state.showMobile === "actv"
                  ? dispatch("MOBILE")
                  : dispatch("DMOBILE")
              }
            >
              <h3> Mobile</h3>
              <i
                className={`fa-solid opacty fa-${
                  state.showMobile === "actv" ? "plus" : "minus"
                }`}
              ></i>
            </li>
            <ul className={` ul ${state.showMobile}`}>
              <li>Appel</li>
              <li>Samsung</li>
              <li>Lg</li>
              <li>Xiaomi</li>
              <li>Motorola</li>
            </ul>
            <li
              className="list"
              onClick={() =>
                state.showLabtab === "actv"
                  ? dispatch("LABTAB")
                  : dispatch("DLABTAB")
              }
            >
              <h3>Labtab</h3>
              <i
                className={`fa-solid opacty fa-${
                  state.showLabtab === "actv" ? "plus" : "minus"
                }`}
              ></i>
            </li>
            <ul className={`ul ${state.showLabtab}`}>
              <li>Asus</li>
              <li>Samsung</li>
              <li>Appel</li>
              <li>Acer</li>
              <li>Lonovo</li>
            </ul>
            <li
              className="list"
              onClick={() =>
                state.showFlash === "actv"
                  ? dispatch("FLASH")
                  : dispatch("DFLASH")
              }
            >
              <h3> Flash</h3>
              <i
                className={`fa-solid opacty fa-${
                  state.showFlash === "actv" ? "plus" : "minus"
                }`}
              ></i>
            </li>
            <ul className={`ul ${state.showFlash}`}>
              <li>Adata</li>
              <li>Samsung</li>
              <li>Sandisk</li>
              <li>Hp</li>
              <li>KingStone</li>
            </ul>
            <li
              className="list"
              onClick={() =>
                state.showHdd === "actv" ? dispatch("HDD") : dispatch("DHDD")
              }
            >
              <h3> Hdd</h3>
              <i
                className={`fa-solid opacty fa-${
                  state.showHdd === "actv" ? "plus" : "minus"
                }`}
              ></i>
            </li>
            <ul className={`ul ${state.showHdd}`}>
              <li>WestrenDigital</li>
              <li>Samsung</li>
              <li>Seget</li>
              <li>Maxtor</li>
            </ul>
            <li
              className="list"
              onClick={() =>
                state.showSdd === "actv" ? dispatch("SDD") : dispatch("DSDD")
              }
            >
              <h3> Sdd</h3>
              <i
                className={`fa-solid opacty fa-${
                  state.showSdd === "actv" ? "plus" : "minus"
                }`}
              ></i>
            </li>
            <ul className={`ul ${state.showSdd}`}>
              <li>Adata</li>
              <li>Samsung</li>
              <li>Sandisk</li>
              <li>Acer</li>
              <li>Asus</li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nabnar;
