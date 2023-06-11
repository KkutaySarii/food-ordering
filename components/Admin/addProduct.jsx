import React, { useEffect, useState } from "react";
import Image from "next/image";

import OutsideClickHandler from "react-outside-click-handler";
import axios from "axios";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { GiCancel } from "react-icons/gi";

import Title from "../Ui/Title";

const AddProduct = ({ setIsProductModal }) => {
  const [file, setFile] = useState();
  const [imageSrc, setImageSrc] = useState();
  const [extras, setExtras] = useState([]);
  const [extra, setExtra] = useState({});
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/categories`
      );
      setCategories(res.data.data);
      setCategory(res.data.data[0].title);
    };
    getCategories();
  }, []);

  const onSubmit = async (values) => {
    const data = new FormData();
    if (!file)
      return toast.error("Please choose an image", { autoClose: 1000 });
    if (!values.title)
      return toast.error("Please enter a title", { autoClose: 1000 });
    if (!values.desc)
      return toast.error("Please enter a description", { autoClose: 1000 });
    if (!values.prices) return toast.error("Please enter a price");

    data.append("file", file);
    data.append("upload_preset", "food-ordering");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dg6g0h4zy/image/upload",
        data
      );
      const { url } = uploadRes.data;
      const updatedValues = {
        ...values,
        image: url,
        extras: extras,
        category: category,
      };
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/products`,
        updatedValues
      );

      if (res.data.success) {
        setIsProductModal(false);
        toast.success("Product added successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const { values, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: {
      title: "",
      desc: "",
      category: "",
      prices: [],
      extras: [],
      image: "",
    },
    onSubmit,
  });

  const handleFileChange = (e) => {
    const reader = new FileReader();
    reader.onload = (onLoadEvent) => {
      setImageSrc(onLoadEvent.target.result);
      setFile(e.target.files[0]);
    };
    reader.readAsDataURL(e.target.files[0]);
    handleChange(e);
  };

  const handleExtra = (e) => {
    e.preventDefault();
    if (extra) {
      if (extra.name && extra.price) {
        const newExtra = { ...extra };
        setExtras((prev) => [...prev, newExtra]);
        setExtra({});
      }
    }
  };

  const handleExtraChange = (event) => {
    const { name, value } = event.target;
    setExtra((prevExtra) => ({
      ...prevExtra,
      [name]: value,
    }));
  };

  return (
    <div className="absolute w-screen grid place-content-center h-screen z-40 top-0 left-0 after:contents-[''] after:absolute after:bg-white after:top-0 after:left-0 after:w-screen after:h-screen after:opacity-50">
      <OutsideClickHandler
        onOutsideClick={() => {
          setIsProductModal(false);
        }}
      >
        <div className="w-full h-full ">
          <div className=" relative z-[9999] md:w-[600px] w-[370px] border-2 p-10 rounded-3xl bg-white">
            <Title addClass="text-[40px] text-center">Add a New Product</Title>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1 mt-4">
                <label className="flex gap-1">
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <button className="btn !bg-blue-600 pointer-events-none">
                    Choose an image
                  </button>
                  {imageSrc && (
                    <Image
                      className="rounded-full"
                      alt=""
                      src={imageSrc}
                      width={36}
                      height={36}
                    ></Image>
                  )}
                </label>
              </div>
              <div className="flex flex-col gap-1 mt-3">
                <span className="text-sm font-semibold">Title</span>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Write a title..."
                  className="text-sm p-1 outline-none border-2"
                />
              </div>
              <div className="flex flex-col gap-1 mt-3">
                <span className="text-sm font-semibold">Desc</span>
                <textarea
                  type="text"
                  name="desc"
                  id="desc"
                  value={values.desc}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Write a description..."
                  className="text-sm p-1 outline-none border-2 max-h-[250px] overflow-y-auto"
                />
              </div>
              <div className="flex flex-col gap-1 mt-3">
                <span className="text-sm font-semibold">Categories</span>
                <select
                  type="text"
                  name="category"
                  id="category"
                  value={category}
                  defaultValue={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Write a description..."
                  className="text-sm p-1 outline-none border-2 max-h-[250px] overflow-y-auto"
                >
                  {categories.length > 0 &&
                    categories.map((category) => (
                      <option key={category._id} value={category.title}>
                        {category.title}
                      </option>
                    ))}
                </select>
              </div>
              <div className="flex flex-col gap-1 mt-3">
                <span className="text-sm font-semibold">Prices</span>
                {category === "PIZZA" ? (
                  <div className="flex flex-wrap gap-2">
                    <input
                      type="number"
                      id="small"
                      name="prices[0]"
                      value={values.prices.small}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="text-sm w-full md:w-auto p-1 pl-0 outline-none border-b-2 border-0"
                      placeholder="small"
                    />
                    <input
                      type="number"
                      id="medium"
                      name="prices[1]"
                      value={values.prices.medium}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="text-sm w-full md:w-auto p-1 pl-0 outline-none border-b-2 border-0"
                      placeholder="medium"
                    />
                    <input
                      type="number"
                      id="large"
                      name="prices[2]"
                      value={values.prices.large}
                      onChange={handleChange}
                      className="text-sm w-full md:w-auto p-1 pl-0 outline-none border-b-2 border-0"
                      placeholder="large"
                    />
                  </div>
                ) : (
                  <input
                    type="number"
                    id="small"
                    name="prices[0]"
                    value={values.prices.small}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="text-sm w-1/3 p-1 pl-0 outline-none border-b-2 border-0"
                    placeholder="small"
                  />
                )}
              </div>
              <div className="flex flex-col gap-1 mt-3">
                <span className="text-sm font-semibold">Extra</span>
                <div className="flex flex-wrap gap-2">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="name"
                    value={extra.name || ""}
                    onChange={handleExtraChange}
                    className="text-sm w-full md:w-auto p-1 pl-0 pb-0 outline-none border-b-2 border-0"
                  />
                  <input
                    type="number"
                    id="price"
                    placeholder="price"
                    name="price"
                    value={extra.price || ""}
                    onChange={handleExtraChange}
                    className="text-sm w-full md:w-auto p-1 pl-0 pb-0 outline-none border-b-2 border-0"
                  />
                  <div className="flex items-center justify-end flex-1">
                    <button type="button" className="btn" onClick={handleExtra}>
                      Add
                    </button>
                  </div>
                </div>
                <div className="mt-2 flex gap-2">
                  {extras.map((item, index) => (
                    <span
                      className="text-xs border border-orange-500 text-orange-500 p-1 rounded-2xl cursor-pointer"
                      key={index}
                      onClick={() =>
                        setExtras(
                          extras.filter((extra) => extra.name !== item.name)
                        )
                      }
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-full flex justify-end mt-3">
                <button type="submit" className="btn !bg-success">
                  Create
                </button>
              </div>
            </form>
            <button
              onClick={() => setIsProductModal(false)}
              className="absolute top-4 right-4"
            >
              <GiCancel
                size={25}
                className="hover:text-primary transition-all"
              />
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default AddProduct;
