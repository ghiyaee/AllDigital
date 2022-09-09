import { logDOM } from "@testing-library/react";
import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useContext, useState, useEffect } from "react";
import { context } from "../App";
import "../components/conter.css";
const Conter = () => {
  const { state, dispatch } = useContext(context);
  let [sidebar, setSidebar] = useState("hiden");
  let [menuOpen, setMenuOpen] = useState("open");
  let [menuClose, setMenuClose] = useState("close");
  let [filter, setFilter] = useState("");
  useEffect(() => {
    if (sidebar == "show") {
      setMenuOpen((menuOpen = "close"));
      setMenuClose((menuClose = "open"));
      setFilter((filter = "filter"));
    } else if (sidebar == "hiden") {
      setMenuOpen((menuOpen = "open"));
      setMenuClose((menuClose = "close"));
      setFilter((filter = ""));
    }
  });
  return (
    <>
      <header className="header">
        <nav className="nav">
          <h1>logo</h1>
          <ul>
            <li className="list-nav">BENZ</li>
            <li className="list-nav">TOYOTA</li>
            <li className="list-nav">FORD</li>
            <li className="list-nav">DENA</li>
          </ul>
        </nav>
        <button className="btn-menu">
          <div>
            <i
              className={`fa-solid fa-bars ${menuOpen} `}
              onClick={() => setSidebar(sidebar == "hiden" ? "show" : "hiden")}
            ></i>
          </div>
          <div>
            <i
              className={`fa-solid fa-xmark ${menuClose}`}
              onClick={() => setSidebar(sidebar == "show" ? "hiden" : "show")}
            ></i>
          </div>
        </button>
        <div className={`sidebar ${sidebar}`}>
          <ul>
            <li className="list">BENZ</li>
            <li className="list">TOYOTA</li>
            <li className="list">FORD</li>
            <li className="list">DENA</li>
          </ul>
        </div>
      </header>
      <div className={`container ${filter}`}>
        <div className="titel">
          <span>manoochehr</span>
          <span>{state.ageM}</span>
          <span onClick={() => dispatch("pluseM")} className="btn">
            add
          </span>
          <span onClick={() => dispatch("dpluseM")} className="btn">
            decri
          </span>
        </div>
        <div className="titel">
          <span>fartash</span>
          <span>{state.ageF}</span>
          <span onClick={() => dispatch("pluseF")} className="btn">
            add
          </span>
          <span onClick={() => dispatch("dpluseF")} className="btn">
            decri
          </span>
        </div>
        <div className="titel">
          <span>farnoosh</span>
          <span>{state.agef}</span>
          <span onClick={() => dispatch("plusef")} className="btn">
            add
          </span>
          <span onClick={() => dispatch("dplusef")} className="btn">
            decri
          </span>
        </div>
      </div>
    </>
  );
};

export default Conter;
