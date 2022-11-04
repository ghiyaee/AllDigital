import { useState } from "react";
import {  Link } from "react-router-dom";
import '../style/sign.scss'
const Sign = ({si }) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const regester = () => {
    if (user === "" || pass === "" || email === "") {
      return;
    } else {
      localStorage.setItem("sign", JSON.stringify([user.toLocaleLowerCase(), pass.toLocaleLowerCase(), email.toLocaleLowerCase()]));
      setUser("");
      setPass("");
      setEmail("");
      si(true)
    }
  };
  return (
    <>
      <div className={`login__container `}>
        <div className="login__sign">
          <Link to={"/"}>
            <i className="close link large red icon "></i>
          </Link>
          <input
            type="text"
            placeholder="UserName"
            onChange={(e) => {
              setUser(e.target.value);
            }}
            value={user}
          />
          <input
            type="text"
            placeholder="PassWord"
            onChange={(e) => {
              setPass(e.target.value);
            }}
            value={pass}
          />
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          {/* <button className="login__btn__sin" onClick={loginHandel}>
              Sign In
            </button> */}
          {/* <p>By Useing && Buying Please a Create Account a Short Time</p> */}
          <Link to="/">
            <button className="login__btn__crt" onClick={regester}>
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Sign ;