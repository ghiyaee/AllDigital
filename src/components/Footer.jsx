import { useContext, useState, useEffect } from "react";
import { Context } from "../context";
import "../style/footer.scss";
const Footer = () => {
  const { state ,dispatch} = useContext(Context);
  const { imgfooter, soail,counter2 } = state;
  const render = () => {
    if (counter2 === 0) {
      return <i className={`fa-brands fa-${soail[counter2]}`}></i>;
    } else if (counter2 === 1) {
      return <i className={`fa-brands fa-${soail[counter2]}`} ></i>;
    } else if (counter2 === 2) {
      return <i className={`fa-brands fa-${soail[counter2]}`}></i>;
    } else if (counter2 === 3) {
      return <i className={`fa-regular fa-${soail[counter2]}`}></i>;
    }
} 
 
 useEffect(() => {
   const reset = setInterval(() => {
     dispatch({ type: "GoToSoail" });
   }, 3000);
   return () => {
     clearInterval(reset);
   };
 }, [counter2]);

  return (
    <div className="container-footer">
      <div className="footer-info">
        <ul className="footer-header-ul">
          <li className="footer-header-li">
            <div className="headfooter">
              <h2>salary</h2>
              <img className="imgser" src={imgfooter[0]} alt="" />
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              incidunt fuga quas totam officia maiores ipsum dolor reiciendis
              optio itaque sit doloremque deserunt dolores, explicabo, tempora
              temporibus laboriosam cupiditate cum! Dignissimos amet tempore
              quidem tempora aut sequi necessitatibus, quasi, fuga iusto dolorum
              quaerat impedit aperiam vero esse deserunt commodi corrupti.
            </p>
          </li>
          <li className="footer-header-li">
            <div className="headfooter">
              <h2>support</h2>
              <img className="imgser" src={imgfooter[1]} alt="" />
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              incidunt fuga quas totam officia maiores ipsum dolor reiciendis
              optio itaque sit doloremque deserunt dolores, explicabo, tempora
              temporibus laboriosam cupiditate cum! Dignissimos amet tempore
              quidem tempora aut sequi necessitatibus, quasi, fuga iusto dolorum
              quaerat impedit aperiam vero esse deserunt commodi corrupti.
            </p>
          </li>
          <li className="footer-header-li">
            <div className="headfooter">
              <h2>about us</h2>
              <img className="imgser" src={imgfooter[2]} alt="" />
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              incidunt fuga quas totam officia maiores ipsum dolor reiciendis
              optio itaque sit doloremque deserunt dolores, explicabo, tempora
              temporibus laboriosam cupiditate cum! Dignissimos amet tempore
              quidem tempora aut sequi necessitatibus, quasi, fuga iusto dolorum
              quaerat impedit aperiam vero esse deserunt commodi corrupti.
            </p>
          </li>
        </ul>
      </div>
      <div className="footer-contact">
        <span>Contact Us :</span>
        <div className="sildercho">
          <div className="silderSocail">
            {render()}
          </div>
        </div>
      </div>
      <span className="copyright">&copy;2022 allDigitall</span>
    </div>
  );
};

export default Footer;
