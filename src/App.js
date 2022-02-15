import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Navbar';
import Cart from './components/Cart';
import TotalBox from './components/TotalBox';
import {useGlobalContext} from './context/context';

function App() {
  const {isLoading} = useGlobalContext();
  if(isLoading) {
    
  }

  return (
    <div className="App">
      <MyNavbar />
      <Cart />
      <TotalBox />
    </div>
  );
}

export default App;
