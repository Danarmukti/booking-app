import Hero from "@/components/Hero";
import Main from "@/components/main";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="mt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold uppercase">Room & Rates</h1>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            ipas!
          </p>
        </div>
        <Main></Main>
      </div>
    </div>
  );
}
