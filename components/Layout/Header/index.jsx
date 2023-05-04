import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";

import Search from "@/components/Ui/Search";
import Logo from "@/components/Ui/Logo";

const Header = () => {
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
            isMenuModal && "hidden"
          }`}
        >
          <ul className="flex md:flex-row flex-col items-center">
            <li className="py-[5px] px-5 uppercase hover:text-primary cursor-pointer transition-all">
              <Link href="/home">Home</Link>
            </li>
            <li className="py-[5px] px-5 uppercase hover:text-primary cursor-pointer transition-all">
              <Link href="/menu">Menu</Link>
            </li>
            <li className="py-[5px] px-5 uppercase hover:text-primary cursor-pointer transition-all">
              <Link href="/about">About</Link>
            </li>
            <li className="py-[5px] px-5 uppercase hover:text-primary cursor-pointer transition-all">
              <Link href="/reservation">Book Table</Link>
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
          <Link href="/" className="mx-[10px]">
            <FaUser className="hover:text-primary cursor-pointer transition-all" />
          </Link>
          <Link href="/" className="mx-[10px]">
            <FaShoppingCart className="hover:text-primary cursor-pointer transition-all" />
          </Link>
          <button
            onClick={() => setIsSearchModal(true)}
            className="mx-[10px] z-50"
          >
            <FaSearch className="hover:text-primary cursor-pointer transition-all" />
          </button>
          <Link href="/" className="md:inline-block hidden">
            <button className="btn mx-[10px]">Order Online</button>
          </Link>
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

export default Header;
