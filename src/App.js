import {PerProvider } from '../src/context';
import Nabnar from './components/Navbar';
import SearchBar from './components/SearchBar';

import './style/app.scss'
 const App = () => { 
   return (
   <PerProvider>
    <div className="App">
      <Nabnar />
      <SearchBar/>
    </div> 
   </PerProvider>
    

  )
}
export default  App;
