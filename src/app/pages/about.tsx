import Image from "next/image";
import AboutmeImg from "../images/aboutmeImg.png";

const AboutMe = () => {
  return (
    <section
      className="flex flex-col h-screen items-center  py-10 my-10"
      id="aboutme"
    >
      {/* Title */}
      <h2 className="text-2xl font-bold text-[40px] text-blue-900 mb-6">About me</h2>

      <div className="flex flex-col md:flex-row  shadow-md rounded-lg p-6 gap-8 max-w-5xl">
        {/* Left Content */}
        <div className="flex flex-col justify-center md:w-1/2 gap-4">
          <h1 className="text-3xl font-bold text-white leading-relaxed ">
            Hello! <br /> My name is Ain Malla
          </h1>

          {/* Skills */}
          <ul className="grid grid-cols-2 gap-4 mt-4 text-white">
            <li>✅ Full Stack Developer</li>
            <li>✅ Front-end Developer</li>
            <li>✅ Back-end Developer</li>
            <li>✅ HTML, CSS</li>
            <li>✅ JavaScript</li>
            <li>✅ React / Node.js</li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-row gap-4 mt-6">
            <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded shadow hover:bg-green-600">
              Download My Resume
            </button>
            <button className="px-4 py-2 border border-gray-400 rounded text-gray-700 hover:bg-gray-100">
              Read More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src={AboutmeImg}
            alt="About Me"
            width={500}
            height={550}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

