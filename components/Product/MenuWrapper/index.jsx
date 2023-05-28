import React, { useState } from "react";

import Title from "@/components/Ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Delicious Pizza",
      price: 10,
      image: "/images/f1.png",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      sizePrices: [10, 20, 30],
      extras: [],
    },
    {
      id: 2,
      name: "Delicious Pizza",
      price: 10,
      image: "/images/f1.png",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      sizePrices: [10, 20, 30],
      extras: [],
    },
    {
      id: 3,
      name: "Delicious Pizza",
      price: 10,
      image: "/images/f1.png",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      sizePrices: [10, 20, 30],
      extras: [],
    },
  ]);
  return (
    <div className="container mx-auto flex flex-col items-center pt-[45px] pb-[90px]">
      <Title addClass="text-[40px]">Our Menu</Title>
      <div className="mt-[45px] mb-5">
        <button className="py-2 px-6 rounded-3xl text-white bg-secondary">
          All
        </button>
        <button className="py-2 px-6 rounded-3xl ">Burger</button>
        <button className="py-2 px-6 rounded-3xl ">Pizza</button>
        <button className="py-2 px-6 rounded-3xl ">Drink</button>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <MenuItem key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-11">
        <button className="btn">View More</button>
      </div>
    </div>
  );
};

export default MenuWrapper;
