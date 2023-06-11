import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

import { resetCart } from "@/redux/cartSlice";
import Title from "@/components/Ui/Title";

const Index = ({ userList }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const currentUser = userList.find(
    (user) => user.email === session?.user?.email
  );
  const newOrder = {
    customer: currentUser?.fullName,
    address: currentUser?.address || "No address",
    total: cart.total,
    paymentMethod: 0,
    status: 0,
  };

  const handleCheckout = async () => {
    try {
      if (session) {
        if (cart.products.length === 0) {
          toast.error("Your cart is empty!");
          return;
        }
        Swal.fire({
          title: "Are you sure?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#10b981",
          cancelButtonColor: "#ef4444",
          confirmButtonText: "Yes, checkout it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            const res = await axios.post(
              `${process.env.NEXT_PUBLIC_API_URL}/orders`,
              newOrder
            );
            if (res.status === 201) {
              toast.success("Order created successfully!");
              dispatch(resetCart());
              router.push(`/order/${res.data.data._id}`);
            } else {
              toast.error("Something went wrong!");
            }
          }
        });
      } else {
        toast.error("You must login first!");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-[calc(100vh_-_460px)]">
      <div className="flex justify-between md:flex-row flex-col">
        <div className="min-h-[calc(100vh_-_460px)] flex items-center flex-1 p-10 overflow-x-auto">
          <table className="table-auto w-full text-sm text-center text-gray-500 min-w-[1000px]">
            <thead className="text-xs bg-gray-700 uppercase text-gray-400">
              <tr>
                <th className="py-3 px-6" scope="col">
                  Product
                </th>
                <th className="py-3 px-6" scope="col">
                  Extras
                </th>
                <th className="py-3 px-6" scope="col">
                  Prices
                </th>
                <th className="py-3 px-6" scope="col">
                  Quantity
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map((product) => (
                <tr
                  key={product.id}
                  className="bg-secondary hover:bg-primary transition-all"
                >
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center    ">
                    <Image
                      src={product?.image}
                      alt="pizza"
                      width={50}
                      height={50}
                    />
                    <span>{product.name}</span>
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {product.extras.length > 0 ? (
                      product.extras.map((extra) => {
                        const { id, name } = extra;
                        return <span key={id}>{name}, </span>;
                      })
                    ) : (
                      <span>No Extras</span>
                    )}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    <span>${product.price}</span>
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    <span>{product.quantity}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-secondary flex-col p-10 min-h-[calc(100vh_-_460px)] text-white flex justify-center items-center md:items-start">
          <Title addClass="text-[40px] md:text-start text-center">
            CART TOTAL
          </Title>
          <div className="mt-6">
            <b>Subtotal: </b>${cart.total}
            <br />
            <b className="inline-block my-1">Discount: </b>
            $0.00
            <br />
            <b>Total: </b>${cart.total}
          </div>
          <div>
            <button
              onClick={handleCheckout}
              className="btn mt-4 md:w-auto w-52"
            >
              Checkout Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user`);

  return {
    props: {
      userList: res?.data.data || [],
    },
  };
};

export default Index;
