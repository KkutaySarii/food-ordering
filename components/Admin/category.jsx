import React, { useState } from "react";
import Title from "../Ui/Title";
import Input from "../Form/Input";

const Category = () => {
  const [inputText, setInputText] = useState("");
  const [categories, setCategories] = useState(["pizza"]);
  return (
    <div className="w-full mt-5 overflow-x-auto flex flex-col items-start">
      <Title addClass="text-[40px]">Category</Title>
      <div className="flex w-full gap-4 items-center">
        <Input
          placeholder="Add a new category"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className="btn"
          onClick={() => {
            setCategories([...categories, inputText]);
            setInputText("");
          }}
        >
          Add
        </button>
      </div>
      <div className="mt-5 w-full flex flex-col gap-4">
        {categories.map((category, index) => (
          <div className="flex justify-between w-full items-center" key={index}>
            <b className="text-xl">{category}</b>
            <button
              onClick={() =>
                setCategories(categories.filter((cat) => cat !== category))
              }
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
