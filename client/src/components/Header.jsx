import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="flex items-center space-x-3">
        <img
          src="/logo.svg" // Replace with your logo path
          alt="Job App Logo"
          className="w-25 h-10 "
        />
      </div>
    <Link to="/about"><button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        About NextJob
      </button></Link>
      
    </header>
  );
}
