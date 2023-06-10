import React, { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

import Title from "../Ui/Title";
import Input from "../Form/Input";

const Category = () => {
  const [inputText, setInputText] = useState("");
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/categories`
        );
        if (res.status === 200) {
          setCategories(res?.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  const addCategory = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/categories`,
        { title: inputText.toUpperCase() }
      );
      if (res.status === 200) {
        setCategories([...categories, res?.data.data]);
        toast.success("Category Added");
        setInputText("");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteCategory = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#10b981",
        cancelButtonColor: "#ef4444",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axios.delete(
            `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`
          );
          if (res.status === 200) {
            setCategories(categories.filter((cat) => cat._id !== id));
            toast.success("Category Deleted");
          }
        }
      });
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="w-full mt-5 overflow-x-auto flex flex-col items-start">
      <Title addClass="text-[40px]">Category</Title>
      <div className="flex w-full gap-4 items-center">
        <Input
          placeholder="Add a new category"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="btn" onClick={addCategory}>
          Add
        </button>
      </div>
      <div className="mt-5 w-full flex flex-col gap-4 max-h-[250px] overflow-auto pb-4">
        {categories.length !== 0 &&
          categories?.map((category) => (
            <div
              className="flex justify-between w-full items-center"
              key={category._id}
            >
              <b className="text-xl">{category.title}</b>
              <button
                onClick={() => deleteCategory(category._id)}
                className="btn !bg-danger"
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Category;
