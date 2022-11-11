import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import { PerProvider } from '../src/context';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Main from './components/Main'
import './style/app.scss'
import Basket from './components/Basket';
import { useState } from 'react';
import ListMobile from './components/ListMobile';
import ListLabtab from './components/ListLabtab';
import ListTablet from './components/ListTablet';
import ListFlash from './components/ListFlash';
import ListHdd from './components/ListHdd';
import ListSdd from './components/ListSdd';
import Sign from './components/Sign';
import Login from './components/Login';
import Footer from './components/Footer';
import Search from './components/Search';
const App = () => { 
  const [showMain, setShowMain] = useState(false)
  const [login,setlo]=useState(false)
  const [sign,setsi]=useState(false)
  const [search,setSearch]=useState(false)

  return (
    <div className="App">   
      <Router>
          < div className = 'fixed'  >
          <Navbar  />
       
          <Register srch={search} sign={sign } login={login} />
          </div>
        <Routes>
        <Route path='/' element={<div> {!showMain? <Main /> : <Basket />}</div>  }/>
          < Route path = '/mobile'element = { <div > < ListMobile/>   <Footer/> </div>}/>
          <Route path='/labtab' element={<div><ListLabtab /> <Footer/></div>} />
          <Route path='/tablet' element={<div><ListTablet/> <Footer/></div>} />
          <Route path='/Flash Memory' element={<div><ListFlash/> <Footer/></div>} />
           <Route path='/Hdd Disk' element={<div><ListHdd/> <Footer/></div>} />
          <Route path='/Sdd Disk' element={<div><ListSdd/> <Footer/></div>} />
          <Route path='/sign' element={!sign ? <Sign sign={setsi } />:''} />
          <Route path='/login' element={!login ? <Login login={setlo} sign={setsi } />: <Main/>} />
          <Route path='/basket' element={<Basket/> } />
        </Routes>
        
     </Router>
      {/* <Router>
         <Routes>
          <Route path='/' element={<Navbar/> }/>
          <Route path='/mobile' element={<ListMobile />} />
          <Route path='/labtab' element={ <ListLabtab/>} />
      </Routes>
      </Router> */}
    </div> 
  )
}
export default  App;


  //  <PerProvider>
  //             <div className='fixed'>
  //             <Nabnar setShowMain={setShowMain} />
  //               <Register setShowMain={setShowMain} />
  //             </div>
  //             {!showMain ? <Main /> : <Basket />}
  //           </PerProvider> }/>