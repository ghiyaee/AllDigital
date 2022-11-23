import { logDOM } from "@testing-library/react";
import { useContext, useState, useEffect } from "react";
import { Context } from "../context";
import "../style/offer.scss";
const Offer = () => {
  const { state, dispatch } = useContext(Context);
  let { productOffer, card } = state;
  let [mil_, setMil_] = useState(1000);
  let [sec_, setSec_] = useState(0);
  let [min_, setMin_] = useState(0);
  let [hr_, setHr_] = useState(10);
  let [active, setActive] = useState(false);
  let [order, setOrder] = useState("hiden-order");
  let [order1, setOrder1] = useState("hiden-order");
   let [order2, setOrder2] = useState("hiden-order");
  const [isactive,serIsActive]=useState([''])
  
  function dPluse() {
    if (mil_ === 0) {
      if (sec_ === 0) {
        if (min_ === 0 && !active) {
          setHr_(hr_ - 1);
          setMin_((min_ = 60));
          setActive((active = true));
        } else {
          setMin_(min_ - 1);
          setSec_((sec_ = 60));
        }
        if (min_ === 0) {
          setHr_((hr_ = 0));
          setMin_(min_ - 0);
          setSec_((sec_ = 0));
        }
      } else {
        setSec_(sec_ - 1);
        setMil_((mil_ = 1000));
      }
    } else {
      setMil_((mil_ -= 10));
    }
  }
  useEffect(() => {
    const rest = setInterval(() => {
      dPluse();
    }, 10);
    return () => {
      clearInterval(rest);
    };
  }, [mil_]);

  const render = productOffer.map((item, ind) => {
    const addHandel = (item) => {
      if (card.indexOf(item) === -1) {
        item.count ++
       card.push(item)
        dispatch({ type: "Basket" });
        if (item.id === 1) {
           setOrder((order = "show-order"));
           setInterval(() => {
             setOrder((order = "hiden-order"));
           }, 1500);
        } 
        if (item.id === 2) {
          setOrder1((order1 = "show-order"));
          setInterval(() => {
            setOrder1((order1 = "hiden-order"));
          }, 1500);
        } 
          if (item.id === 3) {
            setOrder2((order2 = "show-order"));
            setInterval(() => {
              setOrder2((order2 = "hiden-order"));
            }, 1500);
          } 
        }
       
  }
    return (
      <div className="cradOffer" key={item.id}>
        <div className="offer-text">
          <p>offer%</p>
        </div>
        <div className="img-offer">
          <div className="imgoffer">
            <img src={item.img} alt="" />
           
          </div>
        </div>
        <div className="titel-Offer">
          <div className="titeltext">
            <div>
              <p>{item.model}</p>
              <p>${item.price}</p>
            </div>
            <div className="buying-offer">
              <div className="arrows">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
              <i
                className="fa-sharp fa-solid fa-cart-shopping "
                onClick={() => addHandel(item)}
              ></i>
            </div>
          </div>
          <div className="timeroffer">
            <span>{hr_}</span>
            <span>:</span>
            <span>{min_}</span>
            <span>:</span>
            <span>{sec_}</span>
          </div>
        </div>
      </div>
    );
      })
  return (
    <div className="container-offer">
      {render}
      <div className={`order ${order}`}>
        <p>Add Order To Basket</p>
        </div>
        <div className={`order1 ${order1}`}>
          <p>Add Order To Basket</p>
        </div>
        <div className={`order2 ${order2}`}>
          <p>Add Order To Basket</p>
        </div>
      </div>
  
  );
};

export default Offer;
