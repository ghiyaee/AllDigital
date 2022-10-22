
import { PerProvider } from '../src/context';
import Nabnar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Slider from './components/Slider';
import Main from './components/Main'
import './style/app.scss'
import SidebarLeft from './components/SidebarList';
import Basket from './components/Basket';
import { useState } from 'react';
const App = () => { 
  const [showCrad,setShowCard]=useState(false)
   return (
   <PerProvider>
             <div className="App">
                  <div className='fixed'>    
                 <Nabnar setShowCard={setShowCard } />
                 <SearchBar  
                 setShowCard={setShowCard} />
                     </div>
                    {!showCrad ? <Main/>:<Basket/> }
                 {/* <Main/> */}
             </div> 
   </PerProvider>
  )
}
export default  App;
