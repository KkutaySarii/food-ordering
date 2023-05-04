import Image from "next/image";
import React from "react";

const CustomersItem = ({ imgSrc }) => {
  return (
    <div className="mx-4">
      <div className="bg-secondary px-[25px] pt-[25px] pb-[15px] rounded-[5px] text-white">
        <p className="text-[15px] mb-2.5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A mollitia,
          tenetur asperiores, voluptates ducimus consequuntur iusto
          reprehenderit dolore dicta dolor suscipit, similique excepturi! Dolore
          ab voluptate reprehenderit, rem magnam omnis!
        </p>
        <h6 className="text-lg font-semibold mt-[15px] mb-[5px]">
          Moana Michell
        </h6>
        <p className="text-[15px] mb-2.5">magna alique</p>
      </div>
      <div className="relative w-[115px] h-[115px] mt-[30px] before:content[''] before:w-5 before:h-5 before:rotate-45 before:absolute before:top-0 flex justify-center before:bg-primary before:-translate-y-2">
        <Image
          alt=""
          src={imgSrc}
          layout="fill"
          objectFit="contain"
          className="border-[5px] rounded-full border-primary"
        />
      </div>
    </div>
  );
};

export default CustomersItem;
