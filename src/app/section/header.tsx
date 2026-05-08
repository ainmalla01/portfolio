"use client";
import Link from "next/link";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Header() {
  const liRefs = useRef<HTMLLIElement[]>([]);
  const navbar=useRef(null);
  const items = [
    { href: "/", label: "/Home", extra: " " },
    { href: "#aboutme", label: "/About Me" },
    { href: "#project", label: "/Project" },
    { href: "#skills", label: "/Skills" },
    { href: "#contact", label: "/Contact" },
  ];

//   useLayoutEffect(() => {
//   const ctx = gsap.context(() => {

//     gsap.from(liRefs.current, {
//       opacity: 0,
//       y: 20,
//       duration: 0.8,
//       ease: "power2.out",
//       stagger: 0.2,
//     });

//     gsap.to(navbar.current, {
//       borderWidth: 1,
//       borderColor: "#ffffff",
//       y: -10,
//       duration: 0.4,
//       scrollTrigger: {
//         trigger: navbar.current,
//         start: "top top",
//         end: "bottom top",
//         scrub: true,
//       }
//     });
    

//   });

//   return () => ctx.revert(); // cleanup
// }, []);

  return (
   <header
  className={`
  sticky
  top-0
  z-50
  w-full
  border-b
  border-zinc-800
  bg-black/80
  backdrop-blur-xl
  text-white
  ${poppins.className}
`}
>

  <div className="max-w-8xl mx-auto flex items-center justify-between px-6 py-5">

    {/* LOGO */}
    <div
      className="
      border
      border-yellow-400/40
      px-6
      py-4
      rounded-xl
      bg-zinc-900/60
      hover:border-yellow-400
      transition-all
      duration-300
      cursor-pointer
      "
    >
      <h2
        className="
        text-[20px]
        font-semibold
        tracking-wide
        "
      >
        <span className="text-white">AIN_MALLA</span>
        <span className="text-yellow-400">.exe</span>
      </h2>
    </div>

    {/* NAVBAR */}
    <nav
      ref={navbar}
      className="
      hidden
      md:block
      border
      border-zinc-800
      rounded-2xl
      bg-zinc-900/40
      backdrop-blur-lg
      "
    >

      <ul className="flex items-center gap-10 px-8 py-5">

        {items.map((item, i) => (
          <li
            key={item.label}
            ref={(el) => {
              if (el) liRefs.current[i] = el;
            }}
            className="relative group"
          >

            {item.href.startsWith("/") ? (
              <Link
                href={item.href}
                className="
                text-[17px]
                text-zinc-300
                font-medium
                transition-all
                duration-300
                hover:text-yellow-400
                "
              >
                /{item.label}
              </Link>
            ) : (
              <a
                href={item.href}
                className="
                text-[17px]
                text-zinc-300
                font-medium
                transition-all
                duration-300
                hover:text-yellow-400
                "
              >
                /{item.label}
              </a>
            )}

            {/* underline effect */}
            <span
              className="
              absolute
              left-0
              -bottom-2
              h-[2px]
              w-0
              bg-yellow-400
              transition-all
              duration-300
              group-hover:w-full
              "
            />

          </li>
        ))}

      </ul>

    </nav>

  </div>

</header>
  );
}
