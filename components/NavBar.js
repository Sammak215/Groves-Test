import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent border-t border-b border-white p-4 hidden sm:block">
      <ul className="flex justify-center space-x-40 text-white tracking-widest">
        <li className="">DINE WITH US</li>
        <li className="">PLAN YOUR VISIT</li>
        <li className="">EVENTS</li>
        <li className="">VIEW GROVES MAP</li>
        <li className="">OUR STORY</li>
        <li className="">CONTACT US</li>
      </ul>
    </nav>
  );
};

export default Navbar;
