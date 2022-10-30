import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import { PerProvider } from '../src/context';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Main from './components/Main'
import './style/app.scss'
import Basket from './components/Basket';
import { useState } from 'react';
import ListMobile from './components/ListMobile';
import ListLabtab from './components/ListLabtab';
import ListTablet from './components/ListTablet';
import ListFlash from './context/ListFlash';
import ListHdd from './components/ListHdd';
import ListSdd from './components/ListSdd';
import Sign from './components/Sign';
import Login from './components/Login';
const App = () => { 
  const [showMain, setShowMain] = useState(false)


  return (
    <div className="App">   
      <Router>
          < div className = 'fixed' >
          <Navbar />
          <SearchBar />
          </div>
        <Routes>
        <Route path='/' element={<div> {!showMain ? <Main /> : <Basket />}</div>  }/>
          <Route path='/mobile' element={<ListMobile />} />
          <Route path='/labtab' element={<ListLabtab />} />
          <Route path='/tablet' element={<ListTablet />} />
          <Route path='/Flash Memory' element={<ListFlash />} />
           <Route path='/Hdd Disk' element={<ListHdd />} />
          <Route path='/Sdd Disk' element={<ListSdd />} />
          <Route path='/sign' element={<Sign/>} />
          <Route path='/login' element={<Login/>} />
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
  //               <SearchBar setShowMain={setShowMain} />
  //             </div>
  //             {!showMain ? <Main /> : <Basket />}
  //           </PerProvider> }/>