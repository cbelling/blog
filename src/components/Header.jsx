import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="flex items-center justify-between mb-10 px-4">
      <p className="text-xl font-bold text-center">Austin Bellinger</p>
      <div className="relative md:hidden" style={{ marginLeft: 'auto' }}>
        <button
          onClick={toggleMenu}
          className="text-xl bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
        >
          {showMenu ? <FiX /> : <FiMenu />}
        </button>
        <nav
          className={`absolute right-0 mt-2 bg-white text-lg flex flex-col md:flex-row md:items-center md:justify-between md:w-auto ${
            showMenu ? 'block' : 'hidden'
          }`}
        >
          <a href="/" className="mx-3 py-2 border-t border-gray-200">
            Home
          </a>
          <a href="/" className="mx-3 py-2 border-t border-gray-200">
            About Me
          </a>
          <a href="/articles" className="mx-3 py-2 border-t border-gray-200">
            Articles
          </a>
          <a href="/books" className="mx-3 py-2 border-t border-gray-200">
            Books
          </a>
        </nav>
      </div>
      <nav className="hidden md:flex md:items-center md:justify-between md:w-auto">
        <a href="/" className="mx-3">
          Home
        </a>
        <a href="/" className="mx-3">
          About Me
        </a>
        <a href="/articles" className="mx-3">
          Articles
        </a>
        <a href="/books" className="mx-3">
          Books
        </a>
      </nav>
      <button
        className="hidden md:block bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
        style={{ marginLeft: 'auto' }}
      >
        Subscribe
      </button>
    </header>
  );
};

export default Header;
