import React from "react";
import Image from "next/image";

import Title from "@/components/Ui/Title";

const ProductDetail = () => {
  const [price, setPrice] = React.useState(10);
  const [size, setSize] = React.useState(0);
  const [extras, setExtras] = React.useState([]);
  const sizePrices = [10, 20, 30];
  const extraProducts = [
    {
      id: 1,
      name: "mayonez",
      price: 1,
    },
    {
      id: 2,
      name: "acı sos",
      price: 2,
    },
    {
      id: 3,
      name: "ketçap",
      price: 3,
    },
  ];
  const handlePrice = (number) => {
    const difference = sizePrices[number] - sizePrices[size];
    setSize(number);
    setPrice(price + difference);
  };

  const handleExtras = (e, number) => {
    const checked = e.target.checked;
    if (checked) {
      setPrice(price + number);
      setExtras([...extras, number]);
    } else {
      setPrice(price - number);
      setExtras(extras.filter((item) => item !== number));
    }
  };

  return (
    <div className="flex items-center md:h-[calc(100vh_-_62px)] gap-5 my-20 flex-wrap">
      <div className="relative md:flex-1 md:w-[80%] md:h-[80%] w-36 h-36 mx-auto">
        <Image
          src="/images/f1.png"
          alt=""
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className="md:flex-1 md:text-start text-center">
        <Title addClass="text-5xl my-4">Good Pizza</Title>
        <span className="text-2xl text-primary font-bold underline underline-offset-3 ">
          ${price}
        </span>
        <p className="text-sm my-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
          aliquid expedita omnis explicabo sapiente libero, accusantium
          necessitatibus earum voluptatem numquam laboriosam provident ducimus!
          Odit pariatur provident deserunt repudiandae voluptatum quidem.
        </p>
        <div className="my-4">
          <h4 className="text-xl font-bold">Choose the size</h4>
          <div className="flex items-center gap-x-20 md:justify-start justify-center">
            <div
              className="relative w-8 h-8 cursor-pointer"
              onClick={() => handlePrice(0)}
            >
              <Image
                alt=""
                src="/images/size.png"
                className={size === 0 && "bg-primary rounded-full"}
                layout="fill"
              />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Small
              </span>
            </div>
            <div
              className="relative w-12 h-12 cursor-pointer"
              onClick={() => handlePrice(1)}
            >
              <Image
                alt=""
                src="/images/size.png"
                className={size === 1 && "bg-primary rounded-full"}
                layout="fill"
              />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Medium
              </span>
            </div>
            <div
              className="relative w-16 h-16 cursor-pointer"
              onClick={() => handlePrice(2)}
            >
              <Image
                alt=""
                src="/images/size.png"
                className={size === 2 && "bg-primary rounded-full"}
                layout="fill"
              />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Large
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 my-4 md:justify-start justify-center">
          {extraProducts.map((extra) => (
            <label key={extra.id} className="flex gap-x-1 items-center">
              <input
                type="checkbox"
                onChange={(e) => handleExtras(e, extra.price)}
                className="w-5 h-5 accent-primary"
              />
              <span className="text-sm  font-semibold">{extra.name}</span>
            </label>
          ))}
        </div>
        <button className="btn my-4">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
