import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context";
import "../style/searchbar.scss";
const Register = ({ sign, login }) => {
  const name = JSON.parse(localStorage.getItem("sign"));
  const { state, dispatch } = useContext(Context);
  let { searchbar } = state;
  const searchHandel = (e) => {
    dispatch({ type: "SRCMO", payload: e.target.value });
     dispatch({ type: "SRCLB", payload: e.target.value });
  };
  return (
    <>
      <div className="searchbar">
        <div className={`form ${searchbar}`}>
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
          {login ? `welcome: ${name[0]} ` : <Link to="/login">LOGIN</Link>}
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
