import React, { useState } from "react";
import { useRouter } from "next/router";

import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";

import Logo from "../../Ui/Logo";
import Search from "@/components/Ui/Search";

const Index = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);

  const router = useRouter();

  return (
    <div
      className={`h-[5.5rem] ${
        router.asPath === "/" ? "bg-transparent" : "bg-secondary"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between text-white h-full">
        <Logo />
        <nav
          className={`md:static absolute h-screen top-0 left-0 z-40 grid place-content-center text-black md:text-white md:w-auto md:h-auto w-full md:bg-transparent bg-white ${
            !isMenuModal && "hidden"
          }`}
        >
          <ul className="flex md:flex-row flex-col items-center">
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
          {isMenuModal && (
            <button
              onClick={() => setIsMenuModal(false)}
              className="md:hidden absolute top-4 right-4"
            >
              <GiCancel
                size={25}
                className="hover:text-primary transition-all"
              />
            </button>
          )}
        </nav>
        <div className="flex items-center">
          <a href="#" className="mx-[10px]">
            <FaUser className="hover:text-primary cursor-pointer transition-all" />
          </a>
          <a href="#" className="mx-[10px]">
            <FaShoppingCart className="hover:text-primary cursor-pointer transition-all" />
          </a>
          <button onClick={() => setIsSearchModal(true)} className="mx-[10px]">
            <FaSearch className="hover:text-primary cursor-pointer transition-all" />
          </button>
          <a href="#" className="md:inline-block hidden">
            <button className="btn mx-[10px]">Order Online</button>
          </a>
          <button
            onClick={() => setIsMenuModal(true)}
            className={`mx-[10px] md:hidden z-50 ${
              isMenuModal ? "hidden" : "block"
            }`}
          >
            <GiHamburgerMenu className="text-xl hover:text-primary cursor-pointer transition-all" />
          </button>
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Index;
