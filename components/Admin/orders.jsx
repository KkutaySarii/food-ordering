import { useEffect, useState } from "react";

import axios from "axios";

import Title from "@/components/Ui/Title";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const statusList = ["Preparing", "On the way", "Delivered"];
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/orders`
        );
        setOrders(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);

  const handleClick = async (id) => {
    const item = orders.find((order) => order._id === id);
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/orders/${id}`,
        { status: item.status + 1 }
      );
      setOrders([res.data.data, ...orders.filter((order) => order._id !== id)]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full mt-5 overflow-x-auto flex flex-col items-start">
      <Title addClass="text-[40px]">Orders</Title>
      <div className="overflow-x-auto w-full mt-5">
        <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                Product Id
              </th>
              <th scope="col" className="py-3 px-6">
                Customer
              </th>
              <th scope="col" className="py-3 px-6">
                Total
              </th>
              <th scope="col" className="py-3 px-6">
                Payment
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 &&
              orders.map((order) => (
                <tr
                  className="transition-all bg-secondary border-gray-700 hover:bg-primary "
                  key={order._id}
                >
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {order?._id.length > 8
                      ? order?._id.slice(0, 8) + "..."
                      : order._id}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {order?.customer}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    $ {order?.total}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {order?.paymentMethod === 0 ? "Cash" : "Card"}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {statusList[order?.status]}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    <button
                      onClick={() => handleClick(order._id)}
                      className="btn !bg-success"
                      disabled={order?.status > 1}
                    >
                      Next Stage
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
