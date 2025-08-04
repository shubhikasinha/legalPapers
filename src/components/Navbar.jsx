import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50">
      <div className="bg-[#2c1000] text-white px-8 py-1 mx-auto max-w-7xl rounded-full shadow-xl flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logowhite.png" alt="logo" className="h-8" />
          <img src="/whitelp.png" alt="logo" className="h-8 mt-1" />
          
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-8 font-semibold">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">Talk to Lawyers</li>
          <li className="hover:text-gray-300 cursor-pointer">Cart</li>
          <li className="hover:text-gray-300 cursor-pointer">Blogs</li>
          <li className="hover:text-gray-300 cursor-pointer">Profile</li>
        </ul>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#2c1000] text-white px-4 py-1 rounded-full pl-5 pr-10 border border-gray placeholder-white"
          />
          <span className="absolute right-3 top-2.5 text-white">🔍</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
