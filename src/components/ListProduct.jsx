
import { useContext, useEffect } from "react";
import { Context } from "../context";
import "../style/listproduct.scss";
import { Link } from "react-router-dom";
import { logDOM } from "@testing-library/react";
const ListProduct = () => {
  const { state, dispatch } = useContext(Context)
  const { imgSlider, searchbar } = state
   const scrollUp = () => {
     window.scrollTo({
       top: 0,
       behavior: "smooth",
     });
   };
  const render = imgSlider.map((img, ind) => {
    return (
      <div className="mobile" key={ind} onClick={scrollUp}>
        <Link
          to={`/${img.model}`}
          onClick={() => dispatch({ type: "SearchOn", payload: searchbar })}
        >
          <img src={img.img} alt={`image${img.id} `} />
        </Link>
      </div>
    );
  });
  return (
    <div className="container-listp">
      {
        render
      }
    </div>
  );
};

export default ListProduct;
