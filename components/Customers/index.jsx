import React from "react";

import Slider from "react-slick";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

import Title from "../Ui/Title";
import CustomersItem from "./CustomersItem";

const Customers = () => {
  const NextBtn = ({ onClick }) => {
    return (
      <button
        className="bg-primary mx-1 text-white rounded-full w-11 h-11 grid place-content-center absolute -bottom-16 left-1/2"
        onClick={onClick}
      >
        <IoChevronForwardOutline />
      </button>
    );
  };
  const PrevBtn = ({ onClick }) => {
    return (
      <button
        className="bg-primary mx-1 text-white rounded-full w-11 h-11 grid place-content-center absolute -bottom-16 right-1/2"
        onClick={onClick}
      >
        <IoChevronBackOutline />
      </button>
    );
  };
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3500,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto mb-[90px]">
      <Title addClass="text-[40px] text-center mb-[30px]">
        What Says Our Customers
      </Title>
      <Slider {...settings}>
        <CustomersItem imgSrc="/images/download.jpg" />
        <CustomersItem imgSrc="/images/download-1.jpg" />
        <CustomersItem imgSrc="/images/download.jpg" />
        <CustomersItem imgSrc="/images/download-1.jpg" />
      </Slider>
    </div>
  );
};

export default Customers;
