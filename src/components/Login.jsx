import { useLocation } from "react-router-dom";
import { useRef,useState } from "react";
const Login = () => {
  const onRef = useRef();
  const [text,textSet]=useState('')
  const location = useLocation();
  return (
    <>
      {location.state}
      <input type="text" ref={onRef} />
      <button onClick={() => console.log(onRef.current.value)}>ref</button>
      <p>{text}</p>
    </>
  );
};

export default Login;
