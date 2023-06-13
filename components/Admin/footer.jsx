import React, { useEffect, useState } from "react";

import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";

import Title from "../Ui/Title";
import Input from "../Form/Input";
import { footerSchema } from "@/schema/footerSchema";

const Footer = () => {
  const [value, setValue] = useState("instagram");
  const [input, setInput] = useState("");
  const [applications, setApplications] = useState([]);
  const [footer, setFooter] = useState();

  useEffect(() => {
    const getFooter = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/footer`
        );
        setFooter(res?.data.data[0]);
        setApplications(res?.data.data[0]?.links || []);
      } catch (error) {
        console.log(error);
      }
    };
    getFooter();
  });

  const onSubmit = async (values, actions) => {
    try {
      const newFooter = {
        location: values.location,
        email: values.email,
        phoneNumber: values.phoneNumber,
        desc: values.desc,
        openingDay: values.openingDay,
        openingTime: values.openingTime,
        links: applications,
      };
      if (footer) {
        const res = await axios.put(
          `${process.env.NEXT_PUBLIC_API_URL}/footer/${footer._id}`,
          newFooter
        );
        if (res.data.success) {
          toast.success("Footer Updated Successfully", {
            autoClose: 1000,
          });
        }
      } else {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/footer`,
          newFooter
        );
        if (res.data.success) {
          toast.success("Footer Added Successfully", {
            autoClose: 1000,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      enableReinitialize: true,
      initialValues: {
        location: footer?.location || "",
        email: footer?.email || "",
        phoneNumber: footer?.phoneNumber || "",
        desc: footer?.desc || "",
        openingDay: footer?.openingDay || "",
        openingTime: footer?.openingTime || "",
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
      type: "text",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 4,
      name: "desc",
      type: "text",
      placeholder: "Write Description",
      value: values.desc,
      errorMessage: errors.desc,
      touched: touched.desc,
    },
    {
      id: 5,
      name: "openingDay",
      type: "text",
      placeholder: "Write a Day",
      value: values.openingDay,
      errorMessage: errors.openingDay,
      touched: touched.openingDay,
    },
    {
      id: 6,
      name: "openingTime",
      type: "text",
      placeholder: "Write a Time",
      value: values.openingTime,
      errorMessage: errors.openingTime,
      touched: touched.openingTime,
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
            required={true}
          />
        ))}
      </div>
      <div className="flex gap-4 lg:flex-row flex-col w-full mt-4 lg:items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="h-auto">
            <select
              id="applications"
              className="h-14 w-24 border border-primary ring-primary text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block p-1 outline-none "
              defaultValue={"Choose a application"}
              onChange={(e) => setValue(e.target.value.toLowerCase())}
            >
              <option value="Instagram">Instagram</option>
              <option value="Facebook">Facebook</option>
              <option value="Twitter">Twitter</option>
              <option value="Pinterest">Pinterest</option>
              <option value="Linkedin">Linkedin</option>
            </select>
          </div>
          <Input
            placeholder="Link"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required={false}
          />
          <button
            type="button"
            onClick={() => {
              setApplications([
                ...applications,
                { application: value, link: input },
              ]);
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
                <i className={`fa fa-${application.application} text-2xl`}></i>
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
