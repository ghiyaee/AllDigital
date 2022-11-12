import { useContext } from "react";
import { Context } from "../context";
import "../style/sildeBarList.scss";
import { Link } from "react-router-dom";
const SidebarList = () => {
    const { state, dispatch } = useContext(Context);
    return (
      <div className={`sidebarLeft ${state.sidebar}`}>
        <ul className="trans">
          <li
            className="list "
            onClick={() =>
              state.showMobile === "actv"
                ? dispatch({ type: "MOBILE" })
                : dispatch({ type: "DMOBILE" })
            }
          >
            <Link to="/mobile" className="link" >
              <h3> Mobile</h3>
            </Link>
            <i
              className={`fa-solid opacty fa-${
                state.showMobile === "actv" ? "plus" : "minus"
              }`}
            ></i>
          </li>
          {/* <ul className={` ul ${state.showMobile}`}>
            <li>Appel</li>
            <li>Samsung</li>
            <li>Lg</li>
            <li>Xiaomi</li>
            <li>Motorola</li>
          </ul> */}

          <li
            className="list"
            onClick={() =>
              state.showLabtab === "actv"
                ? dispatch("LABTAB")
                : dispatch("DLABTAB")
            }
          >
            <Link to="/labtab" className="link">
              <h3>Labtab</h3>
            </Link>
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
            <Link to="/Flash Memory" className="link">
              <h3> Flash</h3>
            </Link>
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
            <Link to="/Hdd Disk" className="link">
              <h3> Hdd</h3>
            </Link>
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
            <Link to="/Sdd Disk" className="link">
              <h3> Sdd</h3>
            </Link>
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
    );
}
 
export default SidebarList;