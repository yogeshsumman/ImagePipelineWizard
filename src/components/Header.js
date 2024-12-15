import React from 'react';
import img from '../assets/image.jpg'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-slate-800 to-slate-700 text-white shadow-lg z-40 ">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <img src={img} className="text-3xl font-semibold m-0 w-36"/>
        <nav className="nav">
          {/* <ul className="flex space-x-8">
            <li>
              <a href="#home" className="text-lg hover:text-gray-300 transition duration-300">Home</a>
            </li>
            <li>
              <a href="#about" className="text-lg hover:text-gray-300 transition duration-300">About</a>
            </li>
            <li>
              <a href="#services" className="text-lg hover:text-gray-300 transition duration-300">Services</a>
            </li>
            <li>
              <a href="#contact" className="text-lg hover:text-gray-300 transition duration-300">Contact</a>
            </li>
          </ul> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;

