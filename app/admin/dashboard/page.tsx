import DashboardCard from "@/components/admin/dashboard-card";
import { Metadata } from "next";
import { Suspense } from "react";
import ReservationList from "@/components/admin/reservation-list";

export const metadata: Metadata = {
  title: "Dashboard",
};

const Dashboard = () => {
  return (
    <div className="max-w-screen-xl px-4 py-16 mt-10 mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 ">Dashboard</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <DashboardCard />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <ReservationList />
      </Suspense>
    </div>
  );
};

export default Dashboard;
