import { useContext, useEffect } from "react";
import { Context } from "../context";
import "../style/slider.scss";
const Slider = () => {
  const { state, dispatch } = useContext(Context);
  const { imgSlider, counter } = state;
  const slide = { backgroundImage: `url(${imgSlider[counter]})` };
  const text = () => {
    if (counter === 0) {
      return (
        <>
          <h2>mobile</h2>
          <p>The latest version</p>
        </>
      );
    } else if (counter === 1) {
       return (
         <>
           <h2>labtab</h2>
           <p>With High Elegance And Power</p>
         </>
       );
    } else if (counter === 2) {
       return (
         <>
           <h2>Flash Memory</h2>
           <p>Small But Portable And Strong</p>
         </>
       );
    } else if (counter === 3) {
       return (
         <>
           <h2>Hdd Disk</h2>
           <p>With High capacity </p>
         </>
       );
    } else if (counter === 4) {
       return (
         <>
           <h2>Sdd Disk</h2>
           <p>High Speed For Operating System </p>
         </>
       );
    }
  }
 
  // useEffect(() => {
  //   const reset = setInterval(() => {
  //     dispatch("GoToNext");
  //   }, 19000);
  //   return () => {
  //     clearInterval(reset);
  //   };
  // }, [counter]);
  return (
    <>
      <div className="wrrap">
        <div className="imgStyle" style={slide}></div>
        <div className="text">
          {text()}
          <button>best choice</button>
        </div>
        <div className="arrow-left" onClick={() => dispatch("GoToPerv")}>
          <i className="fa-solid fa-circle-left"></i>
        </div>
        <div className="arrow-right" onClick={() => dispatch("GoToNext")}>
          <i className="fa-solid fa-circle-right"></i>
        </div>
      </div>
    </>
  );
};
export default Slider;
