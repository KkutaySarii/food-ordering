import React, { useState } from "react";
import { useRouter } from "next/router";

import { MdOutlineFastfood } from "react-icons/md";
import { RiEBike2Line } from "react-icons/ri";
import { IoExitOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { BsWindowDesktop } from "react-icons/bs";
import { toast } from "react-toastify";
import axios from "axios";

import Products from "@/components/Admin/products";
import Orders from "@/components/Admin/orders";
import Category from "@/components/Admin/category";
import Footer from "@/components/Admin/footer";

const Index = () => {
  const [tabs, setTabs] = useState(0);

  const { push } = useRouter();

  const logout = async () => {
    try {
      const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin`);
      if (res.data.success) {
        toast.success(res.data.message);
        push("/admin/login");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

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
                <BsWindowDesktop />
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
                onClick={logout}
              >
                <IoExitOutline />
                <span>Çıkış</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {tabs === 0 && <Products />}
      {tabs === 1 && <Orders />}
      {tabs === 2 && <Category />}
      {tabs === 3 && <Footer />}
    </div>
  );
};

export const getServerSideProps = (ctx) => {
  const cookie = ctx.req?.cookies || "";
  if (cookie.admin !== process.env.ADMIN_TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default Index;
