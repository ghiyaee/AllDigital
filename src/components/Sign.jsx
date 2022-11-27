import { useState,useEffect,useRef } from "react";
import {  Link } from "react-router-dom";
import '../style/sign.scss'
const Sign = ({si }) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const input=useRef()
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
  useEffect(() => {
    input.current.focus()
  },[])
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
            ref={input}
          />
          <input
            type="password"
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