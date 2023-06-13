import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { addProduct } from "@/redux/cartSlice";

const MenuItem = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  const price = product.prices[0];
  const cart = useSelector((state) => state.cart);

  const isProductInCart = cart.products.find((p) => p._id === product._id);

  const handleClick = () => {
    dispatch(addProduct({ ...product, price, extras: [], quantity: 1 }));
  };
  return (
    <div className="w-full min-h-[400px] px-4">
      <div className="rounded-[15px] text-white overflow-hidden bg-secondary h-full">
        <div className="grid place-content-center rounded-bl-[45px] bg-menu-img-box p-6">
          <Link href={`/product/${product._id}`}>
            <div className="relative w-[150px] h-[150px]">
              <Image
                alt=""
                src={product.image}
                layout="fill"
                className="hover:scale-105 transition-all"
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-col justify-between h-1/2 p-6 ">
          <h5 className="text-xl mb-2 font-semibold">{product.title}</h5>
          <p className="mb-1 text-[15px]">
            {product.desc.length > 100
              ? product.desc.slice(0, 100) + "..."
              : product.desc}
          </p>
          <div className="flex justify-between items-center">
            <h6 className="my-2 text-base">${product.prices[0]}</h6>
            <button
              onClick={handleClick}
              className="bg-primary grid place-content-center w-10 h-10 rounded-full disabled:cursor-not-allowed disabled:opacity-50"
              disabled={isProductInCart}
            >
              <FaShoppingCart size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
