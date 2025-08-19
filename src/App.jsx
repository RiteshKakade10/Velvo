import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Navbar.jsx';
import Home from './Pages/Home.jsx';
import Account from './Pages/Account.jsx';
import CartDropdown from './Pages/CartDropdown.jsx';
import WishList from './Pages/WishList.jsx'
import Footer from './Pages/Footer.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import MainPageRendering from './NavbarSectionCoponents/MainPageRendering.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';

function App() {
 
  return (
    <BrowserRouter basename="/Velvo">

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acc" element={<Account />} />
        <Route path="/cart" element={<CartDropdown />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/New/:category" element={<MainPageRendering />} />
        <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
