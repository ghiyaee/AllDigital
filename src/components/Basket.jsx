import { useContext, useState,useEffect} from "react";
import { Context } from "../context";
import '../style/basket.scss'
import img from '../img/imgbas.jpg'
import Footer from "./Footer";
const Basket = () => {
  const { state, dispatch } = useContext(Context);
   let { card, imgbasket } = state;
  let [countPluse, setCountPluse] = useState([]);
  const [total, setTOtal] = useState();
  const [filter, setFelter] = useState(card)
  const [basketEmpty, setBasketEmpty] = useState([
    { transform: `translateX(-200px)` },
    { transform: `translateX(-100px)` },
  ]);
  const addHandel = (item) => {
    const ind = filter.indexOf(item);
    const arr = filter;
    arr[ind].count ++;
    setCountPluse([...arr]);
  };
  const minHandel = (item) => {
    const ind = filter.indexOf(item);
    const arr = filter;
    arr[ind].count --;
    setCountPluse([...arr]);
  };
  const totalHandel = () => {
    let total = 0;
    filter.map((t) => (total += t.count * t.price));
    setTOtal(total);
  };
  const deleHandel = (index) => {
    const arr = filter.filter((i) => i.id != index.id);
    setFelter(arr)
    card.pop(...arr)
    dispatch({ type: "DecBasket" });
  }
  useEffect(() => {
    totalHandel();
  });
  
  let subTotal = 0;
  const render = filter.map((item) => {
    return (
      <div className="container-basket" key={item.id}>
        <div className="wrrap-basket">
            <div className="offer-img">
              <img src={item.img} alt="imageProduct" />
            </div>
          <div className="sumitem">
            <div className="text">
              <p>{item.model}</p>
              <p>${item.price}</p>
            </div>
            <p> this item sum:$ {(subTotal = item.price * item.count)}</p>
            <div className="counter">
              <span className="click" onClick={() => addHandel(item)}>
                +
              </span>
              <span>{item.count}</span>
              <span
                className={`click ${item.count > 1 ? "show" : "hiden"}`}
                onClick={() => (item.count === 1 ? "" : minHandel(item, 1))}
              >
                -
              </span>
              <span className={`${item.count > 1 ? "hiden" : "show"}`}>
                <i
                  onClick={() => deleHandel(item)}
                  className="fa-solid fa-trash-can trash "
                ></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  setTimeout(() => {
      setBasketEmpty({ transform: `translateX(0px)` });
   },600)
 
  return (
    <>
      <div className="container_basket">
        {subTotal ? (
          <div className="coni">{render}</div>
        ) : (
          <div className="basketemtp">
            <img src={imgbasket} alt="" style={basketEmpty[0]} />
            <p className="emptybasket" style={basketEmpty[1]}>
              Empty Basket
            </p>
          </div>
        )}
        <div className="total">
          <div>
            <span>Total Products : $</span>
            <span>{total}</span>
          </div>
          <button>Click Buying</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Basket;
