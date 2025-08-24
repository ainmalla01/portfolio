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
    <div
      className="h-screen flex items-center w-full justify-center flex-col"
      id="project"
    >
      <h1 className="text-white text-[40px] m-4 text-3xl">List Of Project</h1>
     <div className="container h-full w-[80%] grid grid-cols-3 items-center ">

        <div className="ptojects relative h-[40vh] w-[20vw] bg-purple-600">
          <div
            className="p_title absolute bottom-0 h-[10vh] w-full"
            ref={rotateRef}
          />
        </div> <div className="ptojects relative h-[40vh] w-[20vw] bg-purple-600">
          <div
            className="p_title absolute bottom-0 h-[10vh] w-full"
            ref={rotateRef}
          />
        </div> <div className="ptojects relative h-[40vh] w-[20vw] bg-purple-600">
          <div
            className="p_title absolute bottom-0 h-[10vh] w-full"
            ref={rotateRef}
          />
        </div> <div className="ptojects relative h-[40vh] w-[20vw] bg-purple-600">
          <div
            className="p_title absolute bottom-0 h-[10vh] w-full"
            ref={rotateRef}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
