import { useContext ,useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { Context } from "../context";
import "../style/searchbar.scss";
import Basket from "./Basket";
const Register = ({ sign,login, showMain,search }) => {
  const name = JSON.parse(localStorage.getItem("sign"));
  const { state, dispatch } = useContext(Context);
  let { productsMobile,searchbar } = state;
  const searchHandel = (e) => {
    const newArr = productsMobile.filter((item) =>
      item.model.includes(e.target.value)
    );
  };
  return (
    <>
      <div className="searchbar">
        <div className={`form ${searchbar}`} >
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
           {login ? `welcome: ${name[0]} `: <Link to="/login">LOGIN</Link>}
          <Link to={"/basket"}>
            <i className="fa-sharp fa-solid fa-cart-shopping"></i>
          </Link>
          <span className="count-baslet">{state.basket}</span>
        </div>
      </div>
    </>
  );
};

export default Register;
