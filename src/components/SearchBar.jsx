import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context";
import "../style/searchbar.scss";
import Basket from "./Basket";
const SearchBar = ({ setShowMain }) => {
  const { state, dispatch } = useContext(Context);
  return (
    <>
      <div className="searchbar">
        <div className="form">
          <form action="">
            <input
              type="text"
              className="input-search"
              placeholder="Searchbar"
            />
          </form>
        </div>
        <div className="sign-buy">
          {/* <a href="#">Sign Up / Login</a> */}
          <Link to="/sign">SIGN UP/ </Link>
          <Link to="/login">LOGIN</Link>
          <Link to={"/basket"}>
            <i className="fa-sharp fa-solid fa-cart-shopping"></i>
          </Link>
          <span className="count-baslet">{state.basket}</span>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
