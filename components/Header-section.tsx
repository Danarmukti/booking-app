import Image from "next/image";
const HeaderSection = ({
  title,
  subtitle,
}: {
  title: String;
  subtitle: String;
}) => {
  return (
    <header className="relative h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={"/hero.jpg"}
          alt="hero image"
          fill
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-5xl font-bold leading-tight mb-3 capitalize">
          {title}
        </h1>
        <p className="text-xl text-gray-300 mb-8 capitalize">{subtitle}</p>
      </div>
    </header>
  );
};

export default HeaderSection;
