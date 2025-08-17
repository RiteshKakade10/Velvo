import { useState } from 'react';
import { Menu, X, ShoppingCart, User, Search, Heart } from 'lucide-react';
import RotatingBanner from './Effects/RotatingBanner';
import velvo from '../assets/VELVOLOGO.png';
import { Link } from 'react-router-dom';
import MegaMenu from '../Dropdowns/MegaMenu';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const links = ["New ⚡️", "Men", "Women", "Sports", "Lifestyle", "Kids", "Sale"];

  const handleSearch = (e) => {
    e.preventDefault();
    // Find matching elements on the page (example: by text content)
    const elements = Array.from(document.querySelectorAll('body *'))
      .filter(el => el.textContent.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (elements.length) {
      elements[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
      elements[0].style.backgroundColor = 'yellow'; // highlight first match
      setTimeout(() => { elements[0].style.backgroundColor = ''; }, 2000);
    } else {
      alert('No matching elements found!');
    }
  };

  return (
    <div>
      <RotatingBanner />
      <nav className="fixed top-8 left-0 w-full z-40 bg-black text-white shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between relative">

          {/* Left Side */}
          <div className="flex items-center gap-6">
            <div className="md:hidden">
              <button className="focus:outline-none" onClick={() => setOpen(!open)}>
                {open ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
              </button>
            </div>

            <Link to="/" className="flex justify-start items-center space-x-2">
              <img src={velvo} alt="Logo" className="h-15 w-auto object-contain" />
            </Link>

            <ul className="hidden md:flex gap-6 text-sm font-medium items-center relative z-50">
              {links.map((link, i) => {
                const key = link.toLowerCase();
                const isOpen = openDropdown === key;
                return (
                  <li key={i} onMouseEnter={() => setOpenDropdown(key)} onMouseLeave={() => setOpenDropdown(null)} className="relative cursor-pointer group">
                    <div className="flex items-center text-white hover:underline decoration-red-500 underline-offset-4 transition">
                      {link} <span className={`ml-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
                    </div>
                    {isOpen && <div className="absolute top-full left-0 z-[9999]"><MegaMenu type={key} /></div>}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4 ml-auto">
            {/* Search Icon */}
            <div className="p-2 rounded-full hover:bg-white/30 transition duration-200 cursor-pointer relative">
              <Search className="w-5 h-5 text-white" onClick={() => setShowSearch(!showSearch)} />
              
              {showSearch && (
                  <form onSubmit={handleSearch} className="absolute top-full right-0 mt-2 bg-white p-2 rounded shadow-md flex gap-2">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="px-2 py-1 border border-gray-300 rounded text-black focus:outline-none"
                    />
                    <button type="submit" className="bg-red-500 text-white px-2 py-1 rounded">Go</button>
                  </form>
                )}

            </div>

            <div className="p-2 rounded-full hover:bg-white/30 transition duration-200 cursor-pointer">
              <Link to="/wishlist"><Heart className="w-5 h-5 text-white" /></Link>
            </div>
            <div className="p-2 rounded-full hover:bg-white/30 transition duration-200 cursor-pointer">
              <Link to='/cart'><ShoppingCart className="w-5 h-5 text-white" /></Link>
            </div>
            <div className="p-2 rounded-full hover:bg-white/30 transition duration-200 cursor-pointer">
              <Link to="/acc"><User className="w-5 h-5 text-white" /></Link>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden bg-white px-4 pb-4">
            <ul className="flex flex-col gap-3 text-sm font-medium items-center">
              {links.map((link, i) => {
                const key = link.toLowerCase();
                const isOpen = openDropdown === key;
                return (
                  <li key={i} className="w-full relative">
                    <div onClick={() => setOpenDropdown(isOpen ? null : key)} className="flex justify-between items-center text-black cursor-pointer px-2 py-2 hover:text-red-500">
                      {link} <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
                    </div>
                    {isOpen && (
                      <div className="absolute top-full mt-2 z-50 left-1/2 -translate-x-1/2 max-w-[90vw]">
                        <MegaMenu type={key} isMobile />
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
