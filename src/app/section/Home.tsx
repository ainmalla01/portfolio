// app/page.js
"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative w-full">
      {/* Section 1 */}
      <section className="h-screen flex items-center justify-center bg-blue-500">
        <h1 className="text-white text-5xl font-bold">Section 1</h1>
      </section>

      {/* Overlay Section */}
      <section className="relative h-[200vh] bg-transparent">
        <motion.div
          className="sticky top-0 h-screen flex items-center justify-center bg-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-white text-5xl font-bold">Overlay Section</h1>
        </motion.div>
      </section>

      {/* Section 3 */}
      <section className="h-screen flex items-center justify-center bg-green-500">
        <h1 className="text-white text-5xl font-bold">Section 3</h1>
      </section>
    </main>
  );
}
