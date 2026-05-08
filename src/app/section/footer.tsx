'use client';

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
   <footer
  className="
  relative
  bg-black
  border-t
  border-zinc-800
  overflow-hidden
  "
>
  {/* glow */}
  <div className="absolute top-[-80px] left-[20%] h-[200px] w-[200px] rounded-full bg-yellow-400/10 blur-3xl"></div>

  {/* grid bg */}
  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>

  {/* main */}
  <div
    className="
    relative z-10
    max-w-7xl
    mx-auto
    px-6
    md:px-12
    py-16
    "
  >
    
    {/* top */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

      {/* logo */}
      <div>

        <h1 className="text-4xl font-black text-white">
          AIN<span className="text-yellow-400">.</span>
        </h1>

        <p className="text-zinc-400 mt-6 leading-[30px]">
          Creative software engineer focused on building
          modern, interactive, and memorable digital experiences.
        </p>

      </div>

      {/* navigation */}
      <div>

        <h1 className="text-white text-xl font-bold mb-6">
          Navigation
        </h1>

        <div className="flex flex-col gap-4">

          <a
            href="#home"
            className="text-zinc-400 hover:text-yellow-400 duration-300"
          >
            Home
          </a>

          <a
            href="#aboutme"
            className="text-zinc-400 hover:text-yellow-400 duration-300"
          >
            About
          </a>

          <a
            href="#projects"
            className="text-zinc-400 hover:text-yellow-400 duration-300"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-zinc-400 hover:text-yellow-400 duration-300"
          >
            Contact
          </a>

        </div>

      </div>

      {/* socials */}
      <div>

        <h1 className="text-white text-xl font-bold mb-6">
          Connect
        </h1>

        <div className="flex flex-col gap-4">

          <a
            href="https://github.com/ainmalla01"
            target="_blank"
            className="text-zinc-400 hover:text-yellow-400 duration-300"
          >
            GitHub
          </a>

          <a
            href="#"
            className="text-zinc-400 hover:text-yellow-400 duration-300"
          >
            LinkedIn
          </a>

          <a
            href="#"
            className="text-zinc-400 hover:text-yellow-400 duration-300"
          >
            Instagram
          </a>

          <a
            href="mailto:yourmail@gmail.com"
            className="text-zinc-400 hover:text-yellow-400 duration-300"
          >
            Email
          </a>

        </div>

      </div>
    </div>

    {/* line */}
    <div className="h-[1px] w-full bg-zinc-800 my-12"></div>

    {/* bottom */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-5">

      <p className="text-zinc-500 text-sm">
        © 2026 Ain B. Malla. All rights reserved.
      </p>

      <div className="flex items-center gap-4">

        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>

        <p className="text-zinc-500 text-sm tracking-[3px] uppercase">
          System Online
        </p>

      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
