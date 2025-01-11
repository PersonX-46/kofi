"use client";
import { motion } from "framer-motion";
import { GlareCard } from "./ui/glare-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCopy } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import MatrixEffect from "./MatrixEffect";

const ContactUs: React.FC = () => {
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
                  icon={faPhone}
                  className="w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 transition transform"
                />
                <h3 className="text-xl font-semibold mt-4 mb-2">Phone Number</h3>
                <p className="text-gray-300 text-center">
                  Reach out to me on Telegram for quick support.
                </p>
              </div>
              <h3 className="font-bold mt-5"> Phone Numbers: </h3>
              <a
                className="block  text-[#fdc97b] font-medium hover:underline"
              >
                +60 16-309 4214
              </a>
              <a
                className="block  text-[#fdc97b] font-medium hover:underline"
              >
                +60 18-327 2128
              </a>
            </GlareCard>
          </motion.div>

          <motion.div
            whileHover={{ scale: 0.9, rotate: 15, cursor: "pointer" }}
            className="flex justify-center"
          >
            <GlareCard className="flex flex-col justify-between items-center p-6 ">
            <MatrixEffect />
              <div className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 transition transform"
                />
                <h3 className="text-xl font-semibold mt-4 mb-2">Instagram</h3>
                <p className="text-gray-300 text-center">
                  Reach out to us on Instagram for quick support.
                </p>
              </div>
              <h3 className="font-bold mt-5"> Instagram ID: </h3>
              <a
                className="block  text-[#fdc97b] font-medium hover:underline"
              >
                https://www.instagram.com
              </a>
            </GlareCard>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
