"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins
gsap.registerPlugin(CSSPlugin, ScrollTrigger);

const Project = () => {
  const rotateRef = useRef(null);

  useEffect(() => {
    if (rotateRef.current) {
      gsap.to(rotateRef.current, {
        rotationX: 180,
        backgroundColor: "white",
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#project",   // when #project enters viewport
          start: "top 80%",      // start when top of section hits 80% of viewport
          toggleActions: "play none none reverse", 
          // play on enter, reverse on leave (you can adjust)
        },
      });
    }
  }, []);

  return (
   <section
  id="projects"
  className="relative min-h-screen bg-black py-20 px-6 overflow-hidden"
>
  {/* glow */}
  <div className="absolute top-[-100px] right-[-100px] h-[250px] w-[250px] bg-yellow-400/10 blur-3xl rounded-full"></div>

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* heading */}
    <p className="text-yellow-400 tracking-[5px] uppercase text-sm mb-4">
      // Projects
    </p>

    <h1 className="text-white text-5xl md:text-7xl font-black mb-14">
      MY <span className="text-yellow-400">WORK</span>
    </h1>

    {/* project grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* project card */}
      <div className="group border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-950 hover:border-yellow-400 duration-300">

        {/* image */}
        <div className="overflow-hidden">
          <img
            src="/projects/project1.png"
            alt="project"
            className="h-[220px] w-full object-cover group-hover:scale-110 duration-500"
          />
        </div>

        {/* content */}
        <div className="p-6">

          <h2 className="text-white text-2xl font-bold">
            Stock Pro App
          </h2>

          <p className="text-zinc-400 mt-3 text-sm leading-[26px]">
            Real-time stock market tracking app with live NEPSE data,
            floorsheet and market depth system.
          </p>

          {/* tech stack */}
          <div className="flex flex-wrap gap-2 mt-5">

            <span className="text-xs px-3 py-1 bg-black border border-zinc-800 text-yellow-400 rounded-full">
              Next.js
            </span>

            <span className="text-xs px-3 py-1 bg-black border border-zinc-800 text-yellow-400 rounded-full">
              Node.js
            </span>

            <span className="text-xs px-3 py-1 bg-black border border-zinc-800 text-yellow-400 rounded-full">
              MongoDB
            </span>

          </div>

        </div>
      </div>

      {/* project 2 */}
      <div className="group border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-950 hover:border-yellow-400 duration-300">

        <img
          src="/projects/project2.png"
          className="h-[220px] w-full object-cover group-hover:scale-110 duration-500"
        />

        <div className="p-6">

          <h2 className="text-white text-2xl font-bold">
            Social Web App
          </h2>

          <p className="text-zinc-400 mt-3 text-sm leading-[26px]">
            A social platform with messaging, posts, friends system
            and profile rating system.
          </p>

          <div className="flex flex-wrap gap-2 mt-5">

            <span className="text-xs px-3 py-1 bg-black border border-zinc-800 text-yellow-400 rounded-full">
              React
            </span>

            <span className="text-xs px-3 py-1 bg-black border border-zinc-800 text-yellow-400 rounded-full">
              Express
            </span>

            <span className="text-xs px-3 py-1 bg-black border border-zinc-800 text-yellow-400 rounded-full">
              MySQL
            </span>

          </div>

        </div>
      </div>

      {/* project 3 */}
      <div className="group border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-950 hover:border-yellow-400 duration-300">

        <img
          src="/projects/project3.png"
          className="h-[220px] w-full object-cover group-hover:scale-110 duration-500"
        />

        <div className="p-6">

          <h2 className="text-white text-2xl font-bold">
            Animal Protection Website
          </h2>

          <p className="text-zinc-400 mt-3 text-sm leading-[26px]">
            Awareness and rescue platform for animal protection
            and adoption system.
          </p>

          <div className="flex flex-wrap gap-2 mt-5">

            <span className="text-xs px-3 py-1 bg-black border border-zinc-800 text-yellow-400 rounded-full">
              Next.js
            </span>

            <span className="text-xs px-3 py-1 bg-black border border-zinc-800 text-yellow-400 rounded-full">
              Tailwind
            </span>

            <span className="text-xs px-3 py-1 bg-black border border-zinc-800 text-yellow-400 rounded-full">
              Firebase
            </span>

          </div>

        </div>
      </div>

    </div>
  </div>
</section>
  );
};

export default Project;
