import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <div className="overflow-x-auto">
      <div className="min-h-[calc(100vh_-_460px)] flex p-10 justify-between flex-col min-w-[1000px]">
        <div className="flex items-center flex-1 ">
          <table className="table-auto w-full text-sm text-center text-gray-500 ">
            <thead className="text-xs bg-gray-700 uppercase text-gray-400">
              <tr>
                <th className="py-3 px-6" scope="col">
                  Order ID
                </th>
                <th className="py-3 px-6" scope="col">
                  Customer
                </th>
                <th className="py-3 px-6" scope="col">
                  Address
                </th>
                <th className="py-3 px-6" scope="col">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-secondary hover:bg-primary transition-all">
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center    ">
                  63107f5559991231
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  Kutay Sarı
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  Konya
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  $20
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full flex justify-between bg-primary p-8 mt-10">
          <div className="flex items-center flex-col">
            <Image
              alt=""
              src="/images/paid.png"
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Payment</span>
          </div>
          <div className="flex items-center flex-col animate-pulse">
            <Image
              alt=""
              src="/images/bake.png"
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Preparing</span>
          </div>
          <div className="flex items-center flex-col">
            <Image
              alt=""
              src="/images/bike.png"
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>On the way</span>
          </div>
          <div className="flex items-center flex-col">
            <Image
              alt=""
              src="/images/delivered.png"
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Delivered</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
