import {PerProvider } from '../src/context';
import Nabnar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Slider from './components/Slider';
import Main from './components/Main'
import './style/app.scss'
 const App = () => { 
   return (
   <PerProvider>
    <div className="App">
         <Nabnar />
         <SearchBar />
         <Main/>
           {/* <Slider /> */}
        

    </div> 
   </PerProvider>
    

  )
}
export default  App;
