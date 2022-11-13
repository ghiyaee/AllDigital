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
            <Link
              to="/mobile"
              className="link"
              onClick={() => dispatch({ type: "HIDEN" })}
            >
              <h3> Mobile</h3>
            </Link>
            <i class="fa-solid fa-arrow-left"></i>
          </li>
          <li
            className="list"
            onClick={() =>
              state.showLabtab === "actv"
                ? dispatch("LABTAB")
                : dispatch("DLABTAB")
            }
          >
            <Link
              to="/labtab"
              className="link"
              onClick={() => dispatch({ type: "HIDEN" })}
            >
              <h3>Labtab</h3>
            </Link>
            <i class="fa-solid fa-arrow-left"></i>
          </li>

          <li
            className="list"
            onClick={() =>
              state.showFlash === "actv"
                ? dispatch("FLASH")
                : dispatch("DFLASH")
            }
          >
            <Link
              to="/Flash Memory"
              className="link"
              onClick={() => dispatch({ type: "HIDEN" })}
            >
              <h3> Flash</h3>
            </Link>
            <i class="fa-solid fa-arrow-left"></i>
          </li>

          <li
            className="list"
            onClick={() =>
              state.showHdd === "actv" ? dispatch("HDD") : dispatch("DHDD")
            }
          >
            <Link
              to="/Hdd Disk"
              className="link"
              onClick={() => dispatch({ type: "HIDEN" })}
            >
              <h3> Hdd</h3>
            </Link>
            <i class="fa-solid fa-arrow-left"></i>
          </li>

          <li
            className="list"
            onClick={() =>
              state.showSdd === "actv" ? dispatch("SDD") : dispatch("DSDD")
            }
          >
            <Link
              to="/Sdd Disk"
              className="link"
              onClick={() => dispatch({ type: "HIDEN" })}
            >
              <h3> Sdd</h3>
            </Link>
            <i class="fa-solid fa-arrow-left"></i>
          </li>
        </ul>
      </div>
    );
}
 
export default SidebarList;