"use client";
import Image from "next/image";
import coffeeImage from "../assets/coffee.png"; // Replace with your coffee image
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#4b2e1c] via-[#201a12] to-black text-white min-h-screen flex items-center justify-center px-4">
      {/* Background Coffee Vibes */}
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/path-to-coffee-beans-background.jpg')" }} />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center max-w-7xl mx-auto gap-10">
        {/* Coffee Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 border-[6px] border-[#a87449] rounded-full shadow-lg shadow-[#a87449]/50">
            <Image
              src={coffeeImage}
              alt="Hero Coffee Image"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </motion.div>

        {/* Hero Text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#d4a373] to-[#a87449] animate-pulse"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          >
            Discover the Magic of Coffee
          </motion.h1>
          <motion.p
            className="mt-4 text-lg sm:text-xl text-gray-300 max-w-xl"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Brewed with passion and love, we bring you the finest blends to energize your mornings, uplift your afternoons, and soothe your evenings. Let&apos;s sip, savor, and share the joy of coffee.
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
