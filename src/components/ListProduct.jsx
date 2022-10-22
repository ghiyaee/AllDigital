import { useContext, useEffect } from "react";
import { Context } from "../context";
import "../style/listproduct.scss";
const ListProduct = () => {
    const { state, dispatch } = useContext(Context)
  const { imgSlider } = state
  const render = imgSlider.map((img, ind) => {
    return (
      <div className="mobile" key={ind}>
        <img src={img.img} alt={`image${img.id } `} />
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
