import Title from "@/components/Ui/Title";
import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <div className="min-h-[calc(100vh_-_460px)]">
      <div className="flex justify-between md:flex-row flex-col">
        <div className="min-h-[calc(100vh_-_460px)] flex items-center flex-1 p-10 overflow-x-auto">
          <table className="table-auto w-full text-sm text-center text-gray-500 min-w-[1000px]">
            <thead className="text-xs bg-gray-700 uppercase text-gray-400">
              <tr>
                <th className="py-3 px-6" scope="col">
                  Product
                </th>
                <th className="py-3 px-6" scope="col">
                  Extras
                </th>
                <th className="py-3 px-6" scope="col">
                  Prices
                </th>
                <th className="py-3 px-6" scope="col">
                  Quantity
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-secondary hover:bg-primary transition-all">
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center    ">
                  <Image
                    src="/images/f1.png"
                    alt="pizza"
                    width={50}
                    height={50}
                  />
                  <span>Good Pizza</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  <span>mayonez, acı sos, ketçap</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  <span>$20</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  <span>1</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-secondary flex-col p-10 min-h-[calc(100vh_-_460px)] text-white flex justify-center items-center md:items-start">
          <Title addClass="text-[40px] md:text-start text-center">
            CART TOTAL
          </Title>
          <div className="mt-6">
            <b>Subtotal: </b>
            $20
            <br />
            <b className="inline-block my-1">Discount: </b>
            $0.00
            <br />
            <b>Total: </b>
            $20
          </div>
          <div>
            <button className="btn mt-4 md:w-auto w-52">Checkout Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
