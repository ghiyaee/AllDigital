import { useContext, useState, useEffect } from "react";
import { Context } from "../context";
import "../style/footer.scss";
const Footer = () => {
  const{state}=useContext(Context)
  const { imgfooter } = state;
  return (
    <div className="container-footer">
      <div className="footer-info">
        <ul className="footer-header-ul">
          <li className="footer-header-li">
            <img className="imgser" src={imgfooter[0]} alt="" />
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
            <img className="imgser" src={imgfooter[1]} alt="" />
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
            <img className="imgser" src={imgfooter[2]} alt="" />
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
        <span>
          <i className="fa-brands fa-telegram"></i>
        </span>
        <span>
          <i className="fa-brands fa-whatsapp"></i>
        </span>
        <span>
          <i className="fa-brands fa-instagram"></i>
        </span>
        <span>
          <i className="fa-regular fa-envelope"></i>
        </span>
      </div>
      <span className="copyright">&copy;2022 allDigitall</span>
    </div>
  );
};

export default Footer;
