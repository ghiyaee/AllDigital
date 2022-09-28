import { useContext ,useEffect} from "react";
import { Context } from "../context";
import "../style/slider.scss"
const Slider = () => {
    const { state, dispatch } = useContext(Context)
    const { imgSlider, counter } = state;
    const slide = { backgroundImage: `url(${imgSlider[counter]})` };
    console.log(slide);
     useEffect(() => {
       const reset = setInterval(() => {
         dispatch("GoToNext");
       }, 5000);
       return () => {
         clearInterval(reset);
       };
     }, [counter]);
  return (
    <>
      
      <div className="wrrap">
        <div className="arrow-left" onClick={() => dispatch("GoToPerv")}>
          <i className="fa-solid fa-circle-left"></i>
        </div>
        <div className="arrow-right" onClick={() => dispatch("GoToNext")}>
          <i className="fa-solid fa-circle-right"></i>
        </div>
        <div className="slideStyle" style={slide}></div>
      </div>
    </>
  );
};
export default Slider;
