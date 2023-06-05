import Title from "@/components/Ui/Title";

const Orders = () => {
  return (
    <div className="w-full mt-5 overflow-x-auto flex flex-col items-start">
      <Title addClass="text-[40px]">Orders</Title>
      <div className="overflow-x-auto w-full mt-5">
        <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                Product Id
              </th>
              <th scope="col" className="py-3 px-6">
                Customer
              </th>
              <th scope="col" className="py-3 px-6">
                Total
              </th>
              <th scope="col" className="py-3 px-6">
                Payment
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary ">
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                63107...
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Kutay Sarı
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                $ 10
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Cash
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Preparing
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <button className="btn !bg-success">Next Stage</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
