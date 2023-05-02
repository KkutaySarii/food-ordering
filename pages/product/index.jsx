import React from "react";
import Image from "next/image";

import Title from "@/components/Ui/Title";

const ProductDetail = () => {
  return (
    <div className="flex flex-wrap h-screen items-center gap-20 py-20 md:text-start text-center">
      <div className="relative w-full h-[80%] md:flex-1">
        <Image alt="" src="/images/f1.png" layout="fill" objectFit="contain" />
      </div>
      <div className="md:flex-1 md:pr-24">
        <Title addClass="text-5xl my-4">Good Pizza</Title>
        <span className="text-2xl text-primary font-bold underline underline-offset-3 ">
          $10
        </span>
        <p className="text-sm my-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
          aliquid expedita omnis explicabo sapiente libero, accusantium
          necessitatibus earum voluptatem numquam laboriosam provident ducimus!
          Odit pariatur provident deserunt repudiandae voluptatum quidem.
        </p>
        <div className="my-4">
          <h4 className="text-xl font-bold">Choose the size</h4>
          <div className="flex items-center gap-x-20 md:justify-start justify-center">
            <div className="relative w-8 h-8">
              <Image alt="" src="/images/size.png" layout="fill" />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Small
              </span>
            </div>
            <div className="relative w-12 h-12">
              <Image alt="" src="/images/size.png" layout="fill" />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Medium
              </span>
            </div>
            <div className="relative w-16 h-16">
              <Image alt="" src="/images/size.png" layout="fill" />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Large
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 my-4 md:justify-start justify-center">
          <label className="flex gap-x-1 items-center">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className="text-sm  font-semibold">ketçap</span>
          </label>
          <label className="flex gap-x-1 items-center">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className="text-sm  font-semibold">ketçap</span>
          </label>
        </div>
        <button className="btn my-4">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
