import { useContext } from "react";
import { Context } from "../context";
import "../style/slider.scss";
const Slider = () => {
  const { state, dispach } = useContext(Context);
  const { imgs } = state;
  return (
    <>
      <div className="container">
        <div className="slider-top">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum saepe
            itaque expedita! Laboriosam debitis voluptates quasi sunt obcaecati,
            minima odit distinctio necessitatibus dolorum molestias, ratione
            sequi doloribus eius veritatis nulla!
          </p>
          <div className="img">
            <img src={imgs[0]} alt="" />
          </div>
        </div>

        <div className="slider-top">
          <div className="img">
            <img src={imgs[1]} alt="" />
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum saepe
            itaque expedita! Laboriosam debitis voluptates quasi sunt obcaecati,
            minima odit distinctio necessitatibus dolorum molestias, ratione
            sequi doloribus eius veritatis nulla!
          </p>
        </div>
        <div className="slider-top">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum saepe
            itaque expedita! Laboriosam debitis voluptates quasi sunt obcaecati,
            minima odit distinctio necessitatibus dolorum molestias, ratione
            sequi doloribus eius veritatis nulla!
          </p>
          <div className="img">
            <img src={imgs[2]} alt="" />
          </div>
        </div>
        <div className="slider-top">
          <div className="img">
            <img src={imgs[3]} alt="" />
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum saepe
            itaque expedita! Laboriosam debitis voluptates quasi sunt obcaecati,
            minima odit distinctio necessitatibus dolorum molestias, ratione
            sequi doloribus eius veritatis nulla!
          </p>
        </div>
        <div className="slider-top">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum saepe
            itaque expedita! Laboriosam debitis voluptates quasi sunt obcaecati,
            minima odit distinctio necessitatibus dolorum molestias, ratione
            sequi doloribus eius veritatis nulla!
          </p>
          <div className="img">
            <img src={imgs[4]} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
