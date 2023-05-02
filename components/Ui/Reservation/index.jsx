import React from "react";

import Input from "@/components/form/Input";
import Title from "../Title";

const Reservation = () => {
  const inputs = [
    { id: 1, name: "fullName", type: "text", placeholder: "Your Name" },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Phone Number",
    },
    { id: 3, name: "email", type: "email", placeholder: "Your Email" },
    {
      id: 4,
      name: "persons",
      type: "number",
      placeholder: "How Many Persons?",
    },
    { id: 5, name: "date", type: "datetime-local", placeholder: "" },
  ];

  return (
    <div className="container mx-auto my-[90px]">
      <Title addClass="text-[40px] font-bold mb-6">Book A Table</Title>
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="md:flex-1 w-full">
          <div className="flex gap-y-5 flex-col">
            {inputs.map((input) => (
              <Input key={input.id} {...input} />
            ))}
          </div>
          <button className="btn mt-4">BOOK NOW</button>
        </div>
        <div className="md:flex-1 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201550.3917783251!2d32.36639796607865!3d37.87842350745342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d08568d615f745%3A0x240dd0fc08060967!2sKonya!5e0!3m2!1str!2str!4v1683051363998!5m2!1str!2str"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[345px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
