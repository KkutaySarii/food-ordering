import React from "react";
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";

import Title from "../../Title";

const CampaignsItem = (props) => {
  const { title, percent, image } = props;
  return (
    <div className="flex flex-1 px-[15px] mt-[45px] gap-x-2">
      <div className="bg-secondary min-h-[250px] self-center flex md:flex-col custommd:flex-row flex-row flex-1 rounded-md py-5 px-[15px] ">
        <div className="relative w-[165px] h-[165px] border-[5px] border-primary rounded-full overflow-hidden mr-[15px]">
          <Image
            src={image}
            alt=""
            layout="fill"
            className="hover:scale-105 transition-all"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col text-white md:text-center custommd:text-left text-left">
          <Title addClass="text-2xl font-medium">{title}</Title>
          <div className="font-dancing my-2.5">
            <span className="text-[40px] font-bold">
              {percent}
              {"% "}
            </span>
            <span>Off</span>
          </div>
          <button className="btn !px-2 flex items-center">
            {"Order Now"}
            <HiShoppingCart size={20} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignsItem;
