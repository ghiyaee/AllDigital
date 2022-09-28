import { useContext, useEffect } from "react";
import { Context } from "../context";
import "../style/slider1.scss";
const Slider1 = () => {
  const { state, dispatch } = useContext(Context);
  const { imgs, counter1 } = state;
  const slide = { backgroundImage: `url(${imgs[counter1]})` };
  console.log(slide);
  useEffect(() => {
    const reset = setInterval(() => {
      dispatch("GoToNextL");
    }, 5000);
    return () => {
      clearInterval(reset);
    };
  }, [counter1]);
  return (
    <>
      <div className="wrrap">
        <div className="arrow-leftL" onClick={() => dispatch("GoToPervL")}>
          <i className="fa-solid fa-circle-left"></i>
        </div>
        <div className="arrow-rightL" onClick={() => dispatch("GoToNextL")}>
          <i className="fa-solid fa-circle-right"></i>
        </div>
        <div className="slideStyle" style={slide}></div>
      </div>
    </>
  );
};
export default Slider1;
