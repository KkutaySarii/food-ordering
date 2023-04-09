import React from "react";
import Image from "next/image";

import OutsideClickHandler from "react-outside-click-handler";
import { GiCancel } from "react-icons/gi";

import Title from "../Title";

const Search = ({ setIsSearchModal }) => {
  return (
    <div className="absolute w-screen grid place-content-center h-screen z-40 top-0 left-0 after:contents-[''] after:absolute after:bg-white after:top-0 after:left-0 after:w-screen after:h-screen after:opacity-50">
      <OutsideClickHandler
        onOutsideClick={() => {
          setIsSearchModal(false);
        }}
      >
        <div className="w-full h-full ">
          <div className=" relative z-50 md:w-[600px] w-[370px] border-2 p-10 rounded-3xl bg-white">
            <Title addClass="text-[40px] text-center">Search</Title>
            <input
              className="w-full border my-10"
              type="text"
              placeholder="Search..."
            />
            <ul>
              <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                <div className="relative flex">
                  <Image src="/images/f1.png" alt="" width={48} height={48} />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">$10</span>
              </li>
              <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                <div className="relative flex">
                  <Image src="/images/f1.png" alt="" width={48} height={48} />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">$10</span>
              </li>
              <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                <div className="relative flex">
                  <Image src="/images/f1.png" alt="" width={48} height={48} />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">$10</span>
              </li>
            </ul>
            <button
              onClick={() => setIsSearchModal(false)}
              className="absolute top-4 right-4"
            >
              <GiCancel
                size={25}
                className="hover:text-primary transition-all"
              />
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
