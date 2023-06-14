import { useEffect, useState } from "react";
import Image from "next/image";

import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

import Title from "@/components/Ui/Title";

const Products = ({ productList }) => {
  const [campaigns, setCampaigns] = useState([]);
  const [discount, setDiscount] = useState("");

  const getCampaigns = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/campaign`
      );
      setCampaigns(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCampaigns();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
      );
      toast.success(response.data.message);
      window.location.reload();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleAddCampaign = async (id, image) => {
    try {
      Swal.fire({
        title: "What is the discount?",
        input: "number",
        inputPlaceholder: "Discount",
        icon: "question",
        confirmButtonColor: "#10b981",
        confirmButtonText: "Add",
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "What is the title?",
            input: "text",
            inputPlaceholder: "Title",
            icon: "question",
            confirmButtonColor: "#10b981",
            confirmButtonText: "Add",
          }).then(async (result2) => {
            if (result2.isConfirmed) {
              const res = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/campaign`,
                {
                  product_id: id,
                  title: result2.value,
                  discount: result.value,
                  image: image,
                }
              );
              toast.success("Campaign added!");
              getCampaigns();
            }
          });
        }
      });
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const handleTakeOff = async (id) => {
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/campaign/${id}`
      );
      toast.success(res.data.message);
      getCampaigns();
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="w-full mt-5 overflow-x-auto flex flex-col items-start">
      <Title addClass="text-[40px]">Products</Title>
      <div className="overflow-auto max-h-[450px] w-full mt-5">
        <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                IMAGE
              </th>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                TITLE
              </th>
              <th scope="col" className="py-3 px-6">
                PRICE
              </th>
              <th scope="col" className="py-3 px-6">
                ACTION
              </th>
              <th scope="col" className="py-3 px-6">
                CAMPAIGN
              </th>
            </tr>
          </thead>
          <tbody>
            {productList.length > 0 &&
              productList.map((product) => (
                <tr
                  key={product._id}
                  className="transition-all bg-secondary border-gray-700 hover:bg-primary "
                >
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                    <Image src={product.image} alt="" width={50} height={50} />
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {product._id.length > 10 &&
                      product._id.slice(0, 10) + "..."}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {product.title}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    $ {product.prices[0]}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    <button
                      className="btn !bg-danger"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {campaigns.find(
                      (campaign) => campaign.product_id === product._id
                    ) ? (
                      <button
                        className="btn !bg-danger"
                        onClick={() =>
                          handleTakeOff(
                            campaigns[
                              campaigns.findIndex(
                                (campaign) =>
                                  campaign.product_id === product._id
                              )
                            ]._id
                          )
                        }
                      >
                        Take off
                      </button>
                    ) : (
                      <button
                        className="btn !bg-success"
                        onClick={() =>
                          handleAddCampaign(product._id, product.image)
                        }
                      >
                        Add
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
