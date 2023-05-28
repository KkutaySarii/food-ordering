import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

import { FaShoppingCart } from "react-icons/fa";

const MenuItem = (props) => {
  const { product } = props;
  const router = useRouter();
  const handleNav = () => {
    router.push({ pathname: "/product", query: product });
  };
  return (
    <div className="w-full px-4">
      <div className="mt-6 rounded-[15px] text-white overflow-hidden bg-secondary">
        <div className="grid place-content-center rounded-bl-[45px] bg-menu-img-box p-6">
          <button onClick={handleNav}>
            <div className="relative w-[150px] h-[150px]">
              <Image
                alt=""
                src={product.image}
                layout="fill"
                className="hover:scale-105 transition-all"
              />
            </div>
          </button>
        </div>
        <div className="flex flex-col p-6">
          <h5 className="text-xl mb-2 font-semibold">{product.name}</h5>
          <p className="mb-4 text-[15px]">
            {product.desc.length > 100
              ? product.desc.slice(0, 100) + "..."
              : product.desc}
          </p>
          <div className="flex justify-between items-center">
            <h6 className="my-2 text-base">${product.price}</h6>
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
