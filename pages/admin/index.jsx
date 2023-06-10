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
import Swal from "sweetalert2";

import Products from "@/components/Admin/products";
import Orders from "@/components/Admin/orders";
import Category from "@/components/Admin/category";
import Footer from "@/components/Admin/footer";
import AddProduct from "@/components/Admin/addProduct";

const Index = ({ productList }) => {
  const [tabs, setTabs] = useState(0);
  const [isProductModal, setIsProductModal] = useState(false);

  const { push } = useRouter();

  const logout = async () => {
    try {
      Swal.fire({
        title: "Do you want to logout?",
        text: "You need to login again to use the app",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#10b981",
        cancelButtonColor: "#ef4444",
        confirmButtonText: "Yes, logout",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axios.put(
            `${process.env.NEXT_PUBLIC_API_URL}/admin`
          );
          if (res.data.success) {
            toast.success(res.data.message);
            push("/admin/login");
          }
        }
      });
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
      {tabs === 0 && <Products productList={productList} />}
      {tabs === 1 && <Orders />}
      {tabs === 2 && <Category />}
      {tabs === 3 && <Footer />}
      {isProductModal && <AddProduct setIsProductModal={setIsProductModal} />}
      <button
        className="absolute bottom-10 right-10 btn !w-12 !h-12 !p-0 !grid place-content-center !rounded-full"
        onClick={() => setIsProductModal(!isProductModal)}
      >
        +
      </button>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const cookie = ctx.req?.cookies || "";
  if (cookie.admin !== process.env.ADMIN_TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }
  const products = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products`
  );
  return {
    props: { productList: products.data.data },
  };
};

export default Index;
