import { deleteRoom } from "@/lib/action";
import Link from "next/link";
import { IoPencil, IoTrashOutline } from "react-icons/io5";

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`/admin/room/edit/${id}`}
      className="rounded-sm p-1 bg-orange-400 text-white hover:bg-amber-500"
    >
      <IoPencil className="size-5"></IoPencil>
    </Link>
  );
};
export const DeleteButton = ({ id, image }: { id: string; image: string }) => {
  const DeleteRoomWithid = deleteRoom.bind(null, id, image);
  return (
    <form action={DeleteRoomWithid}>
      <button
        type="submit"
        className="rounded-sm p-1 hover:bg-red-200 cursor-pointer"
      >
        <IoTrashOutline className="size-5" />
      </button>
    </form>
  );
};
