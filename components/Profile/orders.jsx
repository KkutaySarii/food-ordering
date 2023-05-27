import React from "react";

import Title from "@/components/Ui/Title";

const Order = () => {
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
            <tr className="bg-secondary hover:bg-primary transition-all">
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center    ">
                63107...
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Adana
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                01-09-2022
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                $19.99
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                preparing
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
