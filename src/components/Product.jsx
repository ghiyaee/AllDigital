import { Link } from "react-router-dom";
import { useContext} from "react";
import { MyContext } from "../context";
import "./product.css";
const Product = () => {
  const { state, toggel,update,dec} = useContext(MyContext);
  const { produts, isActive } = state;
 
  const renderlist = produts.map((item) =>
    isActive ? (
      <div className="container" key={item.id}>
        <div className="wrapper">
          <button onClick={() => update(item)}>+</button>
          <span>{item.id}</span>
          <span>{item.product}</span>
          <span>{item.number}</span>
        <button onClick={() => dec(item)}>-</button>
        </div>
      </div>
    ) : null
  );
  return (
    <>
      <h1>Prodcut</h1>
      {renderlist}
      <hr />
      <button
        onClick={toggel}
      >toggolIsactive</button>
    </>
  );
};

export default Product;
