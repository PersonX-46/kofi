'use client';
import Logo from "../assets/coffee-logo.png"; // Replace with your coffee logo path
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-transparent backdrop-blur-md px-4 py-3 fixed w-full z-10">
      <div className="flex items-center justify-between px-11 py-8 h-16">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={Logo} alt="Coffee Logo" width={50} height={50} />
          <h1 className="ml-2 text-white font-bold text-xl">
            <Link href="/">Kofi</Link>
          </h1>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`text-white focus:outline-none transition-transform duration-300 ease-in-out transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Contact Us Button */}
        <Link
          href="/contact"
          className="hidden md:inline-flex bg-gradient-to-r from-[#b57d59] to-[#8b5742] text-white px-4 py-2 rounded-md hover:from-[#d89c7e] hover:to-[#a86b52] font-semibold"
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="text-white bg-[#3e2723] transition-all duration-300 ease-in-out">
          <div className="flex flex-col space-y-6 py-4 items-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#b57d59] to-[#8b5742] text-white px-4 py-2 rounded-md hover:from-[#d89c7e] hover:to-[#a86b52] font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
