import Image from "next/image";
import Mypic from "../images/mypic.png"; // works with next/image
import { StarIcon } from "@heroicons/react/24/solid";
import { Inter, Lato, Orbitron } from "next/font/google";

const Intersans = Inter({
  weight: "700",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // pick the weights you need
});

const Dashboard = () => {
  return (
    <section className="h-screen flex flex-col items-center gap-16 justify-center relative">
      {/* Title */}
      <h1
        className={`${orbitron.className} text-[180px] absolute top-20 left-20 z-0 text-gray-200 opacity-20`}
      >
        Web Developer
      </h1>

      {/* Center Content */}
      <div className="flex items-center justify-center flex-col relative z-10">
        {/* Profile Image */}
        <div className="rounded-lg h-[45vh] w-[20vw] shadow-lg">
          <Image
            src={Mypic}
            alt="My picture"
            className="rounded-[20%] h-full w-full drop-shadow-[0_0_10px_black] brightness-110 contrast-130 object-cover"
          />
        </div>

        {/* Contact Button */}
        <div className="mt-6">
          <button
            type="button"
            className="h-12 w-32 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-300"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex gap-8 p-4 px-20 mt-10 text-center">
        {/* Clients */}
        <span className="w-[20vw] border-r border-white p-2 grid place-items-center">
          <h1 className="text-[30px] font-bold">200+</h1>
          <h3 className="text-[18px]">Satisfied Clients</h3>
        </span>

        {/* Projects */}
        <span className="w-[20vw] border-r border-white p-2 grid place-items-center">
          <h1 className="text-[30px] font-bold">90+</h1>
          <h3 className="text-[18px]">Projects Completed</h3>
        </span>

        {/* Reviews */}
        <span className="w-[20vw] p-2 grid place-items-center">
          <h1 className="text-[30px] font-bold">99+</h1>
          <h3 className="text-[18px]">Reviews Given</h3>
        </span>
      </div>
    </section>
  );
};

export default Dashboard;
