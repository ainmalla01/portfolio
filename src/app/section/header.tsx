// components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">Ain_malla</h1>
        <ul className="flex gap-6 p-2">
          <li><Link href="/" className="bg-red-400 p-2">Home</Link></li>
          <li><a href="#aboutme" className="p-2">About Me</a></li>
          <li><a href="#project" className="p-2">Project</a></li>
          <li><a href="#skills" className="p-2">Skills</a></li>
          <li><a href="#contact" className="">Contact</a></li>
        </ul>

      </nav>
    </header>
  );
}
