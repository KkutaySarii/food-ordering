import React from "react";

import axios from "axios";

import Carousel from "@/components/Ui/Carousel";
import Campaigns from "@/components/Ui/Campaigns";
import MenuWrapper from "@/components/Product/MenuWrapper";
import About from "@/components/Ui/About";
import Reservation from "@/components/Ui/Reservation";
import Customers from "@/components/Customers";

const Index = ({ categoryList, productList }) => {
  return (
    <React.Fragment>
      <Carousel />
      <Campaigns />
      <MenuWrapper categoryList={categoryList} productList={productList} />
      <About />
      <Reservation />
      <Customers />
    </React.Fragment>
  );
};

export default Index;
