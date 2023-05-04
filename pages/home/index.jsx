import React from "react";

import Carousel from "@/components/Ui/Carousel";
import Campaigns from "@/components/Ui/Campaigns";
import MenuWrapper from "@/components/Product/MenuWrapper";
import About from "@/components/Ui/About";
import Reservation from "@/components/Ui/Reservation";
import Customers from "@/components/Customers";
import Footer from "@/components/Layout/Footer";

const index = () => {
  return (
    <React.Fragment>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
      <Customers />
    </React.Fragment>
  );
};

export default index;
