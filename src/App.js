import './App.css';
import Home from "./Components/Home";
import PokerPage from './Components/PokerPage';
import { Routes, Route } from 'react-router-dom';
import Prijimacky from './Components/Prijimacky';

function App() {
  return (
    <div className='conteiner'>
      <Routes>
        <Route path="/p0ker" element={<PokerPage />} />
        <Route path="/nan-verse" element={<Home />} />
        <Route path="/prijimacky" element={<Prijimacky />} />

        
      </Routes>
    </div>
  );
}

export default App;