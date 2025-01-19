"use client";
import Image from "next/image";
import coffeeImage from "../assets/logo2.png"; // Replace with your coffee image
import { motion } from "framer-motion";
import TypeWriter from "./TypeWriter";

export const HeroSection = () => {
  return (
    <div className="relative bg-gradient-radial from-[#1d130d] to-black text-white min-h-screen flex flex-col items-center justify-center px-4 pt-20">
      {/* Background Coffee Vibes */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/path-to-coffee-beans-background.jpg')" }}
      />

      {/* Quote Section */}
      <motion.div
        className="relative z-10 text-center px-4 mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold italic text-white mt-7 mb-10">
          &quot;Power up your day with every sip&quot;
        </p>
      </motion.div>

      {/* Hero Content */}
      <div className="relative flex flex-col lg:flex-row items-center max-w-7xl mx-auto gap-10">
        {/* Coffee Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <div className="relative flex items-center justify-center w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 border-[6px] border-[#a87449] rounded-full shadow-lg shadow-[#a87449]/50">
            <Image
              src={coffeeImage}
              alt="Hero Coffee Image"
              className="object-cover rounded-full"
              fill
            />
          </div>
        </motion.div>

        {/* Hero Text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0ea5ea] to-[#0bd1d1]">
              <TypeWriter />
            </span>
          </h1>
          <motion.p
            className="mt-4 text-lg sm:text-xl text-gray-300 max-w-xl"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Brewed with passion and love, we bring you the finest blends to energize your mornings,
            uplift your afternoons, and soothe your evenings. Let&apos;s sip, savor, and share the joy of coffee.
          </motion.p>

          {/* Call-to-Action Button */}
          <motion.div
            className="mt-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          >
            <a
              href="#contact"
              className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#a87449] to-[#d4a373] rounded-full shadow-md hover:shadow-xl hover:from-[#d4a373] hover:to-[#a87449] transition-all duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};




