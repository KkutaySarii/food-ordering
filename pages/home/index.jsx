import React from "react";

import Carousel from "@/components/Ui/Carousel";
import Campaigns from "@/components/Ui/Campaigns";
import MenuWrapper from "@/components/Product/MenuWrapper";
import About from "@/components/Ui/About";
import Input from "@/components/form/Input";

const index = () => {
  return (
    <div className="">
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <div className="container mx-auto my-10">
        <Input />
      </div>
    </div>
  );
};

export default index;
