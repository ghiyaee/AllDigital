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
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pr' element={<Product />} />
          <Route path='/su' element={<Support />}>
            <Route path='st' element={<SupTeharn />}>
              <Route path=':kr' element={<Param/> }/>
            </Route>
            <Route path='sk' element={ <SupKaraj/>}/>
          </Route>
          <Route path='/lo' element={<Login/> }/>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
