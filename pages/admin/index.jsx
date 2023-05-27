import Image from "next/image";
import React, { useState } from "react";

import { MdOutlineFastfood } from "react-icons/md";
import { RiEBike2Line } from "react-icons/ri";
import { IoExitOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";

import Password from "@/components/Profile/password";
import Order from "@/components/Profile/order";
import Products from "@/components/Admin/products";

const Index = () => {
  const [tabs, setTabs] = useState(0);

  return (
    <div className="px-10 flex justify-between sm:flex-row flex-col sm:items-start items-center gap-10 mb-10">
      <div className="flex flex-col w-72">
        <div className="p-6 border-x-2 border-t-2 border-b flex flex-col items-center">
          <FaUserAlt
            className="rounded-full border-4 border-black"
            size={100}
          />
          <b className="text-2xl text-center mt-1">Admin</b>
        </div>
        <div>
          <ul className="font-bold text-sm">
            <li
              className={`border-x-2 text-black border-t border-b-2 ${
                tabs === 0 && "text-white bg-primary"
              }`}
            >
              <button
                className="p-2 flex items-center gap-x-1 hover:bg-primary hover:text-white w-full"
                onClick={() => setTabs(0)}
              >
                <MdOutlineFastfood />
                <span>Products</span>
              </button>
            </li>
            <li
              className={`border-x-2 text-black border-t border-b-2 ${
                tabs === 1 && "text-white bg-primary"
              }`}
            >
              <button
                className="p-2 flex items-center gap-x-1 hover:bg-primary hover:text-white w-full"
                onClick={() => setTabs(1)}
              >
                <RiEBike2Line />
                <span>Orders</span>
              </button>
            </li>
            <li
              className={`border-x-2 text-black border-t border-b-2 ${
                tabs === 2 && "text-white bg-primary"
              }`}
            >
              <button
                className="p-2 flex items-center gap-x-1 hover:bg-primary hover:text-white w-full"
                onClick={() => setTabs(2)}
              >
                <BiCategory />
                <span>Categories</span>
              </button>
            </li>
            <li
              className={`border-x-2 text-black border-t border-b-2 ${
                tabs === 3 && "text-white bg-primary"
              }`}
            >
              <button
                className="p-2 flex items-center gap-x-1 hover:bg-primary hover:text-white w-full"
                onClick={() => setTabs(3)}
              >
                <IoExitOutline />
                <span>Footer</span>
              </button>
            </li>
            <li
              className={`border-x-2 text-black border-t border-b-2 ${
                tabs === 4 && "text-white bg-primary"
              }`}
            >
              <button
                className="p-2 flex items-center gap-x-1 hover:bg-primary hover:text-white w-full"
                onClick={() => setTabs(4)}
              >
                <IoExitOutline />
                <span>Çıkış</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {tabs === 0 && <Products />}
      {tabs === 1 && <Password />}
      {tabs === 2 && <Order />}
    </div>
  );
};

export default Index;
