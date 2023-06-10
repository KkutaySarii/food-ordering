import React, { useEffect, useState } from "react";

import Title from "@/components/Ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = ({ categoryList, productList }) => {
  const [active, setActive] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (categoryList.length > 0) {
      const filtered = productList.filter(
        (product) => product.category === categoryList[active].title
      );
      setFilteredProducts(filtered);
    }
  }, [active, categoryList, productList]);

  return (
    <div className="container mx-auto flex flex-col items-center pt-[45px] pb-[90px]">
      <Title addClass="text-[40px]">Our Menu</Title>
      <div className="mt-[45px] mb-5">
        {categoryList.length > 0 &&
          categoryList.map((category, index) => (
            <button
              key={category._id}
              className={`py-2 px-6 rounded-3xl ${
                active === index && "text-white bg-secondary"
              }`}
              onClick={() => {
                setActive(index);
              }}
            >
              {category.title}
            </button>
          ))}
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.length > 0 &&
          filteredProducts.map((product) => (
            <MenuItem key={product._id} product={product} />
          ))}
      </div>
      <div className="mt-11">
        <button className="btn">View More</button>
      </div>
    </div>
  );
};

export default MenuWrapper;
