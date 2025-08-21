import Image from "next/image";
import Mypic from "../images/mypic.png"; // works with next/image
import { StarIcon } from "@heroicons/react/24/solid";
const Dashboard = () => {
  return (
    <section className=" h-screen flex flex-col items-center gap-[4em] justify-center my-2">
      <div className="flex items-center bg-blue-1000 justify-center">
        <div className="content m-3 w-[50%]">
          <h1 className="text-4xl font-bold text-white">
            Hi, I’m Ain Malla 👋
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            A passionate{" "}
            <span className="text-pink-500">Software Developer</span> from Nepal
            🇳🇵 who loves building web and mobile applications with modern
            technologies.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-400 text-gray-200 rounded-lg hover:bg-gray-800 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="image rounded-lg h-[45vh] w-[20vw]">
          <Image
            src={Mypic}
            alt="My picture"
            className=" rounded-[20%] h-full w-full drop-shadow-[0_0_10px_black] brightness-110 contrast-130"
          />
        </div>
      </div>
      <div className="mybref_view flex gap-4 p-2 max-w-[max-content] px-[5em] ">
        {/* Clients */}
        <span className="h-[max-content] w-[20vw]  border-r border-white p-2  grid place-items-center gap-1">
          <h1 className="text-[30px]">200+</h1>
          <h3 className="text-[18px]">satisfied clients</h3>
        </span>

        {/* Projects */}
        <span className="h-[max-content] w-[20vw]  border-r border-white p-2  grid place-items-center gap-1">
          <h1 className="text-[30px]">90+</h1>
          <h3 className="text-[18px]">projects completed</h3>
        </span>

        {/* Reviews */}
        <span className="h-[max-content] w-[20vw] p-2  grid place-items-center gap-1">
          <h1 className="text-[30px]">99+</h1>
          <h3 className="text-[18px]">reviews given</h3>
        </span>
      </div>
    </section>
  );
};

export default Dashboard;
