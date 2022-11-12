import { useContext, useState,useEffect} from "react";
import { Context } from "../context";
import "../style/main.scss";
import ListSlider from "./ListSider";
import Slider from "./Slider";
import ListProduct from "./ListProduct";
import Offer from "./Offer";
import Footer from "./Footer";
const Main = () => {
  const { state, dispatch } = useContext(Context);
  const { imgs, filtrMenu,upper } = state;
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
    const scrollUp = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  useEffect(() => {
     window.addEventListener("scroll", () => {
       if (window.scrollY > 300) {
         dispatch({ type: "Upper" });
       } else {
         dispatch({ type: "Down" });
       }
     });
  })
  useEffect(() => {
    const rest = setInterval(() => {
      dPluse();
    }, 10);
    return () => {
      clearInterval(rest);
    };
  }, [mil_]);

  return (
    <>
      <div
        className={`container ${filtrMenu} `}
        onClick={() => dispatch("HIDEN")}
      >
        <Slider />
        <Offer />
        <ListSlider />
        <ListProduct />
        <Footer />
        <div className={`upper ${upper}`} onClick={scrollUp}>
          ^
        </div>
      </div>
    </>
  );
};

export default Main;
