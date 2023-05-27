import React, { useState } from "react";

import { useFormik } from "formik";

import Title from "../Ui/Title";
import Input from "../Form/Input";
import { footerSchema } from "@/schema/footerSchema";

const Footer = () => {
  const [value, setValue] = useState("");
  const [input, setInput] = useState("");
  const [applications, setApplications] = useState([]);
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 4000);
    });
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        location: "",
        email: "",
        phoneNumber: "",
        description: "",
        day: "",
        time: "",
      },
      onSubmit,
      validationSchema: footerSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "location",
      type: "text",
      placeholder: "Your Location",
      value: values.location,
      errorMessage: errors.location,
      touched: touched.location,
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
      name: "description",
      type: "text",
      placeholder: "Write Description",
      value: values.description,
      errorMessage: errors.description,
      touched: touched.description,
    },
    {
      id: 5,
      name: "day",
      type: "date",
      placeholder: "",
      value: values.day,
      errorMessage: errors.day,
      touched: touched.day,
    },
    {
      id: 6,
      name: "time",
      type: "time",
      placeholder: "",
      value: values.time,
      errorMessage: errors.time,
      touched: touched.time,
    },
  ];

  return (
    <form className="w-full flex flex-col items-start" onSubmit={handleSubmit}>
      <Title addClass="text-[40px]">Footer</Title>
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
      <div className="flex gap-4 lg:flex-row flex-col w-full mt-4 lg:items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="h-auto">
            <select
              id="countries"
              className="h-14 border border-primary ring-primary text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-1 outline-none "
              onChange={(e) => setValue(e.target.value)}
              required
            >
              <option selected>Choose a application</option>
              <option value="instagram">Instagram</option>
              <option value="facebook">Facebook</option>
              <option value="twitter">Twitter</option>
            </select>
          </div>
          <Input
            placeholder="Link"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="button"
            onClick={() => {
              setApplications([...applications, { value, input }]);
              setInput("");
            }}
            className="btn"
          >
            Add
          </button>
        </div>
        <ul className="flex gap-4">
          {applications.map((application, index) => (
            <li key={index} className="flex items-center gap-1">
              <a target="_blank" href={application.input}>
                <i className={`fa fa-${application.value} text-2xl`}></i>
              </a>
              <button
                type="button"
                onClick={() =>
                  setApplications(
                    applications.filter(
                      (app) => app.value !== application.value
                    )
                  )
                }
              >
                <i className="fa fa-trash text-danger text-xl"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button type="submit" className="btn mt-4">
        Update
      </button>
    </form>
  );
};

export default Footer;
