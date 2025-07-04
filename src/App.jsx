import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Account from './Components/Account';
import CartDropdown from './Components/CartDropdown.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acc" element={<Account />} />
        <Route path="/cart" element={<CartDropdown />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
