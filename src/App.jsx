import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Navbar.jsx';
import Home from './Pages/Home.jsx';
import Account from './Pages/Account.jsx';
import CartDropdown from './Pages/CartDropdown.jsx';
import WishList from './Pages/WishList.jsx';
import Footer from './Pages/Footer.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import MainPageRendering from './NavbarSectionCoponents/MainPageRendering.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import Products from './Pages/Products/Products.jsx';
import CreateProduct from './Pages/Products/CreateProduct.jsx';
import MonstroPage1 from './NavbarSectionCoponents/NEW/Monstro-Pages/monstroPage1.jsx';
import NitroPage1 from './NavbarSectionCoponents/NEW/Nitro-Pages/nitropage1.jsx';
import Bags from './Pages/Bags/Bags.jsx';
import BagProducts from '../src/Pages/Bags/Bagscomponents.jsx';
import Formula_page1 from './NavbarSectionCoponents/NEW/Formula/Formula_page1.jsx';
import CareersPage from './Pages/CareersPage.jsx';
import FAQ from './Pages/FAQ.jsx';


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

        {/* Bag Page */}
        <Route path="/ladies-bags" element={<Bags />} />
        <Route path="/bags-page1" element={<BagProducts/>} />

        {/* Monstro page */}
        <Route path="/monstro-page1" element={<MonstroPage1 />} />

        {/* Nitro page */}
        <Route path="/nitro-page1" element={<NitroPage1 />} />

        {/* FormulaF1 */}
        <Route path="/formulapage1" element={<Formula_page1 />} />

        {/* Catch-all (Error Page) */}
        <Route path="*" element={<ErrorPage />} />

         {/* Career Page */}
        <Route path="/careers" element={<CareersPage/>} />

         {/*FAQ*/}
        <Route path="/faq" element={<FAQ/>} />

        {/*FAQ*/}
        <Route path="/faq" element={<FAQ/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
