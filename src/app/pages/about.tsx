"use client";
import Image from "next/image";
import AboutmeImg from "../images/aboutmeImg.png";
import gsap from 'gsap';
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


const AboutMe = () => {
  useEffect(()=>{
      const ctx=gsap.context(()=>{
        gsap.from("img",{
          delay:0.2,
          duration:0.5,
          opacity:0,
          ease:"power1.in"

        })
     gsap.from(".li",{
      opacity:0,
      x:-100,
      duration:0.2,
      ease:"power1.out",
      stagger:0.2,
      scrollTrigger:{
        trigger:".aboutme",
        start:"top 60%",
        end:"top 0%"

      }

    })
  })
},[])
  
""
   

  return (
  <section
  id="aboutme"
  className="relative min-h-screen bg-black flex items-center justify-center px-6 overflow-hidden"
>
  {/* glow */}
  <div className="absolute top-[-100px] left-[-100px] h-[250px] w-[250px] bg-yellow-400/10 blur-3xl rounded-full"></div>
  <div className="absolute bottom-[-100px] right-[-100px] h-[250px] w-[250px] bg-white/10 blur-3xl rounded-full"></div>

  {/* main box */}
  <div
    className="
    relative z-10
    w-full max-w-7xl
    border border-zinc-800
    bg-zinc-950
    rounded-2xl
    overflow-hidden
    grid grid-cols-1 lg:grid-cols-2
    "
  >
    {/* left image side */}
    <div className="relative flex items-center justify-center border-b lg:border-b-0 lg:border-r border-zinc-800 p-10">
      
      {/* frame */}
      <div className="relative">
        
        {/* corners */}
        <div className="absolute -top-4 -left-4 h-20 w-20 border-l-4 border-t-4 border-yellow-400"></div>
        <div className="absolute -bottom-4 -right-4 h-20 w-20 border-r-4 border-b-4 border-yellow-400"></div>

        {/* image */}
        <img
          src="/images/aboutmeImg.png"
          alt="about me"
          className="
          h-[420px]
          w-[320px]
          object-cover
          grayscale
          hover:grayscale-0
          duration-500
          border border-zinc-700
          "
        />
      </div>
    </div>

    {/* right text side */}
    <div className="flex flex-col justify-center p-8 md:p-14 text-white">
      
      {/* small heading */}
      <p className="text-yellow-400 tracking-[4px] uppercase text-sm mb-5">
        // About Me
      </p>

      {/* title */}
      <h1 className="text-5xl md:text-7xl font-black leading-none mb-8">
        WHO AM <span className="text-yellow-400">I?</span>
      </h1>

      {/* paragraph */}
      <p className="text-zinc-300 text-lg leading-[34px]">
        I am <span className="text-yellow-400 font-semibold">Ain B. Malla</span>,
        a creative software engineer and web developer who believes modern
        websites should feel alive, interactive, and memorable.
        I build digital experiences with clean UI, strong frontend logic,
        and modern development technologies.
      </p>

      {/* points */}
      <div className="mt-10 flex flex-col gap-5">
        
        <div className="flex items-center gap-4">
          <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
          <p className="text-zinc-300">
            Specialized in Web Development & UI Design
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
          <p className="text-zinc-300">
            Focused on Next.js, React.js, Node.js & PHP
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
          <p className="text-zinc-300">
            Passionate about modern UI animations & experiences
          </p>
        </div>

      </div>

      {/* buttons */}
      <div className="flex gap-5 mt-12 flex-wrap">
        
        <button
          className="
          px-6 py-3
          bg-yellow-400
          text-black
          font-semibold
          rounded-xl
          hover:scale-105
          duration-300
          "
        >
          📍 Kathmandu, Nepal
        </button>

        <button
          className="
          px-6 py-3
          border border-zinc-700
          rounded-xl
          hover:border-yellow-400
          hover:text-yellow-400
          duration-300
          "
        >
          ✉ Contact Me
        </button>

      </div>
    </div>
  </div>
</section>

  );
};

export default AboutMe;

