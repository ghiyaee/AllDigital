
import { useContext, useState } from "react";
import { Context } from "../context";
import "../style/listmobile.scss";
const ListLabtab = () => {
  const { state, dispatch } = useContext(Context);
  let { productLabtab, card } = state;
  const [add, setAdd] = useState([]);
  const render = productLabtab.map((item, ind) => {
    const addHandel = (item) => {
      if (card.indexOf(item) === -1) {
        item.count++;
        card.push(item);
        dispatch("Basket");
      }
    };
    return (
      <div className="wrrap-mobile" key={item.id}>
        <div className="img">
          <img src={item.img} alt="" />
        </div>
        <div className="mobile-titel">
          <p>
            <span>Brand</span> {item.model}
          </p>
          <p>
            <span>Ram</span> {item.ram}
          </p>
          <p>
            <span>Sdd</span> {item.sdd}
          </p>
          <p>
            <span>price</span> {item.price}$
          </p>
          <button onClick={() => addHandel(item)}>Add To Basket</button>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="container-mobile">{render}</div>
    </>
  );
};

export default ListLabtab;
