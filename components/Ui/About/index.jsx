import React from "react";
import Image from "next/image";

import Title from "../Title";

const About = () => {
  return (
    <div className="bg-secondary py-[90px] ">
      <div className="container px-[15px] mx-auto">
        <div className="w-full flex flex-col-reverse md:flex-row">
          <div className="w-full flex-1 grid place-content-center md:place-content-stretch">
            <div className="relative md:w-full w-[445px] h-[600px] px-4">
              <Image alt="" src="/images/about-img.png" layout="fill" />
            </div>
          </div>
          <div className="flex-1 w-full self-center text-white overflow-hidden px-4 mb-11">
            <Title addClass="text-[40px]">We Are Feane </Title>
            <p className="my-4 text-base">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don`t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn`t anything embarrassing
              hidden in the middle of text. All
            </p>
            <button className="btn mt-4">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
