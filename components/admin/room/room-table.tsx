import { getRooms } from "@/lib/data";
import Image from "next/image";
import { formatCurrency, formatDate } from "@/lib/utils";

const RoomTable = async () => {
  const rooms = await getRooms();
  if (!rooms?.length) return <p>No Room Found</p>;
  return (
    <div className="bg-white p-4 mt-5 shadow-sm">
      <table className="w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-7 w-32 text-sm font-bold text-gray-700 uppercase text-left">
              Image
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
            <th className="px-6 py-7 w-32 text-sm font-bold text-gray-700 uppercase text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {rooms.map((item) => (
            <tr className="hover:bg-gray-100" key={item.id}>
              <td className="px-6 py-4">
                <div className="h-20 w-32 relative">
                  <Image
                    src={item.image}
                    fill
                    sizes="20vw"
                    className="object-cover"
                    alt="room image"
                  />
                </div>
              </td>
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4">{formatCurrency(item.price)}</td>
              <td className="px-6 py-4">
                {formatDate(item.createdAt.toString())}
              </td>
              <td className="px-6 py-4 text-right"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomTable;
