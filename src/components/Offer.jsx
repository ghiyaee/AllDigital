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
        
    }
  }
        return (
          <div className="cradOffer" key={item.id}>
            <div className="img-offer">
              <div className="offer-text">
                <p>OFFER%</p>
              </div>
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
    </div>
  );
};

export default Offer;
