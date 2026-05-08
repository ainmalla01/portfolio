"use client";

import Image from "next/image";
import Mypic from "../images/mypic.png";
import introImg from "../images/homeImg2.png";
import gsap from "gsap";
import { ScrollTrigger,SplitText } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText)

// const inter = Inter({ weight: "700", subsets: ["latin"] });
// const orbitron = Orbitron({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
// });

const Dashboard = () => {
  const webRef = useRef(null);

  useEffect(() => {
    const el = webRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      el,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 500, duration: 1.5, ease: "power3.out" },
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
   <section className="min-h-screen bg-black text-white overflow-hidden relative flex items-center justify-center px-6">

  {/* background glow */}
  <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] bg-yellow-500/10 blur-[140px] rounded-full"></div>
  <div className="absolute bottom-[-200px] left-[-100px] w-[400px] h-[400px] bg-white/10 blur-[120px] rounded-full"></div>

  {/* content */}
  <div className="z-10 flex flex-col items-center">

    {/* status */}
    <div className="mb-10 border border-yellow-500/30 bg-zinc-900/80 backdrop-blur-md px-6 py-3 rounded-full">
      <h1 className="text-sm tracking-[3px] text-yellow-400 font-medium">
        ● SYSTEM STATUS : ONLINE
      </h1>
    </div>

    {/* heading */}
    <div className="text-center">

      <h1 className="
      text-[65px]
      sm:text-[90px]
      md:text-[120px]
      font-extrabold
      leading-[0.9]
      tracking-[-4px]
      text-white
      ">
        SOFTWARE
      </h1>

      <h1 className="
      text-[65px]
      sm:text-[90px]
      md:text-[120px]
      font-extrabold
      leading-[1]
      tracking-[-4px]
      text-yellow-400
      ">
        ENGINEER
      </h1>

    </div>

    {/* description */}
    <div className="mt-8 text-center max-w-[700px]">

      <p className="text-zinc-300 text-[18px] md:text-[22px]">
        I build digital projects that refuse to be boring
      </p>

      <p className="mt-4 text-yellow-400 text-[16px] md:text-[18px] tracking-wide">
        Java + Next.js + Python + PHP + Node.js
      </p>

    </div>

    {/* buttons */}
    <div className="flex flex-wrap justify-center gap-5 mt-12">

      <button
        type="button"
        className="
        px-8
        py-4
        bg-yellow-400
        text-black
        font-semibold
        rounded-xl
        hover:scale-105
        transition-all
        duration-300
        shadow-[0_0_30px_rgba(250,204,21,0.25)]
        "
      >
        View Database
      </button>

      <button
        type="button"
        className="
        px-8
        py-4
        border
        border-zinc-700
        bg-zinc-900/70
        rounded-xl
        font-semibold
        hover:border-yellow-400
        hover:text-yellow-400
        transition-all
        duration-300
        "
      >
        Download CV
      </button>

    </div>

  </div>
</section>
  );
};

export default Dashboard;
