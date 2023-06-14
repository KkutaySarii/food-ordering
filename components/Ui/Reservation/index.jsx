import React, { useEffect, useState } from "react";

import { useFormik } from "formik";
import { toast } from "react-toastify";
import axios from "axios";
import { useSession } from "next-auth/react";

import Input from "@/components/Form/Input";
import Title from "../Title";
import { reservationSchema } from "@/schema/reservationSchema";

const Reservation = () => {
  const [curUser, setCurUser] = useState();
  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/reservation`,
        values
      );
      if (res.status === 201) {
        toast.success("Reservation added successfully!");
        actions.resetForm();
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const { data: session } = useSession();
  useEffect(() => {
    const getUser = async () => {
      if (session) {
        try {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/user`
          );
          const user = res.data.data.filter(
            (user) => user.email === session.user.email
          );
          setCurUser(user[0]);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getUser();
  }, [session, curUser]);
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      enableReinitialize: true,
      initialValues: {
        fullName: curUser?.fullName || "",
        phoneNumber: curUser?.phoneNumber || "",
        email: curUser?.email || "",
        personCount: "",
        date: "",
      },
      onSubmit,
      validationSchema: reservationSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Name",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "text",
      placeholder: "Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your Email",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 4,
      name: "personCount",
      type: "number",
      placeholder: "How Many Persons?",
      value: values.personCount,
      errorMessage: errors.personCount,
      touched: touched.personCount,
    },
    {
      id: 5,
      name: "date",
      type: "datetime-local",
      placeholder: "",
      value: values.date,
      errorMessage: errors.date,
      touched: touched.date,
    },
  ];

  return (
    <div className="container mx-auto my-[90px]">
      <Title addClass="text-[40px] font-bold mb-6">Book A Table</Title>
      <div className="flex gap-10 flex-wrap justify-center">
        <form className="md:flex-1 w-full" onSubmit={handleSubmit}>
          <div className="flex gap-y-5 flex-col">
            {inputs.map((input) => (
              <Input
                key={input.id}
                {...input}
                onChange={handleChange}
                onBlur={handleBlur}
                required={true}
              />
            ))}
          </div>
          <button type="submit" className="btn mt-4">
            BOOK NOW
          </button>
        </form>
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
