
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CoinDetails from './components/CoinDetails';
import Coins from './components/Coins';
import Exchange from './components/Exchange';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/coins' element={<Coins></Coins>}></Route>
        <Route path='/exchange' element={<Exchange></Exchange>}></Route>
        <Route path='/coin/:id' element={<CoinDetails></CoinDetails>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
