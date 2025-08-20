"use client";
import { reservationProps } from "@/types/reservation";
import clsx from "clsx";
import { useTransition } from "react";

declare global {
  interface Window {
    snap: {
      pay: (token: string) => void;
    };
  }
}

const PaymentButton = ({ reservation }: { reservation: reservationProps }) => {
  const [isPending, startTransition] = useTransition();
  const handlePayment = async () => {
    startTransition(async () => {
      try {
        const response = await fetch("/api/payment", {
          method: "POST",
          body: JSON.stringify(reservation),
        });
        const { token } = await response.json();
        if (token) {
          window.snap.pay(token);
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  return (
    <button
      onClick={handlePayment}
      className={clsx(
        "px-10 py-4 mt-2 text-center font-semibold text-white w-full bg-blue-500 rounded-sm hover:bg-blue-600 transition-all duration-150 cursor-pointer",
        { "opacity-50 cursor-progress": isPending }
      )}
      disabled={isPending}
    >
      {isPending ? "Processing..." : "Process Payment"}
    </button>
  );
};

export default PaymentButton;
