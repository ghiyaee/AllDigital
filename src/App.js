import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Header from "./components/Header";
import Home from "./components/Home";
import Support from "./components/Support";
import Product from "./components/Product";
import "./components/App.css"
import SupTeharn from './components/SupTehran';
import SupKaraj from './components/SupKaraj';
import Param from './components/Param';
import Login from './components/Login';
import { MyProvider } from './context'
import React, { useReducer,useContext, createContext } from 'react';
import Counter from './components/Counter';
export const context = React.createContext();

// const init = {
//   con1:0,
//   con2:100
// }

// const reducer = (state,action) => {
//   switch (action.type) {
//     case 'pluse' :
//       return { ...state, con1: state.con1 + 1 }
//       case 'desP':
//         return { ...state, con1: state.con1 > 0 ? state.con1 - 1 : 0 }
//         case 'pluseDi':
//           return { ...state, con2: state.con2 + action.value }
//           case 'desPDi':
//             return { ...state, con2: state.con2 > 100 ?  state.con2 +- action.value : 100 }
//             default:
//               return state
//             }
//           }
const value = {
   ageM:54,
   ageF:21,
   agef:17
}
const reducer = (state, action) => {
  switch (action) {
    case 'pluseM':
      return  {...state,ageM: state.ageM + 1 }
      case "dpluseM":
      return { ...state, ageM: state.ageM - 1 }
       case 'pluseF':
      return  {...state,ageF: state.ageF+ 1 }
      case "dpluseF":
      return { ...state, ageF: state.ageF - 1 }
       case 'plusef':
      return  {...state,agef: state.agef + 1 }
      case "dplusef":
      return { ...state, agef: state.agef - 1 }
        default:
          return state
        }
        
      }
      function App() {
        const [state, dispatch] = useReducer(reducer, value)
  
  return (
    <div className="App">
      {/* <Router>
        <Header />
        <Routes>
          <Route path='/' element={< Home/>}/>
          <Route path='/pr' element={
            <MyProvider>
              <Product />
            </MyProvider>
          } />
          <Route path='/su' element={<Support />}>
            <Route path='st' element={<SupTeharn />}>
              <Route path=':kr' element={<Param/> }/>
            </Route>
            <Route path='sk' element={ <SupKaraj/>}/>
          </Route>
          <Route path='/lo' element={<Login/> }/>
        </Routes>
      </Router> */}
      <context.Provider value={{state,dispatch}}>
        <Counter />   
      </context.Provider>    
    </div>
  );
}

export default  App;
