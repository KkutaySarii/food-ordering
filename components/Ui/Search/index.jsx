import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import OutsideClickHandler from "react-outside-click-handler";
import { GiCancel } from "react-icons/gi";
import axios from "axios";
import PacmanLoader from "react-spinners/PacmanLoader";

import Title from "../Title";
import Input from "@/components/Form/Input";

const Search = ({ setIsSearchModal }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searched, setSearched] = useState("");

  const router = useRouter();

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/products`
        );
        setProducts(res?.data.data);
        setFilteredProducts(res?.data.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getProducts();
  }, []);

  useEffect(() => {
    const filter = products.filter((product) => {
      return product.title.toLowerCase().includes(searched.toLowerCase());
    });
    setFilteredProducts(filter);
  }, [products, searched]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearched(value);
    const filter = products.filter((product) => {
      return product.title.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredProducts(filter);
  };

  return (
    <div className="absolute w-screen grid place-content-center h-screen z-40 top-0 left-0 after:contents-[''] after:absolute after:bg-white after:top-0 after:left-0 after:w-screen after:h-screen after:opacity-50">
      <OutsideClickHandler
        onOutsideClick={() => {
          setIsSearchModal(false);
        }}
      >
        <div className="w-full h-full ">
          <div className=" relative z-50 md:w-[600px] w-[370px] border-2 p-10 rounded-3xl bg-white">
            <Title addClass="text-[40px] text-center">Search</Title>
            <Input
              type="text"
              placeholder="Search..."
              value={searched}
              onChange={handleSearch}
              required={true}
            />
            {isLoading ? (
              <div className="flex justify-center">
                <PacmanLoader color={"#ffbe33"} />
              </div>
            ) : (
              <ul className="mt-4">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <li
                      key={product._id}
                      className="flex items-center justify-between p-1 hover:bg-primary cursor-pointer transition-all"
                      onClick={() => {
                        setIsSearchModal(false);
                        router.push(`/product/${product._id}`);
                      }}
                    >
                      <div className="relative flex">
                        <Image
                          src={product?.image}
                          alt={product?.title}
                          width={48}
                          height={48}
                        />
                      </div>
                      <span className="font-bold">{product?.title}</span>
                      <span className="font-bold">${product?.prices[0]}</span>
                    </li>
                  ))
                ) : (
                  <div className="text-center font-semibold">
                    No product found
                  </div>
                )}
              </ul>
            )}
            <button
              onClick={() => setIsSearchModal(false)}
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

export default Search;
