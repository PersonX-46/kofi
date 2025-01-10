"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlareCard } from "./ui/glare-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCopy } from "@fortawesome/free-solid-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import faSession from "../assets/sessionIcon.png";
import MatrixEffect from "./MatrixEffect";

const ContactUs: React.FC = () => {
  const [sessionIDText, setSessionIDText] = useState("Copy");
  return (
    <section
      id="contact"
      className="bg-gradient-radial from-[#1d130d] to-black text-white py-8 md:py-16"
    >
      
      <div className="max-w-6xl mx-auto text-center px-4 md:px-8">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-gradient-to-r from-amber-400 to-amber-800 bg-clip-text mb-8">
          Contact Us
        </h2>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Email */}

          <motion.div
            whileHover={{ scale: 0.9, rotate: 15, cursor: "pointer" }}
            className="flex justify-center"
          >

            <GlareCard className="flex flex-col justify-between items-center p-6 min-h-[280px]">
            <MatrixEffect />
              <div className="flex flex-col items-center">
                <a
                  href="mailto:thelonelyblogger@proton.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="align-top"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 transition transform"
                  />
                </a>
                <h3 className="text-xl font-semibold mt-4 mb-2">Email</h3>
                <p className="text-gray-300 text-center">
                  Have any questions? Shoot me an email and we&apos;ll get back
                  to you.
                </p>
              </div>
              <h3 className="font-bold"> Email ID: </h3>
              <a
                href="mailto:thelonelyblogger@proton.me"
                className="block mt-1 text-[#fdc97b] font-medium hover:underline"
              >
                mrkofi@gmail.com
              </a>
            </GlareCard>
          </motion.div>

          {/* Telegram */}
          <motion.div
            whileHover={{ scale: 0.9, rotate: 15, cursor: "pointer" }}
            className="flex justify-center"
          >
            <GlareCard className="flex flex-col justify-between items-center p-6 ">
            <MatrixEffect />
              <div className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 transition transform"
                />
                <h3 className="text-xl font-semibold mt-4 mb-2">Telegram</h3>
                <p className="text-gray-300 text-center">
                  Reach out to me on Telegram for quick support.
                </p>
              </div>
              <h3 className="font-bold mt-5"> Telegram ID: </h3>
              <a
                href="https://t.me/Thelonelyblogger"
                className="block mt-1 text-[#fdc97b] font-medium hover:underline"
              >
                t.me/MrKofi
              </a>
            </GlareCard>
          </motion.div>

          {/* Session */}
          <motion.div
            whileHover={{ scale: 0.9, rotate: 15, cursor: "pointer" }}
            className="flex justify-center"
            onClick={() => {
              navigator.clipboard.writeText(
                "05b641b6617f1cef2bc14433b3f1274543e4c4f35f017eaadf5a10a695e7045f6e"
              );
              setSessionIDText("Copied!");
              
              // Reset the text after a delay
              setTimeout(() => {
                setSessionIDText("Copy");
              }, 2000);
            }}
          >
            <GlareCard  className="flex flex-col justify-between items-center p-6 ">
            <MatrixEffect />
              <div className="flex flex-col items-center" onClick={() => {
    
                // change the text with animation below here
              }}>
                <a href="">
                  <div className="bg-gray-300 rounded-full hover:scale-110 transition transform ">
                    <Image
                      width={33}
                      height={50}
                      src={faSession}
                      alt="Session"
                    />
                  </div>
                </a>
                <h3 className="text-xl font-semibold mt-4 mb-2">Session</h3>
                <p className="text-gray-300 text-cente">
                  Contact me via Session for secure and private communication.
                </p>
              </div>
              <h3 onClick={() => {
                navigator.clipboard.writeText("hello");
                console.log("done")
              }} className="font-bold mt-5"> Session ID: </h3>
              <div
                className="block mt-1 text-[#fdc97b] font-bold overflow-clip">
                
                <FontAwesomeIcon
                  icon={faCopy}
                  id="copy-text"
                  className="w-3 h-3 sm:w-3 sm:h-3  hover:scale-110 transition transform"
                />
                {sessionIDText}
              </div>
            </GlareCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
