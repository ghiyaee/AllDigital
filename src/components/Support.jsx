import {NavLink, Outlet} from "react-router-dom";

const Support = () => {
    const style=({isActive})=> {return {color: isActive?'black':'tomato'}}
  return (
    <>
      <h1>Support</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, aut
        tempora animi debitis temporibus excepturi non fuga omnis molestias
        fugiat corrupti voluptas at, vel quasi, error incidunt facere
        accusantium est!
      </p>
            <NavLink  style={style} to="st">Support tehran</NavLink>||
            <NavLink  style={style} to="sk">Support karaj</NavLink>
      <Outlet/>
    </>
  );
};

export default Support;
