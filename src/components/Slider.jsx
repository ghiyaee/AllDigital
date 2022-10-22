import { useContext, useEffect } from "react";
import { Context } from "../context";
import "../style/slider.scss";
const Slider = () => {
  const { state, dispatch } = useContext(Context);
  const { imgSlider, counter,backcolor } = state;
  const slide = { backgroundImage: `url(${imgSlider[counter].img})` };
   const bk = { background :backcolor[counter]};
  const text = () => {
    if (counter === 0) {
      return (
        <>
          <h2>{imgSlider[counter].model}</h2>
          <p>{imgSlider[counter].titel}</p>
        </>
      );
    } else if (counter === 1) {
      return (
        <>
          <h2>{imgSlider[counter].model}</h2>
          <p>{imgSlider[counter].titel}</p>
        </>
      );
    } else if (counter === 2) {
      return (
        <>
          <h2>{imgSlider[counter].model}</h2>
          <p>{imgSlider[counter].titel}</p>
        </>
      );
    } else if (counter === 3) {
      return (
        <>
          <h2>{imgSlider[counter].model}</h2>
          <p>{imgSlider[counter].titel}</p>
        </>
      );
    } else if (counter === 4) {
      return (
        <>
          <h2>{imgSlider[counter].model}</h2>
          <p>{imgSlider[counter].titel}</p>
        </>
      )
    } else if (counter === 5) {
      return (
        <>
          <h2>{imgSlider[counter].model}</h2>
          <p>{imgSlider[counter].titel}</p>
        </>
      );
    }
  }
  useEffect(() => {
    const reset = setInterval(() => {
      dispatch("GoToNext");
    }, 7000);
    return () => {
      clearInterval(reset);
    };
  }, [counter]);
  return (
    <>
      <div className="wrrap" style={bk}>
        <div className="imgStyle" style={slide}></div>
        <div className="wrrap-mobile">

        <div className="text">
          {text()}
          <button>best choice</button>
        </div>
        <div className="arrow">
        <div className="arrow-left" onClick={() => dispatch("GoToPerv")}>
          {/* <i className="fa-solid fa-circle-left"></i> */}
          <div className="arrowL ">{`<`}</div>
        </div>
        <div className="arrow-right" onClick={() => dispatch("GoToNext")}>
          {/* <i className="fa-solid fa-circle-right"></i> */}
          <div className="arrowR">{`>`}</div>
        </div>
        </div>
        </div>
      </div>
    </>
  );
};
export default Slider;
