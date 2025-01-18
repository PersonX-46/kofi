"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import coffeeImage1 from "../assets/coffee1.jpeg";
import coffeeImage2 from "../assets/coffee2.jpeg";
import coffeeImage3 from "../assets/coffee3.jpeg";
import coffeeImage4 from "../assets/coffee4.jpeg";

const CoffeeProducts: React.FC = () => {
  const coffeeImages = [coffeeImage1, coffeeImage2, coffeeImage3, coffeeImage4];

  // Animation variants for individual images
  const imageVariants = {
    initial: { scale: 0.9, rotate: 0 },
    animate: {
      scale: [0.9, 1.1, 0.9],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    hover: { scale: 1.2, rotate: 0, transition: { duration: 0.3 } },
  };

  return (
    <section className="py-16 px-6 bg-gradient-radial from-[#1d130d] to-black">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-white">
          Coffee Products
        </h2>
        <div className="p-10 overflow-hidden relative">
          <motion.div
            className="flex space-x-12"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }}
          >
            {/* Coffee Images with Unique Animations */}
            {coffeeImages.concat(coffeeImages).map((image, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[280px] h-[280px] relative"
                variants={imageVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                <Image
                  src={image}
                  alt={`Coffee Product ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl shadow-2xl"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeProducts;


