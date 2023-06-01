import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { AiOutlineHome } from "react-icons/ai";
import { IoKey } from "react-icons/io5";
import { RiEBike2Line } from "react-icons/ri";
import { IoExitOutline } from "react-icons/io5";
import { getSession, signOut, useSession } from "next-auth/react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

import Accounts from "@/components/Profile/accounts";
import Order from "@/components/Profile/orders";
import Password from "@/components/Profile/password";

const Index = () => {
  const [tabs, setTabs] = useState(0);
  const { push } = useRouter();
  const handleSignout = () => {
    setTabs(3);
    Swal.fire({
      title: "Do you want to logout?",
      text: "You need to login again to use the app",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#10b981",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, logout",
    }).then((result) => {
      if (result.isConfirmed) {
        toast.success("Logout successfully");
        signOut({
          redirect: false,
        });
        push("/auth/login");
      }
    });
  };

  return (
    <div className="px-10 flex sm:flex-row flex-col sm:items-start items-center gap-10 mb-10">
      <div className="flex flex-col w-72">
        <div className="p-6 border-x-2 border-t-2 border-b flex flex-col items-center">
          <Image
            alt=""
            src="/images/download.jpg"
            width={100}
            height={100}
            className="rounded-full"
          />
          <b className="text-2xl text-center mt-1">Zoe Barnes</b>
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
                <AiOutlineHome />
                <span>Home</span>
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
                <IoKey />
                <span>Password</span>
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
                <RiEBike2Line />
                <span>Orders</span>
              </button>
            </li>
            <li
              className={`border-x-2 text-black border-t border-b-2 ${
                tabs === 3 && "text-white bg-primary"
              }`}
            >
              <button
                className="p-2 flex items-center gap-x-1 hover:bg-primary hover:text-white w-full"
                onClick={handleSignout}
              >
                <IoExitOutline />
                <span>Çıkış</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {tabs === 0 && <Accounts />}
      {tabs === 1 && <Password />}
      {tabs === 2 && <Order />}
    </div>
  );
};

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default Index;
