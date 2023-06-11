import axios from "axios";
import Image from "next/image";
import React from "react";

const Index = ({ order }) => {
  console.log(order);
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
                  {order._id.length > 8
                    ? order._id.slice(0, 8) + "..."
                    : order._id}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  {order?.customer}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  {order?.address}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  ${order?.total}
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
          <div
            className={`flex items-center flex-col ${
              order?.status === 0 && "animate-pulse"
            }`}
          >
            <Image
              alt=""
              src="/images/bake.png"
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Preparing</span>
          </div>
          <div
            className={`flex items-center flex-col ${
              order?.status === 1 && "animate-pulse"
            }`}
          >
            <Image
              alt=""
              src="/images/bike.png"
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>On the way</span>
          </div>
          <div
            className={`flex items-center flex-col ${
              order?.status === 2 && "animate-pulse"
            }`}
          >
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

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/orders/${params.id}`
  );

  return {
    props: {
      order: res?.data.data || {},
    },
  };
};

export default Index;
