import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Navbar';
import Cart from './components/Cart';
import TotalBox from './components/TotalBox';
import { useGlobalContext } from './context/context';

function App() {

  const { isLoading } = useGlobalContext();

  return (
    <div className="App">

      {
        isLoading
          ?
          <h2>Loading...</h2>
          :
          <div>
            <MyNavbar />
            <div className="main-wrapper">
              <Cart />
              <TotalBox />
            </div>
          </div>
      }
    </div>
  );
}

export default App;