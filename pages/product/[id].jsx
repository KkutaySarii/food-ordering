import React, { useState } from "react";
import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";

import { addProduct } from "@/redux/cartSlice";
import Title from "@/components/Ui/Title";

import axios from "axios";

const ProductDetail = ({ product }) => {
  const [price, setPrice] = useState(product.prices[0]);
  const [size, setSize] = useState(0);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const isProductInCart = cart.products.find((p) => p._id === product._id);

  const handlePrice = (number) => {
    const difference = product.prices[number] - product.prices[size];
    setSize(number);
    setPrice(price + difference);
  };

  const handleExtras = (e, name) => {
    const checked = e.target.checked;
    const extra = product.extras.find((item) => item.name === name);
    if (checked) {
      setPrice(price + extra.price);
      setExtras([...extras, extra]);
    } else {
      setPrice(price - extra.price);
      setExtras(extras.filter((item) => item.name !== name));
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, extras, price, quantity: 1 }));
  };

  return (
    <div className="flex items-center md:h-[calc(100vh_-_62px)] gap-5 my-15 flex-wrap">
      <div className="relative md:flex-1 md:w-[80%] md:h-[80%] w-36 h-36 mx-auto">
        <Image src={product?.image} alt="" layout="fill" objectFit="contain" />
      </div>
      <div className="md:flex-1 md:text-start text-center">
        <Title addClass="text-5xl my-4">{product?.title}</Title>
        <span className="text-2xl text-primary font-bold underline underline-offset-3 ">
          $ {price}
        </span>
        <p className="text-sm my-4">{product?.desc}</p>

        {product?.category === "Pizza" && (
          <div className="my-4">
            <h4 className="text-xl font-bold">Choose the size</h4>
            <div className="flex items-center gap-x-20 md:justify-start justify-center">
              <div
                className="relative w-8 h-8 cursor-pointer"
                onClick={() => handlePrice(0)}
              >
                <Image
                  alt=""
                  src="/images/size.png"
                  className={size === 0 && "bg-primary rounded-full"}
                  layout="fill"
                />
                <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                  Small
                </span>
              </div>
              <div
                className="relative w-12 h-12 cursor-pointer"
                onClick={() => handlePrice(1)}
              >
                <Image
                  alt=""
                  src="/images/size.png"
                  className={size === 1 && "bg-primary rounded-full"}
                  layout="fill"
                />
                <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                  Medium
                </span>
              </div>
              <div
                className="relative w-16 h-16 cursor-pointer"
                onClick={() => handlePrice(2)}
              >
                <Image
                  alt=""
                  src="/images/size.png"
                  className={size === 2 && "bg-primary rounded-full"}
                  layout="fill"
                />
                <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                  Large
                </span>
              </div>
            </div>
          </div>
        )}
        <div className="flex gap-x-4 my-4 md:justify-start justify-center">
          {product?.extras?.map((extra) => {
            const { id, name } = extra;
            return (
              <label key={id} className="flex gap-x-1 items-center">
                <input
                  type="checkbox"
                  onChange={(e) => handleExtras(e, name)}
                  className="w-5 h-5 accent-primary"
                />
                <span className="text-sm  font-semibold">{name}</span>
              </label>
            );
          })}
        </div>
        <button
          disabled={isProductInCart}
          className="btn my-4 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleClick}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${params.id}`
  );
  return {
    props: {
      product: res.data?.data || {},
    },
  };
};

export default ProductDetail;
