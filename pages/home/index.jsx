import React from "react";

import Carousel from "@/components/Ui/Carousel";
import Campaigns from "@/components/Ui/Campaigns";
import MenuWrapper from "@/components/Product/MenuWrapper";
import About from "@/components/Ui/About";

const index = () => {
  return (
    <div className="">
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
    </div>
  );
};

export default index;
