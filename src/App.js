import './App.css';
import "./index.css";
import Home from "./Components/Home";
import PokerPage from './Components/PokerPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='conteiner'>
      <Routes>
        <Route path="/p0ker" element={<PokerPage />} />
        <Route path="/nan-verse" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;