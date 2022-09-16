import React from "react";
import "../style/navbar.scss";
import { useRef, useState, useEffect } from "react";
const Nabnar = () => {
  const ref = useRef();
  let [sidebarLeft, setSidebarLeft] = useState("Sidehiden");
  let [OpenMenu, setOpenMenu] = useState("open");
  let [CloseMenu, setCloseMenu] = useState("close");
  let [showMobile, setShowMobile] = useState("actv");
  let [showLabtab, setShowLabtab] = useState("actv");
  let [showFlash, setShowFlash] = useState("actv");
  let [showHdd, setShowHdd] = useState("actv");
  let [showSdd, setShowSdd] = useState("actv");
  useEffect(() => {
    if (sidebarLeft == "SidehidenShow") {
      setCloseMenu((CloseMenu = "openMenu"));
      setOpenMenu((OpenMenu = "closeMenu"));
    } else {
      setCloseMenu((CloseMenu = "closeMenu"));
      setOpenMenu((OpenMenu = "openMenu"));
    }
  });
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
          {/* <a href="#">Sign Up / Login</a> */}
        </div>
        {/* <a href="#">Sign Up / Login</a> */}
        <button className="btn-menu">
          <div>
            <i
              onClick={() => setSidebarLeft((sidebarLeft = "SidehidenShow"))}
              ref={ref}
              className={`fa-solid fa-bars ${OpenMenu} `}
            ></i>
          </div>
          <div>
            <i
              onClick={() => setSidebarLeft((sidebarLeft = "Sidehiden"))}
              className={`fa-solid fa-xmark ${CloseMenu}`}
            ></i>
          </div>
        </button>
        <div className={`sidebarLeft ${sidebarLeft}`}>
          <ul className="trans">
            <h2>All Digital</h2>
            <li
              className="list "
              onClick={() =>
                showMobile === "actv"
                  ? setShowMobile((showMobile = "show"))
                  : setShowMobile((showMobile = "actv"))
              }
            >
              <h3> Mobile</h3>
              <i
                className={`fa-solid fa-arrow-${
                  showMobile === "actv" ? "down" : "up"
                }`}
              ></i>
            </li>
            <ul className={` ul ${showMobile}`}>
              <li>Appel</li>
              <li>Samsung</li>
              <li>Lg</li>
              <li>Xiaomi</li>
              <li>Motorola</li>
            </ul>
            <li
              className="list"
              onClick={() =>
                showLabtab === "actv"
                  ? setShowLabtab((showLabtab = "show"))
                  : setShowLabtab((showLabtab = "actv"))
              }
            >
              <h3>Labtab</h3>
              <i
                className={`fa-solid fa-arrow-${
                  showLabtab === "actv" ? "down" : "up"
                }`}
              ></i>
            </li>
            <ul className={`ul ${showLabtab}`}>
              <li>Asus</li>
              <li>Samsung</li>
              <li>Appel</li>
              <li>Acer</li>
              <li>Lonovo</li>
            </ul>
            <li
              className="list"
              onClick={() =>
                showFlash === "actv"
                  ? setShowFlash((showFlash = "show"))
                  : setShowFlash((showFlash = "actv"))
              }
            >
              <h3> Flash</h3>
              <i
                className={`fa-solid fa-arrow-${
                  showFlash === "actv" ? "down" : "up"
                }`}
              ></i>
            </li>
            <ul className={`ul ${showFlash}`}>
              <li>Adata</li>
              <li>Samsung</li>
              <li>Sandisk</li>
              <li>Hp</li>
              <li>KingStone</li>
            </ul>
            <li
              className="list"
              onClick={() =>
                showHdd === "actv"
                  ? setShowHdd((showHdd = "show"))
                  : setShowHdd((showHdd = "actv"))
              }
            >
              <h3> Hdd</h3>
              <i
                className={`fa-solid fa-arrow-${
                  showHdd === "actv" ? "down" : "up"
                }`}
              ></i>
            </li>
            <ul className={`ul ${showHdd}`}>
              <li>WestrenDigital</li>
              <li>Samsung</li>
              <li>Seget</li>
              <li>Maxtor</li>
            </ul>
            <li
              className="list"
              onClick={() =>
                showSdd === "actv"
                  ? setShowSdd((showSdd = "show"))
                  : setShowSdd((showSdd = "actv"))
              }
            >
              <h3> Sdd</h3>
              <i
                className={`fa-solid fa-arrow-${
                  showSdd === "actv" ? "down" : "up"
                }`}
              ></i>
            </li>
            <ul className={`ul ${showSdd}`}>
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
