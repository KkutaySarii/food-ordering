import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useFormik } from "formik";
import { FaGithub } from "react-icons/fa";
import { useSession, signIn } from "next-auth/react";
import { toast } from "react-toastify";

import { loginSchema } from "@/schema/loginSchema";
import Title from "@/components/Ui/Title";
import Input from "@/components/Form/Input";

const Login = () => {
  const { data: session } = useSession();

  const { push } = useRouter();

  const onSubmit = async (values, actions) => {
    const { email, password } = values;
    let options = { redirect: false, email, password };
    try {
      await signIn("credentials", options);
      toast.success("Login Success");
      actions.resetForm();
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    if (session) {
      push("/profile");
    }
  }, [session, push]);

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
            onClick={() => {
              signIn("github");
              toast.success("Login Success");
            }}
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
