import { useContext ,useState} from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Context } from "../context";
import '../style/listmobile.scss'
const ListMobile = () => {
  const { state, dispatch } = useContext(Context);
  let { productsMobile, card } = state;
  const [add, setAdd] = useState([])
  // const style = { backgroundImage: `url(${imgSlider[counter].img})` };
  const render = productsMobile.map((item, ind) => {
    const addHandel = (item) => {
      if (card.indexOf(item) === -1) {
        item.count++
        card.push(item);
        dispatch("Basket");
      }
      
    }
    return (
      <div className="wrrap-mobile" key={item.id}>
        <div className="mobile-img">
          <img src={item.img} alt="" />
        </div>
        <div className="mobile-titel">
          <p>
            <span>Brand</span> {item.model}
          </p>
          <p>
            <span>price</span> {item.price}$
          </p>
          <p>
            <span>Ram</span> {item.ram}
          </p>

          <button onClick={() => addHandel(item)}>Add To Basket</button>
        </div>
      </div>
    );
  })
    return (
      <>
        <div className="container-mobile">{render}</div>
      </>
    );
};
 
export default ListMobile;