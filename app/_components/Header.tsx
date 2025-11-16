"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (path: string) =>
    `hover:text-[#4a4a43] pb-1 ${
      pathname === path
        ? "border-b-2 border-[#4a4a43] font-semibold text-[#4a4a43]"
        : ""
    }`;
      const linkClass2 = (path: string) =>
    `hover:text-[#4a4a43] pb-1 text-xl ${
      pathname === path
        ? "border-b-2 border-[#4a4a43] font-semibold text-[#4a4a43]"
        : ""
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full py-3 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="px-6 md:px-20 max-w-7xl mx-auto flex  items-center gap-10">

        {/* Logo */}
        <div className="flex items-center gap-4">
        <Image
          height={100}
          alt="logo"
          width={100}
          src={"/logo.png"}
          className="text-xl font-serif tracking-wide text-[#4a4a43]"
        />
        {/* <nav>
          <Link href="/" className={linkClass2("/")}>Integral Tech Solution</Link>

        </nav> */}
        </div>

        {/* Desktop Menu — stays left beside logo */}
        <nav className="hidden md:flex gap-10 text-gray-500">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/about" className={linkClass("/about")}>About</Link>
          <Link href="/services" className={linkClass("/services")}>Services</Link>
          <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
        </nav>

        {/* Push mobile icon to extreme right */}
        <div className="flex-1 flex justify-end md:hidden">
          <div
            className="text-gray-700 text-3xl cursor-pointer"
            onClick={() => setOpen(true)}
          >
            ☰
          </div>
        </div>
      </div>

      {/* Slide-in sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="text-3xl text-gray-600"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col gap-6 text-gray-700 px-6 mt-4">
          <Link href="/" onClick={() => setOpen(false)} className="text-lg">Home</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="text-lg">About</Link>
          <Link href="/services" onClick={() => setOpen(false)} className="text-lg">Services</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="text-lg">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
