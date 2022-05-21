import { useParams } from "react-router-dom";
const Param = () => {
  const {kr}=  useParams()
    return (
        <>
            <h1>this ia a Paramiters at url {kr}</h1>
    </>);
}
 
export default Param;