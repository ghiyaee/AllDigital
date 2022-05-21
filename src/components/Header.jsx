import {NavLink,useNavigate} from "react-router-dom";
import "./Header.css";
const Header = () => {
  const login = useNavigate();
  const style = ({ isActive }) => { return { color: isActive ? 'black' : 'tomato' } }
  const loginHandel = () => {
    login('/lo',{state:'login sucsses'})
  }
  return (
    <>
      <div className="list">
        <nav className="navbar">
          <a>NAVBAR</a>
          <div className="items">
            <NavLink  style={style} to="/">Home</NavLink>
            <NavLink  style={style} to="/pr">Products</NavLink>
            <NavLink style={style} to="/su">Support</NavLink>
            <button onClick={loginHandel}>login</button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
