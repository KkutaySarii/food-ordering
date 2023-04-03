import React from "react";

import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";

import Logo from "../../Ui/Logo";

const index = () => {
  return (
    <div className="h-[5.5rem] bg-secondary">
      <div className="container mx-auto flex items-center justify-between text-white h-full">
        <Logo />
        <nav>
          <ul className="flex ">
            <li className="py-[5px] px-5 uppercase hover:text-primary cursor-pointer transition-all">
              <a href="#">Home</a>
            </li>
            <li className="py-[5px] px-5 uppercase hover:text-primary cursor-pointer transition-all">
              <a href="#">Menu</a>
            </li>
            <li className="py-[5px] px-5 uppercase hover:text-primary cursor-pointer transition-all">
              <a href="#">About</a>
            </li>
            <li className="py-[5px] px-5 uppercase hover:text-primary cursor-pointer transition-all">
              <a href="#">Book Table</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center">
          <a href="#" className="mx-[10px]">
            <FaUser className="hover:text-primary cursor-pointer transition-all" />
          </a>
          <a href="#" className="mx-[10px]">
            <FaShoppingCart className="hover:text-primary cursor-pointer transition-all" />
          </a>
          <a href="#" className="mx-[10px]">
            <FaSearch className="hover:text-primary cursor-pointer transition-all" />
          </a>
          <a href="#">
            <button className="btn">Order Online</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
