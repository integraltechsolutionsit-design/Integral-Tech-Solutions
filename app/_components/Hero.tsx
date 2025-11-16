"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="w-full bg-gradient-to-tl from-[#a5a7a6] via-[#d0d2d1] to-[#ffffff] min-h-screen">
      <section className="pt-40 pb-20 px-6 md:px-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Left Content */}
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="uppercase tracking-widest  text-black mb-4 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
           Integral Tech Solutions
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl font-serif text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
           Empowering Businesses<br />with Smart IT Solutions
          </motion.h1>

          <motion.p
            className="text-gray-700 mt-6 max-w-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
           We design, build, and support digital systems that accelerate your growth and simplify your technology challenges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link href="/about">
              <button className="mt-8 border cursor-pointer border-gray-700 px-6 py-2 text-gray-600 text-sm tracking-wide hover:bg-gray-900 hover:text-white transition rounded-xl">
                ABOUT US
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          <img
            src="/HeroImage.png"
            alt="therapist"
            className="w-[300px] md:w-[450px] object-cover rounded"
          />
        </motion.div>

      </section>
    </div>
  );
}
