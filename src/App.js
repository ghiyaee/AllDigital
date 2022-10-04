import {PerProvider } from '../src/context';
import Nabnar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Slider from './components/Slider';
import Main from './components/Main'
import './style/app.scss'
import SidebarLeft from './components/SidebarList';
 const App = () => { 
   return (
   <PerProvider>
    <div className="App">
         <Nabnar />
         <SearchBar />
         <Main/>
        
    </div> 
   </PerProvider>
    

  )
}
export default  App;
