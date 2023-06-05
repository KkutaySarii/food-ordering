import React from "react";

import axios from "axios";

import MenuWrapper from "@/components/Product/MenuWrapper";

const Index = ({ categoryList }) => {
  return (
    <div className="pt-10">
      <MenuWrapper categoryList={categoryList} />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);

  return {
    props: {
      categoryList: res.data?.data,
    },
  };
}

export default Index;
