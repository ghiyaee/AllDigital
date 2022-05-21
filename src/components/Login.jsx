import { useLocation } from "react-router-dom";
const Login = () => {
    const location=useLocation()
    return ( 
        <>
           {location.state}

        </>
     );
}
 
export default Login;