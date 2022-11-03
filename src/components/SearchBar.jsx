import { useContext ,useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { Context } from "../context";
import "../style/searchbar.scss";
import Basket from "./Basket";
const SearchBar = ({ sign, showMain }) => {
  console.log(sign);
  const { state, dispatch } = useContext(Context);
  let { productsMobile } = state;
  const searchHandel = (e) => {
    const newArr = productsMobile.filter((item) =>
      item.model.includes(e.target.value)
    );
  };
  return (
    <>
      <div className="searchbar">
        <div className="form">
          <form action="">
            <input
              type="text"
              className="input-search"
              placeholder="Searchbar"
              onChange={searchHandel}
            />
          </form>
        </div>
        <div className="sign-buy">
          {sign ? "" : <Link to="/sign">SIGN UP/ </Link>}
           {sign?'welcome': <Link to="/login">LOGIN</Link>}
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
