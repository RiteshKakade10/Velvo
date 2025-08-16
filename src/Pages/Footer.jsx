import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'; // Assuming Lucide React is available for icons
import velvo from '../assets/VELVOLOGO.png'; // Assuming your logo path is correct - REMOVED

const Footer = () => {
  // Using a placeholder image URL for the logo

  return (
   <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 mt-0 font-inter">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Section 1: Logo and About */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link to="/" className="mb-4">
            {/* Using the placeholder image URL */}
            <img src={velvo} alt="VELVO Logo" className="h-16 w-auto object-contain" /> {/* Invert for dark background */}
          </Link>
          <p className="text-sm leading-relaxed mb-4">
            VELVO is your ultimate destination for fashion. We're passionate about bringing you the latest trends and timeless styles.
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Instagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Twitter size={20} />
            </a>
            <a href="https://www.linkedin.com/in/riteshkakade/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Section 2: Company */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 text-center md:text-left">Company</h4>
          <ul className="space-y-2 text-center md:text-left">
            <li><Link to="/about" className="hover:text-white transition-colors duration-300 text-sm">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-white transition-colors duration-300 text-sm">Careers</Link></li>
            <li><Link to="/press" className="hover:text-white transition-colors duration-300 text-sm">Press</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors duration-300 text-sm">Blog</Link></li>
          </ul>
        </div>

        {/* Section 3: Products */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 text-center md:text-left">Products</h4>
          <ul className="space-y-2 text-center md:text-left">
            <li><Link to="/category/men" className="hover:text-white transition-colors duration-300 text-sm">Men</Link></li>
            <li><Link to="/category/women" className="hover:text-white transition-colors duration-300 text-sm">Women</Link></li>
            <li><Link to="/category/kids" className="hover:text-white transition-colors duration-300 text-sm">Kids</Link></li>
            <li><Link to="/sale" className="hover:text-white transition-colors duration-300 text-sm">Sale</Link></li>
            <li><Link to="/new-arrivals" className="hover:text-white transition-colors duration-300 text-sm">New Arrivals</Link></li>
          </ul>
        </div>

        {/* Section 4: Help & Support */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 text-center md:text-left">Help & Support</h4>
          <ul className="space-y-2 text-center md:text-left">
            <li><Link to="/faq" className="hover:text-white transition-colors duration-300 text-sm">FAQ</Link></li>
            <li><Link to="/shipping" className="hover:text-white transition-colors duration-300 text-sm">Shipping Information</Link></li>
            <li><Link to="/returns" className="hover:text-white transition-colors duration-300 text-sm">Returns & Exchanges</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors duration-300 text-sm">Contact Us</Link></li>
            <li><Link to="/size-guide" className="hover:text-white transition-colors duration-300 text-sm">Size Guide</Link></li>
          </ul>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-10 pt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} VELVO. All rights reserved. Made By Ritesh Kakade.
      </div>
    </footer>
  );
};

export default Footer;
