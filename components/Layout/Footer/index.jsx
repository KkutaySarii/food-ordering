import React from "react";

import Title from "@/components/Ui/Title";

import { MdLocationOn } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-[75px] pb-10 bg-secondary text-white">
      <div className="container mx-auto">
        <div className="flex justify-center gap-y-7 flex-wrap text-center">
          <div className="md:flex-1">
            <Title addClass="text-[28px] font-semibold mb-5">Contact Us</Title>
            <div>
              <a className="flex gap-x-1 hover:text-primary cursor-pointers items-center justify-center my-1">
                <MdLocationOn />
                <span>Location</span>
              </a>
              <a className="flex gap-x-1 items-center cursor-pointer  hover:text-primary justify-center my-1">
                <IoCall />
                <span>Call +01 1234567890</span>
              </a>
              <a className="flex gap-x-1 hover:text-primary cursor-pointer items-center justify-center my-1">
                <FaEnvelope />
                <span>demo@gmail.com</span>
              </a>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[38px] font-bold mb-5">Feane</Title>
            <p className="mb-4">
              Necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with
            </p>
            <ul className="mt-5 mb-2.5 flex  gap-x-1 items-center justify-center">
              <li>
                <a className="bg-white text-secondary hover:text-primary w-[30px] h-[30px] cursor-pointer rounded-full grid place-content-center">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a className="bg-white text-secondary hover:text-primary w-[30px] h-[30px] cursor-pointer rounded-full grid place-content-center">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a className="bg-white text-secondary hover:text-primary w-[30px] h-[30px] cursor-pointer rounded-full grid place-content-center">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a className="bg-white text-secondary hover:text-primary w-[30px] h-[30px] cursor-pointer rounded-full grid place-content-center">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a className="bg-white text-secondary hover:text-primary w-[30px] h-[30px] cursor-pointer rounded-full grid place-content-center">
                  <FaPinterest />
                </a>
              </li>
            </ul>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[28px] font-semibold mb-5">
              Opening Hours
            </Title>
            <p className="mb-4">Everyday</p>
            <p className="mb-4">10.00 Am -10.00 Pm</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p>© 2023 All Rights Reserved By Free Html Templates</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
