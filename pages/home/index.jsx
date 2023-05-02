import React from "react";

import Carousel from "@/components/Ui/Carousel";
import Campaigns from "@/components/Ui/Campaigns";
import MenuWrapper from "@/components/Product/MenuWrapper";
import About from "@/components/Ui/About";
import Reservation from "@/components/Ui/Reservation";

const index = () => {
  return (
    <div className="">
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
    </div>
  );
};

export default index;
