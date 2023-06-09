import React from "react";
import { useRouter } from "next/router";

import { useFormik } from "formik";
import { toast } from "react-toastify";

import { adminSchema } from "@/schema/adminSchema";
import Title from "@/components/Ui/Title";
import Input from "@/components/Form/Input";
import axios from "axios";

const Index = () => {
  const { push } = useRouter();
  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/admin`,
        values
      );
      if (res.data.success) {
        toast.success(res.data.message);
        actions.resetForm();
        push("/admin");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
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
            required={true}
          />
        ))}
        <div className="w-full">
          <button type="submit" className="btn w-full my-3">
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export const getServerSideProps = (ctx) => {
  const cookie = ctx.req?.cookies || "";
  if (cookie.admin === process.env.ADMIN_TOKEN) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default Index;
