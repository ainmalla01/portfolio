'use client';

import React from 'react';

const ContactMe = () => {
  return (
   <section
  id="contact"
  className="
  relative
  min-h-screen
  bg-black
  flex
  items-center
  justify-center
  px-6
  py-20
  overflow-hidden
  "
>
  {/* glow */}
  <div className="absolute top-[-100px] left-[-100px] h-[250px] w-[250px] rounded-full bg-yellow-400/10 blur-3xl"></div>

  <div className="absolute bottom-[-100px] right-[-100px] h-[250px] w-[250px] rounded-full bg-white/10 blur-3xl"></div>

  {/* grid bg */}
  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>

  {/* container */}
  <div
    className="
    relative z-10
    w-full max-w-7xl
    grid grid-cols-1 lg:grid-cols-2
    border border-zinc-800
    rounded-3xl
    overflow-hidden
    bg-zinc-950
    "
  >

    {/* LEFT SIDE */}
    <div className="p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-zinc-800 flex flex-col justify-center">

      <p className="text-yellow-400 tracking-[4px] uppercase text-sm mb-5">
        // Contact Me
      </p>

      <h1 className="text-5xl md:text-7xl font-black text-white leading-none">
        LET’S <span className="text-yellow-400">CONNECT</span>
      </h1>

      <p className="text-zinc-400 mt-8 leading-[34px] text-lg">
        Have a project idea, collaboration, or internship opportunity?
        Feel free to contact me. I am always interested in building
        creative and modern digital experiences.
      </p>

      {/* contact cards */}
      <div className="mt-12 flex flex-col gap-6">

        <div className="border border-zinc-800 rounded-2xl p-5 bg-black/40 hover:border-yellow-400 duration-300">
          <p className="text-zinc-500 text-sm mb-2">EMAIL</p>
          <h1 className="text-white text-lg font-semibold">
            ainmalla@email.com
          </h1>
        </div>

        <div className="border border-zinc-800 rounded-2xl p-5 bg-black/40 hover:border-yellow-400 duration-300">
          <p className="text-zinc-500 text-sm mb-2">LOCATION</p>
          <h1 className="text-white text-lg font-semibold">
            Kathmandu, Nepal
          </h1>
        </div>

        <div className="border border-zinc-800 rounded-2xl p-5 bg-black/40 hover:border-yellow-400 duration-300">
          <p className="text-zinc-500 text-sm mb-2">GITHUB</p>
          <h1 className="text-white text-lg font-semibold">
            github.com/ainmalla01
          </h1>
        </div>

      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="p-10 md:p-14 flex items-center">

      <form className="w-full flex flex-col gap-6">

        {/* name */}
        <div>
          <label className="text-zinc-400 text-sm mb-3 block">
            YOUR NAME
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="
            w-full
            bg-black
            border
            border-zinc-800
            rounded-xl
            px-5
            py-4
            text-white
            outline-none
            focus:border-yellow-400
            duration-300
            "
          />
        </div>

        {/* email */}
        <div>
          <label className="text-zinc-400 text-sm mb-3 block">
            EMAIL ADDRESS
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="
            w-full
            bg-black
            border
            border-zinc-800
            rounded-xl
            px-5
            py-4
            text-white
            outline-none
            focus:border-yellow-400
            duration-300
            "
          />
        </div>

        {/* message */}
        <div>
          <label className="text-zinc-400 text-sm mb-3 block">
            MESSAGE
          </label>

          <textarea
            rows={6}
            placeholder="Write your message..."
            className="
            w-full
            bg-black
            border
            border-zinc-800
            rounded-xl
            px-5
            py-4
            text-white
            outline-none
            resize-none
            focus:border-yellow-400
            duration-300
            "
          ></textarea>
        </div>

        {/* button */}
        <button
          type="submit"
          className="
          mt-4
          bg-yellow-400
          text-black
          font-bold
          py-4
          rounded-xl
          hover:scale-[1.02]
          duration-300
          shadow-[0_0_25px_rgba(250,204,21,0.25)]
          "
        >
          SEND MESSAGE
        </button>

      </form>
    </div>
  </div>
</section>
  );
};

export default ContactMe;
