import React, { useEffect, useState } from "react";

import axios from "axios";

import Title from "@/components/Ui/Title";

const Order = ({ customer }) => {
  const [orders, setOrders] = useState([]);
  const statusList = ["Preparing", "On the way", "Delivered"];
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/orders`
        );
        const data = res.data.data.filter((order) => {
          return order.customer === customer;
        });
        setOrders(data);
      } catch (err) {
        console.log(err);
      }
    };
    getOrders();
  });

  return (
    <div className="w-full overflow-x-auto flex flex-col items-start">
      <Title addClass="text-[40px]">Orders</Title>
      <div className="overflow-x-auto w-full">
        <table className="mt-5 table-auto w-full text-sm text-center text-gray-500 min-w-[1000px]">
          <thead className="text-xs bg-gray-700 uppercase text-gray-400">
            <tr>
              <th className="py-3 px-6" scope="col">
                ID
              </th>
              <th className="py-3 px-6" scope="col">
                ADDRESS
              </th>
              <th className="py-3 px-6" scope="col">
                DATE
              </th>
              <th className="py-3 px-6" scope="col">
                TOTAL
              </th>
              <th className="py-3 px-6" scope="col">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 &&
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="bg-secondary hover:bg-primary transition-all"
                >
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center    ">
                    {order?._id.length > 8 ? order?._id.slice(0, 8) : order._id}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {order?.address}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {order?.createdAt.slice(0, 10) +
                      " " +
                      order?.createdAt.slice(11, 19)}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    ${order?.total}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {statusList[order?.status]}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
