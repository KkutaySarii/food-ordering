import React from "react";
import Link from "next/link";

import axios from "axios";
import { useFormik } from "formik";

import { registerSchema } from "@/schema/registerSchema";
import Title from "@/components/Ui/Title";
import Input from "@/components/Form/Input";

const Register = () => {
  const onSubmit = async (values, actions) => {
    const { fullName, email, password } = values;
    const data = { fullName, email, password };
    console.log(data);
    try {
      axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/register`, data);
    } catch (error) {
      console.log(error);
    }
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: registerSchema,
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
      name: "email",
      type: "email",
      placeholder: "Your Email",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Your Password Again",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
  ];
  return (
    <div className="container mx-auto my-20 flex flex-col items-center  ">
      <Title addClass="text-[40px]">Register</Title>
      <form
        className="md:w-1/2 w-full flex flex-col gap-y-3 mt-5"
        onSubmit={handleSubmit}
      >
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ))}
        <div className="w-full">
          <button type="submit" className="btn w-full my-3">
            REGISTER
          </button>
          <Link
            href="/auth/login"
            className="text-sm underline cursor-pointer text-secondary"
          >
            Do you have a account?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
