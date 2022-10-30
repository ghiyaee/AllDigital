
import { useContext, useEffect } from "react";
import { Context } from "../context";
import "../style/listproduct.scss";
import { Link } from "react-router-dom";
import { logDOM } from "@testing-library/react";
const ListProduct = () => {
  const { state, dispatch } = useContext(Context)
  const { imgSlider } = state
  const render = imgSlider.map((img, ind) => {
    return (
      <div className="mobile" key={ind}>
        <Link to={`/${img.model}`}>
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
