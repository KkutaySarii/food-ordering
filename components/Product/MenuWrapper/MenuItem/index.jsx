import Image from "next/image";
import React from "react";

import { FaShoppingCart } from "react-icons/fa";

const MenuItem = () => {
  return (
    <div className="w-full px-4">
      <div className="mt-6 rounded-[15px] text-white overflow-hidden bg-secondary">
        <div className="grid place-content-center rounded-bl-[45px] bg-menu-img-box p-6">
          <div className="relative w-[150px] h-[150px]">
            <Image
              alt=""
              src="/images/f1.png"
              layout="fill"
              className="hover:scale-105 transition-all"
            />
          </div>
        </div>
        <div className="flex flex-col p-6">
          <h5 className="text-xl mb-2 font-semibold">Delicious Pizza</h5>
          <p className="mb-4 text-[15px]">
            Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
            velit, magnam voluptatem repellendus sed eaque
          </p>
          <div className="flex justify-between items-center">
            <h6 className="my-2 text-base">$20</h6>
            <button className="bg-primary grid place-content-center w-10 h-10 rounded-full">
              <FaShoppingCart size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
