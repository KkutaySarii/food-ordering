import React, { useEffect, useState } from "react";

import axios from "axios";

import Title from "../Ui/Title";

const Reservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const getReservations = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/reservation`
        );
        setReservations(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getReservations();
  }, []);
  return (
    <div className="w-full mt-5 overflow-x-auto flex flex-col items-start">
      <Title addClass="text-[40px]">Products</Title>
      <div className="overflow-auto max-h-[450px] w-full mt-5">
        <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                NAME
              </th>
              <th scope="col" className="py-3 px-6">
                PHONE
              </th>
              <th scope="col" className="py-3 px-6">
                MAIL
              </th>
              <th scope="col" className="py-3 px-6">
                PERSON COUNT
              </th>
              <th scope="col" className="py-3 px-6">
                DATE
              </th>
            </tr>
          </thead>
          <tbody>
            {reservations.length > 0 &&
              reservations.map((reservation) => (
                <tr
                  key={reservation._id}
                  className="transition-all bg-secondary border-gray-700 hover:bg-primary "
                >
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                    {reservation._id.length > 10 &&
                      reservation._id.slice(0, 10) + "..."}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {reservation?.fullName}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {reservation?.phoneNumber}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {reservation?.email}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {reservation?.personCount}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {reservation?.date.slice(0, 10) +
                      " " +
                      reservation?.date.slice(11, 16)}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reservations;
