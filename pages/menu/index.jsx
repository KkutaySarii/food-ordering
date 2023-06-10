import React from "react";

import axios from "axios";

import MenuWrapper from "@/components/Product/MenuWrapper";

const Index = ({ categoryList, productList }) => {
  return (
    <div className="pt-10">
      <MenuWrapper categoryList={categoryList} productList={productList} />
    </div>
  );
};

export async function getServerSideProps() {
  const categories = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`
  );
  const products = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products`
  );

  return {
    props: {
      categoryList: categories.data?.data,
      productList: products.data?.data,
    },
  };
}

export default Index;
