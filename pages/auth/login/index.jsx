import React from "react";
import Link from "next/link";

import { useFormik } from "formik";
import { FaGithub } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";

import { loginSchema } from "@/schema/loginSchema";
import Title from "@/components/Ui/Title";
import Input from "@/components/Form/Input";

const Login = () => {
  const { data: session } = useSession();
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 4000);
    });
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Your Email",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
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
      <Title addClass="text-[40px]">Login</Title>
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
            LOGIN
          </button>
          <button
            type="button"
            onClick={() => signIn("github")}
            className="btn !bg-secondary w-full flex items-center justify-center gap-x-2 mb-3"
          >
            <FaGithub />
            <span>GITHUB</span>
          </button>
          <Link
            href="/auth/register"
            className="text-sm underline cursor-pointer text-secondary"
          >
            Do you not have a account?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
