import { useContext, useState,useEffect} from "react";
import { Context } from "../context";
import "../style/main.scss";
import Slider from "./Slider";
import Slider1 from "./SliderLab";
const Main = () => {
  const { state, dispach } = useContext(Context);
  const { imgs } = state;
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

  return (
    <>
      <div className="container">
        <div className="baner">
          <div className="product">
            <div className="slider">
              <Slider />
            </div>
            <div className="span-pro">
              <span>Appel</span>
              <span>Samsung</span>
              <span>Lg</span>
              <span>Motorola</span>
              <span>Xiaomi</span>
            </div>
            <button>View</button>
          </div>
          <div className="offer">
            <h2>Offer 10%</h2>
            <div className="span">
              <span className="timer color">hr</span>
              <span className="timer">{hr_} </span>
              <span className="timer color">mi</span>
              <span className="timer">{min_} </span>
              <span className="timer color">se</span>
              <span className="timer">{sec_}</span>
            </div>
          </div>
        </div>

        <div className="baner lab">
          <div className="offer">
            <h2>Offer 5%</h2>
            <div className="span">
              <span className="timer color">hr</span>
              <span className="timer">{hr_} </span>
              <span className="timer color">mi</span>
              <span className="timer">{min_} </span>
              <span className="timer color">se</span>
              <span className="timer">{sec_}</span>
            </div>
          </div>
          <div className="product">
            <div className="slider">
              <Slider1 />
            </div>
            <div className="span-pro">
              <span >appel</span>
              <span >samsung</span>
              <span >acer</span>
              <span >xiaomi</span>
            </div>
            <button>View</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
