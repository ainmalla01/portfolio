"use client";
import Link from "next/link";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Header() {
  const liRefs = useRef<HTMLLIElement[]>([]);
  const items = [
    { href: "/", label: "Home", extra: " " },
    { href: "#aboutme", label: "About Me" },
    { href: "#project", label: "Project" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(liRefs.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <header className={` text-white p-4 shadow-md ${poppins.className}`}>
      <nav className="flex justify-center items-center max-w-6xl mx-auto">
        <ul className="navbar flex gap-10 px-6 py-6 rounded-lg backdrop-blur-md border border-white/40 ">
          {(() => { liRefs.current = []; return null; })()}
          {items.map((item, i) => (
            <li key={item.label} 
            ref={(el) => {
            if(el) (liRefs.current[i] = el)}}>
              {item.href.startsWith("/") ? (
                <Link href={item.href} className={`${item.extra ?? ""} p-2`}>
                  {item.label}
                </Link>
              ) : (
                <a href={item.href} className={`${item.extra ?? ""} p-2`}>
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
