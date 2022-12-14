import { Link } from "react-router-dom";
import { useState,useRef,useEffect } from "react";
const Login = ({ sign,login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const input=useRef()
  const loginHandel = () => {
    const list = JSON.parse(localStorage.getItem("sign"));
    if (email === list[2].toLowerCase() && password === list[1].toLowerCase()) {
      setEmail("");
      setPassword("");
      login(true);
      sign(true)
    } else {
      return
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
            type="email"
            placeholder="E-mail  "
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            ref={input}
          />
          <input
            type="password"
            placeholder="PassWord "
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <button className="login__btn__sin" onClick={loginHandel}>
            Sign In
          </button>
          <p>Please a Create Account a Short Time</p>
          <Link to="/sign">
            <button className="login__btn__crt">Create Account</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Login;
