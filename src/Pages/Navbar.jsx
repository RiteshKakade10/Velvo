import { useState } from 'react';
import { Menu, X, ShoppingCart, User, Search,Heart} from 'lucide-react';
import RotatingBanner from './Effects/RotatingBanner';
import velvo from '../assets/VELVOLOGO.png';
import { Link } from 'react-router-dom';
import MegaMenu from '../Dropdowns/MegaMenu';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["New ⚡️", "Men", "Women", "Sports", "Lifestyle", "Kids", "Sale"];
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div>
      <RotatingBanner />
      <nav className="fixed  top-8 left-0 w-full z-40 bg-black text-white shadow-sm z-50">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between relative">

          {/* Left Side: Hamburger + Logo + Nav Links (Desktop) */}
          <div className="flex items-center gap-6">
            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button className="focus:outline-none" onClick={() => setOpen(!open)}>
                {open ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
              </button>
            </div>

            {/* Logo */}
          <Link to="/" className="flex justify-start items-center space-x-2">
            <img src={velvo} alt="Logo" className="h-15 w-auto object-contain" />
          </Link>
          



            {/* Desktop Nav Links */}
            <ul className="hidden md:flex gap-6 text-sm font-medium items-center relative z-50">
              {links.map((link, i) => {
                const key = link.toLowerCase();
                const isOpen = openDropdown === key;

                return (
                  <li
                    key={i}
                    onMouseEnter={() => setOpenDropdown(key)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className="relative cursor-pointer group"
                  >
                    <div className="flex items-center text-white hover:underline decoration-red-500 underline-offset-4 transition">
                      {link}
                      <span className={`ml-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </div>
                    {isOpen && (
                      <div className="absolute top-full left-0 z-[9999]">
                        <MegaMenu type={key} />
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Side: Icons */}
          <div className="flex items-center gap-4 ml-auto">
            <div className="hidden md:flex p-2 rounded-full hover:bg-white/30 transition duration-200 cursor-pointer">
              <Search className="w-5 h-5 text-white" />
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

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="md:hidden bg-white px-4 pb-4">
            <ul className="flex flex-col gap-3 text-sm font-medium items-center">
              {links.map((link, i) => {
                const key = link.toLowerCase();
                const isOpen = openDropdown === key;

                return (
                  <li key={i} className="w-full relative">
                    <div
                      onClick={() => setOpenDropdown(isOpen ? null : key)}
                      className="flex justify-between items-center text-black cursor-pointer px-2 py-2 hover:text-red-500"
                    >
                      {link}
                      <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
                    </div>

                    {isOpen && (
                      <div
                        className={`
                          absolute top-full mt-2 z-50
                          left-1/2 -translate-x-1/2
                          md:left-auto md:right-0 md:translate-x-0
                          max-w-[90vw]
                        `}
                      >
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
