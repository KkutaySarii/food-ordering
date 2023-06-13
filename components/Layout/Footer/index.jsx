import React, { useEffect, useState } from "react";

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
import axios from "axios";

const Footer = () => {
  const [footer, setFooter] = useState({});
  useEffect(() => {
    const getFooter = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/footer`
        );
        setFooter(res?.data.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getFooter();
  }, []);

  const SocialIcon = ({ iconname }) => {
    if (iconname === "acebook") return <FaFacebookF />;
    if (iconname === "twitter") return <FaTwitter />;
    if (iconname === "instagram") return <FaInstagram />;
    if (iconname === "linkedin") return <FaLinkedinIn />;
    if (iconname === "pinterest") return <FaPinterest />;
  };

  return (
    <div className="pt-[75px] pb-10 bg-secondary text-white">
      <div className="container mx-auto">
        <div className="flex justify-center gap-y-7 flex-wrap text-center">
          <div className="md:flex-1">
            <Title addClass="text-[28px] font-semibold mb-5">Contact Us</Title>
            <div>
              <a
                href={footer?.location}
                target="_blank"
                className="flex gap-x-1 hover:text-primary cursor-pointers items-center justify-center my-1"
              >
                <MdLocationOn />
                <span>Location</span>
              </a>
              <a
                href={`tel:${footer?.phoneNumber}`}
                className="flex gap-x-1 items-center cursor-pointer  hover:text-primary justify-center my-1"
              >
                <IoCall />
                <span>Call +{footer?.phoneNumber}</span>
              </a>
              <a
                href={`mailto:${footer?.email}`}
                className="flex gap-x-1 hover:text-primary cursor-pointer items-center justify-center my-1"
              >
                <FaEnvelope />
                <span>{footer?.email}</span>
              </a>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[38px] font-bold mb-5">Feane</Title>
            <p className="mb-4">{footer?.desc}</p>
            <ul className="mt-5 mb-2.5 flex  gap-x-1 items-center justify-center">
              {footer?.links?.length > 0 &&
                footer?.links?.map((link) => (
                  <li key={link._id}>
                    <a
                      href={link.link}
                      target="_blank"
                      className="bg-white text-secondary hover:text-primary w-[30px] h-[30px] cursor-pointer rounded-full grid place-content-center"
                    >
                      <SocialIcon iconname={link.application} />
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[28px] font-semibold mb-5">
              Opening Hours
            </Title>
            <p className="mb-4">{footer?.openingDay}</p>
            <p className="mb-4">{footer?.openingTime}</p>
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
