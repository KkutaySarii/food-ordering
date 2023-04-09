import React from "react";
import Image from "next/image";
import Title from "../Title";

const Carousel = () => {
  return (
    <div className="">
      <div className="absolute z-[-10] top-0 left-0 w-full h-full">
        <Image
          className="object-cover"
          src="/images/hero-bg.jpg"
          alt=""
          layout="fill"
        />
      </div>
      <div className="text-white container mx-auto top-48 relative">
        <div className="w-full sm:w-3/4 md:w-1/2 flex flex-col items-start gap-y-4 z-20 relative">
          <Title addClass="text-6xl">Fast Food Restaurant</Title>
          <p>
            Doloremque, itaque aperiam facilis rerum, commodi, temporibus
            sapiente ad mollitia laborum quam quisquam esse error unde. Tempora
            ex doloremque, labore, sunt repellat dolore, iste magni quos nihil
            ducimus libero ipsam.
          </p>
          <button className="btn">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
