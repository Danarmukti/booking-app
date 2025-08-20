import { getReservation } from "@/lib/data";
import Image from "next/image";
import { formatCurrency, formatDate } from "@/lib/utils";

const ReservationList = async () => {
  const reservation = await getReservation();
  if (!reservation?.length) return <p>No reservation Found</p>;
  return (
    <div className="bg-white p-4 mt-5 shadow-sm">
      <table className="w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-7 w-32 text-sm font-bold text-gray-700 uppercase text-left">
              Image
            </th>
            <th className="px-6 py-7 w-32 text-sm font-bold text-gray-700 uppercase text-left">
              Customer Name
            </th>
            <th className="px-6 py-7 w-32 text-sm font-bold text-gray-700 uppercase text-left">
              Arrival
            </th>
            <th className="px-6 py-7 w-32 text-sm font-bold text-gray-700 uppercase text-left">
              Departure
            </th>
            <th className="px-6 py-7 w-32 text-sm font-bold text-gray-700 uppercase text-left">
              Room Name
            </th>
            <th className="px-6 py-7 w-32 text-sm font-bold text-gray-700 uppercase text-left">
              Price
            </th>
            <th className="px-6 py-7 w-32 text-sm font-bold text-gray-700 uppercase text-left">
              Created At
            </th>
            <th className="px-6 py-7 w-32 text-sm font-bold text-gray-700 uppercase text-center">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {reservation.map((item) => (
            <tr className="hover:bg-gray-100" key={item.id}>
              <td className="px-6 py-4">
                <div className="h-20 w-32 relative">
                  <Image
                    src={item.Room.image}
                    fill
                    sizes="20vw"
                    className="object-cover"
                    alt="room image"
                  />
                </div>
              </td>
              <td className="px-6 py-4">{item.User.name}</td>
              <td className="px-6 py-4">
                {formatDate(item.startDate.toISOString())}
              </td>
              <td className="px-6 py-4">
                {formatDate(item.endDate.toISOString())}
              </td>
              <td className="px-6 py-4">{item.Room.name}</td>
              <td className="px-6 py-4">
                {item.Payment?.amount && formatCurrency(item.Payment?.amount)}
              </td>
              <td className="px-6 py-4">
                {formatDate(item.createdAt.toString())}
              </td>
              <td className="px-6 py-4 text-right">
                {item.Payment?.status === "paid" ? (
                  <span className="capitalize bg-green-500 rounded-full text-white py-2 px-4">
                    {item.Payment?.status}
                  </span>
                ) : (
                  <span className="capitalize bg-red-400 rounded-full text-white py-2 px-4">
                    {item.Payment?.status}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationList;
