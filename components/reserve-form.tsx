"use client";
import DatePicker from "react-datepicker";
import { useState, useActionState } from "react";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { createReserve } from "@/lib/action";
import { DisabledDateProps, RoomDetailProps } from "@/types/room";
import clsx from "clsx";

const ReserveForm = ({
  room,
  disabledDate,
}: {
  room: RoomDetailProps;
  disabledDate: DisabledDateProps[];
}) => {
  const StartDate = new Date();
  const EndDate = addDays(StartDate, 1);

  const [startDate, setStartDate] = useState(StartDate);
  const [endDate, setEndDate] = useState(EndDate);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDateChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const [state, formAction, isPending] = useActionState(
    createReserve.bind(null, room.id, room.price, startDate, endDate),
    null
  );

  const excludeDates = disabledDate.map((item) => {
    return {
      start: item.startDate,
      end: item.endDate,
    };
  });

  return (
    <div>
      <form action={formAction}>
        <div className="mb-4">
          <label
            htmlFor=""
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Arrival - Departure
          </label>
          <DatePicker
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            selectsRange={true}
            onChange={handleDateChange}
            excludeDateIntervals={excludeDates}
            dateFormat="dd-MM-YYYY"
            wrapperClassName="w-full"
            className="py-2 px-4 rounded-md border border-gray-300 w-full"
          />
          <div aria-atomic="true" aria-live="polite">
            <p className="text-sm text-red-500 mt-2">{state?.messageDate}</p>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="py-2 px-4 rounded-md border border-gray-300 w-full"
          />
          <div aria-atomic="true" aria-live="polite">
            <p className="text-sm text-red-500 mt-2">{state?.error?.name}</p>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Phone
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="py-2 px-4 rounded-md border border-gray-300 w-full"
          />
          <div aria-atomic="true" aria-live="polite">
            <p className="text-sm text-red-500 mt-2">{state?.error?.phone}</p>
          </div>
        </div>
        <button
          type="submit"
          className={clsx(
            "px-10 py-3 text-center font-semibold text-white w-full bg-blue-500 rounded-sm cursor-pointer hover:bg-blue-600 transition-all duration-150",
            { "opacity-50 cursor-progress": isPending }
          )}
          disabled={isPending}
        >
          {isPending ? "Loading..." : "Reserve"}
        </button>
      </form>
    </div>
  );
};

export default ReserveForm;
