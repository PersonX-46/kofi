"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import MatrixEffect from "./MatrixEffect";
import coffeeImage from "../assets/coffee.png";
import tribulus from "../assets/tribulus.png" // Placeholder for all ingredient images
import palmetto from "../assets/sawpalmetto.png"
import arabica from "../assets/arabica.png"
import butia from "../assets/butea.png"

interface IngredientProps {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
}

const Ingredients: React.FC = () => {
  const ingredients: IngredientProps[] = [
    {
      id: 1,
      name: "Tribulus Terrestris",
      description:
        "A potent herbal ingredient known for its health benefits, including boosting vitality and promoting overall wellness.",
      image: tribulus, // Replace with an actual image of Tribulus Terrestris
    },
    {
      id: 2,
      name: "Butea Superba",
      description:
        "A traditional Thai herb revered for its energy-enhancing properties and role in maintaining health.",
      image: butia, // Replace with an actual image of Butea Superba
    },
    {
      id: 3,
      name: "Saw Palmetto",
      description:
        "Extracted from the fruit of the saw palmetto tree, it supports overall health and wellness.",
      image: palmetto, // Replace with an actual image of Saw Palmetto
    },
    {
      id: 4,
      name: "Arabica Coffee",
      description:
        "Handpicked Arabica coffee beans, roasted to perfection for a rich and aromatic flavor experience.",
      image: arabica, // Replace with an actual image of Arabica Coffee
    },
    {
      id: 5,
      name: "Fructose",
      description:
        "A natural sugar derived from fruits, adding a gentle sweetness to enhance the taste.",
      image: coffeeImage, // Replace with an actual image of Fructose
    },
  ];

  return (
    <div className="bg-gradient-radial from-[#1d130d] to-black text-gray-100 py-12 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Ingredients That Make It Special
        </h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Discover the premium ingredients that bring unmatched quality and flavor to every sip.
        </p>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {ingredients.map((ingredient) => (
            <motion.div
              key={ingredient.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ rotate: 15 }}
              className="cursor-pointer"
            >
              <CardContainer>
                <CardBody className="bg-[#00000042] h-auto border shadow-[0_0_3px_amber] rounded-xl relative group/card dark:bg-black dark:border-amber-500/[0.5] border-amber-500/[0.3] w-full min-h-[450px] p-6">
                  <MatrixEffect />
                  <CardItem translateZ="100">
                    <Image
                      src={ingredient.image}
                      width={1000}
                      height={300}
                      className="w-auto h-[300px] object-cover mb-4 rounded-xl"
                      alt={ingredient.name}
                    />
                  </CardItem>

                  <CardItem
                    as="h3"
                    target="__self"
                    translateZ="50"
                    className="text-xl font-semibold mb-2 text-amber-500"
                  >
                    {ingredient.name}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-sm text-gray-400 mb-4 max-w-sm mt-2 dark:text-neutral-300 line-clamp-3"
                  >
                    {ingredient.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ingredients;


