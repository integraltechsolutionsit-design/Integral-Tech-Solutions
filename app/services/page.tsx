"use client";

import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import CoreServicesCards from "../_components/CoreServicesCards";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="bg--200 min-h-screen mt-20">
      <main className="flex-1 mx-auto max-w-6xl px-4 sm:px-6 pt-8 md:pt-8">
        <div>
          <section className="flex flex-col lg:flex-row items-center justify-between py-20">

            {/* LEFT TEXT SECTION */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-xl"
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-[#4a4a43]">
                Delivering Tailored IT Solutions for Modern Businesses
              </h1>

              <p className="text-gray-500 mb-6 text-lg">
                Our cutting-edge services are designed to help your organization stay ahead
                in a fast-evolving digital landscape. We ensure seamless performance and
                scalable solutions for your IT needs.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-[#4a4a43] cursor-pointer text-white font-semibold rounded-lg shadow-md hover:bg-primary/90"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* RIGHT IMAGE WITH SLIDE-IN ANIMATION */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="rounded-xl overflow-hidden "
            >
              <Image
                height={500}
                width={800}
                src="/support2.png"
                alt="IT Services"
                className="w-full h-auto bg--200 "
              />
            </motion.div>

          </section>
        </div>
      </main>

      {/* CARDS SECTION */}
      <div className="flex-1 mx-auto max-w-8xl px-4 sm:px-6 ">
        <CoreServicesCards />
      </div>
       {/* CTA Section */}
                <section className="my-16 p-10  rounded-xl text-center">
                    <h2 className="text-3xl font-bold text-[#4a4a43] mb-2">Ready to Start Your Project?</h2>
                    <p className="text-gray-500 mb-6 max-w-xl mx-auto">Let's work together to build the future of your business. Contact us to learn how our solutions can help you achieve your goals.</p>
                    <Link href="/contact">
                        <button className="bg-[#4a4a43] flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 text-white text-base font-bold leading-normal tracking-[0.015em] mx-auto hover:bg-[#3a3a33] transition-colors">
                            <span className="truncate">Get in Touch</span>
                        </button>
                    </Link>
                </section>
    </div>
  );
}
