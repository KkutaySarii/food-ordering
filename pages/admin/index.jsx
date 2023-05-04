import React from "react";
import Link from "next/link";

import { useFormik } from "formik";
import { FaGithub } from "react-icons/fa";

import { adminSchema } from "@/schema/adminSchema";
import Title from "@/components/Ui/Title";
import Input from "@/components/Form/Input";

const Admin = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 4000);
    });
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit,
      validationSchema: adminSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Your Username",
      value: values.username,
      errorMessage: errors.username,
      touched: touched.username,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];
  return (
    <div className="container mx-auto my-20 flex flex-col items-center  ">
      <Title addClass="text-[40px]">Admin Login</Title>
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
          <button className="btn w-full my-3">LOGIN</button>

          <Link
            href="/"
            className="text-sm underline cursor-pointer text-secondary"
          >
            Home Page
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Admin;
