import { Link } from "react-router-dom";
import { useState } from "react";
const Login = ({ sign, showMain }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   console.log(showMain);
  const loginHandel = () => {
    const list = JSON.parse(localStorage.getItem("sign"));
    if (email === list[2].toLowerCase() && password === list[1].toLowerCase()) {
      setEmail("");
      setPassword("");
      console.log(list);
      sign(false);
    } else {
      return;
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
            type="email"
            placeholder="E-mail  "
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <input
            type="text"
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
