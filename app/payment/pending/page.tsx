import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { HiClock } from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Payment Pending",
};

const PaymentPending = async ({
  searchParams,
}: {
  searchParams: Promise<{ transaction_status: string }>;
}) => {
  const paymentStatus = (await searchParams).transaction_status;
  if (paymentStatus === "pending") redirect("/payment/pending");
  if (paymentStatus === "failure") redirect("/payment/failure");
  return (
    <div className="max-w-screen-xl px-4 mx-auto py-20 mt-12">
      <div className="p-6 md:mx-auto">
        <HiClock className="text-amber-600 w-20 mx-auto h-20 my-6" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Pending!
          </h3>
          <p className="text-gray-600 my-2">
            Please Finishing the payment soon!
          </p>
          <p>Have a great day!</p>
          <div className="py-10 text-center">
            <Link
              href={"/myreservation"}
              className="px-12 bg-indigo-600 hover:bg-indigo-600 text-white font-semibold py-3"
            >
              Go To My Reservation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPending;
