import HeaderSection from "@/components/Header-section";
import Main from "@/components/main";
import RoomSkeleton from "@/components/skeletons/room-skeleton";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Rooms & Rates",
  description: "Choose your best room today",
};

const RoomPage = () => {
  return (
    <div>
      <HeaderSection
        title={"Room & Rates"}
        subtitle={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
      />
      <div className="mt-10 px-4">
        <Suspense fallback={<RoomSkeleton />}>
          <Main></Main>
        </Suspense>
      </div>
    </div>
  );
};

export default RoomPage;
