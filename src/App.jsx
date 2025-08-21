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
import Products from './Pages/Products/Products.jsx';
import CreateProduct from './Pages/Products/CreateProduct.jsx';
import MonstroPage1 from '../src/NavbarSectionCoponents/NEW/Monstro-Pages/monstroPage1.jsx';


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
        <Route path="/products" element={<Products />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path='*' element={<ErrorPage/>}></Route>

        //monstro Routes
       <Route path='/monstro-page1' element={<MonstroPage1/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
