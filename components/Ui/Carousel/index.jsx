import React from "react";
import Image from "next/image";

import Slider from "react-slick";

import Title from "../Title";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
    appendDots: (dots) => (
      <div>
        <ul className="container mx-auto w-full text-start">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border bg-white rounded-full mt-4 md:mt-10"></div>
    ),
  };

  return (
    <div className="min-h-screen relative w-full -mt-[88px] ">
      <div className="absolute z-[-10] top-0 left-0 w-full h-full">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      <Slider {...settings}>
        <div>
          <div className="text-white container mx-auto mt-48 ">
            <div className="w-full sm:w-3/4 md:w-1/2 flex flex-col items-start gap-y-4 z-20 relative">
              <Title addClass="text-6xl">Fast Food Restaurant</Title>
              <p>
                Doloremque, itaque aperiam facilis rerum, commodi, temporibus
                sapiente ad mollitia laborum quam quisquam esse error unde.
                Tempora ex doloremque, labore, sunt repellat dolore, iste magni
                quos nihil ducimus libero ipsam.
              </p>
              <button className="btn">Order Now</button>
            </div>
          </div>
        </div>
        <div>
          <div className="text-white container mx-auto mt-48">
            <div className="w-full sm:w-3/4 md:w-1/2 flex flex-col items-start gap-y-4 z-20 relative">
              <Title addClass="text-6xl">Fast Food Restaurant</Title>
              <p>
                Doloremque, itaque aperiam facilis rerum, commodi, temporibus
                sapiente ad mollitia laborum quam quisquam esse error unde.
                Tempora ex doloremque, labore, sunt repellat dolore, iste magni
                quos nihil ducimus libero ipsam.
              </p>
              <button className="btn">Order Now</button>
            </div>
          </div>
        </div>
        <div>
          <div className="text-white container mx-auto mt-48">
            <div className="w-full sm:w-3/4 md:w-1/2 flex flex-col items-start gap-y-4 z-20 relative">
              <Title addClass="text-6xl">Fast Food Restaurant</Title>
              <p>
                Doloremque, itaque aperiam facilis rerum, commodi, temporibus
                sapiente ad mollitia laborum quam quisquam esse error unde.
                Tempora ex doloremque, labore, sunt repellat dolore, iste magni
                quos nihil ducimus libero ipsam.
              </p>
              <button className="btn">Order Now</button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
