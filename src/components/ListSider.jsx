import { useContext, useEffect } from "react";
import { Context } from "../context";
import "../style/listsider.scss";
const ListSlider = () => {
  const { state, dispatch } = useContext(Context);
  const { products, counter1 } = state;
  const trans = { transform: ` translateX(${counter1}px)` };
  const renderlist = products.map((item, ind) => {
    return (
      <div className={`wrraplist `} style={trans} key={ind}>
        <div className="product">
          <div className="img">
            <img src={item.img} alt="image product" />
          </div>
        </div>
        <div className="titel">
          <span>{item.product}</span>
          {/* <span>price:${item.price}</span> */}
        </div>
       
      </div>
    );
  });
  return (
    <>
      <div className="container-list">
        {renderlist}
        <div className="arrow-leftL" onClick={() => dispatch("GoToPervList")}>
          {counter1 === 0 ? (
            <div className="arrow hiden">{`<`}</div>
          ) : (
            <div className="arrowLeft">{`<`}</div>
          )}
        </div>
        <div className="arrow-rightL" onClick={() => dispatch("GoToNextList")}>
          {counter1 === -2700 ? (
            <div className="arrow hiden">{`<`}</div>
          ) : (
            <div className="arrowLeft">{`>`}</div>
          )}
        </div>
      </div>
    </>
  );
};
export default ListSlider;
