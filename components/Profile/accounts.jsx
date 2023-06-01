import React from "react";

import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";

import Title from "../Ui/Title";
import Input from "../Form/Input";
import { profileSchema } from "@/schema/profileSchema";

const Accounts = ({ user }) => {
  const { _id, fullName, email, phoneNumber, address, job, bio } = user || {};
  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/user/${_id}`,
        values
      );
      if (res.status === 200) {
        toast.success("Profile Updated Successfully");
        window.location.reload();
      } else {
        toast.error("Profile Update Failed");
        actions.resetForm();
      }
    } catch (err) {
      toast.error("Profile Update Failed");
      actions.resetForm();
    }
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      enableReinitialize: true,
      initialValues: {
        fullName: fullName || "",
        email: email || "",
        phoneNumber: phoneNumber || "",
        address: address || "",
        job: job || "",
        bio: bio || "",
      },
      onSubmit,
      validationSchema: profileSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
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
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 4,
      name: "address",
      type: "text",
      placeholder: "Your Address",
      value: values.address,
      errorMessage: errors.address,
      touched: touched.address,
    },
    {
      id: 5,
      name: "job",
      type: "text",
      placeholder: "Your Job",
      value: values.job,
      errorMessage: errors.job,
      touched: touched.job,
    },
    {
      id: 6,
      name: "bio",
      type: "text",
      placeholder: "Your Bio",
      value: values.bio,
      errorMessage: errors.bio,
      touched: touched.bio,
    },
  ];
  return (
    <form className="w-full flex flex-col items-start" onSubmit={handleSubmit}>
      <Title addClass="text-[40px]">Account Settings</Title>
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

export default Accounts;
