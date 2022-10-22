import { useContext } from "react";
import { Context } from "../context";
import "../style/searchbar.scss";
import Basket from "./Basket";
const SearchBar = ({  setShowCard }) => {
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
          <a href="#">Sign Up / Login</a>
          <i className="fa-sharp fa-solid fa-cart-shopping"></i>
          <span className="count-baslet" onClick={() => setShowCard(true)}>
            {state.basket}
          </span>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
