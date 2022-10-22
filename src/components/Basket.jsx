import { useContext, useState,useEffect } from "react";
import { Context } from "../context";
import '../style/basket.scss'
const Basket = () => {
let [countPluse, setCountPluse] = useState([]);
  const [total, setTOtal] = useState();
  const { state, dispatch } = useContext(Context);
  const { card } = state;
  const addHandel = (item, n) => {
    const ind = card.indexOf(item)
    const arr = card;
    arr[ind].count += n
    setCountPluse([...arr])
  }
   const minHandel = (item, n) => {
     const ind = card.indexOf(item);
     const arr = card;
     arr[ind].count -= n;
     setCountPluse([...arr]);
  };
  const totalHandel = () => {
      let total=0
      card.map(t => (total += t.count * t.price) )
     setTOtal(total);
  };
  useEffect(() => {
    totalHandel()
  })
   let subTotal = 0;
   const render = card.map((item) => {
     return (
       <div className="container-basket" key={item.id}>
         <div className="wrrap-basket">
           <div>
             <div>
               <img src={item.img} alt="imageProduct" />
             </div>
             <div className="text">
               <p>{item.model}</p>
               <p>${item.price}</p>
             </div>
           </div>
           <div className="sumitem">
             <p>sum item :$ {(subTotal = item.price * item.count)}</p>
             <div className="counter">
               <span className="click" onClick={() => addHandel(item, 1)}>
                 +
               </span>
               <span>{item.count}</span>
               <span
                 className="click"
                 onClick={() => (item.count === 1 ? "" : minHandel(item, 1))}
               >
                 -
               </span>
             </div>
           </div>
         </div>
       </div>
     );
    });
  
  return (
    <>
      {render}
      <div className="total">
        <div>
          <span>total Products :$</span>
          <span>{total}</span>
        </div>
        <button>click buying</button>
      </div>
    </>
  );
};

export default Basket;
