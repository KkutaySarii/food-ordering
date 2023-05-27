import React from "react";

import { useFormik } from "formik";

import Title from "@/components/Ui/Title";
import Input from "../Form/Input";
import { passwordSchema } from "@/schema/passwordSchema";

const Password = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 4000);
    });
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        password: "",
        newpassword: "",
      },
      onSubmit,
      validationSchema: passwordSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "Password Again",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 2,
      name: "newpassword",
      type: "password",
      placeholder: "New Password Again",
      value: values.newpassword,
      errorMessage: errors.newpassword,
      touched: touched.newpassword,
    },
  ];
  return (
    <form className="w-full flex flex-col items-start" onSubmit={handleSubmit}>
      <Title addClass="text-[40px]">Password</Title>
      <div className="grid w-full md:grid-cols-2 grid-cols-1 gap-3 mt-5">
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ))}
      </div>
      <button type="submit" className="btn mt-4">
        Update
      </button>
    </form>
  );
};

export default Password;
