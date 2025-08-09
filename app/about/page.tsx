import Image from "next/image";
import HeaderSection from "@/components/Header-section";
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5";

const AboutPage = () => {
  return (
    <div>
      <HeaderSection
        title="About Us"
        subtitle={"Lorem ipsum dolor sit amet."}
      />
      <div className="max-w-screen-xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <Image
            src={"/about-image.jpg"}
            width={650}
            height={579}
            alt="about image"
          ></Image>
          <div>
            <h1 className="text-5xl font-semibold text-gray-900 mb-4">
              Who We Are
            </h1>
            <p className="text-gray-700 py-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              natus quos doloremque eos provident rem unde est fugiat voluptas
              cum?
            </p>
            <ul className="list-item space-y-6 pt-8">
              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <IoEyeOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Vission : </h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Rerum ipsum, laboriosam assumenda odio ab aperiam.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <IoLocateOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Mission : </h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus quis enim optio, quos quisquam mollitia. Rem
                    at perferendis non repellat?
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
