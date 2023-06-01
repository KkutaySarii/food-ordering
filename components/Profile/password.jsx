import React from "react";

import { useFormik } from "formik";
import { toast } from "react-toastify";
import axios from "axios";

import Title from "@/components/Ui/Title";
import Input from "../Form/Input";
import { passwordSchema } from "@/schema/passwordSchema";

const Password = ({ user }) => {
  const { _id } = user || {};
  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/user/${_id}`,
        values
      );
      if (res.status === 200) {
        toast.success("Password Updated Successfully");
        window.location.reload();
      } else {
        toast.error("Password Update Failed");
        actions.resetForm();
      }
    } catch (err) {
      toast.error("Password Update Failed");
      actions.resetForm();
    }
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
