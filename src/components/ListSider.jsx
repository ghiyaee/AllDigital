import { useContext, useEffect } from "react";
import { Context } from "../context";
import "../style/listsider.scss";
const ListSlider = () => {
  const { state, dispatch } = useContext(Context);
  const { listImg, counter1 } = state;
  const trans = { transform: ` translateX(${counter1}px)` };
  const renderlist = listImg.map((img, ind) => {
    return (
        <div className={`wrraplist ${trans}`} style={trans}  key={ind}>
          <div className="img">
            <img src={img} alt="image product" />
            <div className="titel">
              <p>price 3000</p>
              <button>buying</button>
            </div>
          </div>
        </div>
     
    );
  });
  return (
    <>
    <div className="container-list" >
      {renderlist}
      <div className="arrow-leftL" onClick={() => dispatch("GoToPervList")}>
          <i className="fa-solid fa-circle-left"></i>
      </div>
      <div className="arrow-rightL" onClick={() => dispatch("GoToNextList")}>
        <i className="fa-solid fa-circle-right"></i>
        </div>
        </div>
    </>
  );
};
export default ListSlider;
