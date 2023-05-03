import React from "react";

import Title from "../Ui/Title";
import CustomersItem from "./CustomersItem";

const Customers = () => {
  return (
    <div className="container mx-auto">
      <Title addClass="text-[40px] text-center mb-[30px]">
        What Says Our Customers
      </Title>
      <div className="flex gap-x-8">
        <CustomersItem imgSrc="/images/download.jpg" />
        <CustomersItem imgSrc="/images/download-1.jpg" />
      </div>
    </div>
  );
};

export default Customers;
