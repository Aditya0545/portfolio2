import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/my-learning" className="text-white hover:text-gray-300">My Learning</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 