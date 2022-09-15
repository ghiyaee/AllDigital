import Nabnar from './components/Navbar';
import SearchBar from './components/SearchBar';
import './style/app.scss'
 const App = () => { 
  return (
    <div className="App">
      <Nabnar />
      <SearchBar/>
    </div>
  );
}
export default  App;
