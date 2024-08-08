import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <header className="text-white body-font bg-green-500">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <span className="ml-3 text-2xl text-white">Housing</span>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-900" to="/">Home</Link>
          <Link className="mr-5 hover:text-gray-900" to="/Services">Services</Link>
          <Link className="mr-5 hover:text-gray-900" to="/About">About</Link>
          <Link className="mr-5 hover:text-gray-900" to="/Contact">Contact</Link>
        </nav>
        <button>
          <Link to="/LogIn">Log In</Link>
        </button>
      </div>
    </header>
</>
  );
};

export default Navbar;
