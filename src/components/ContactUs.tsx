"use client";
import { motion } from "framer-motion";
import { GlareCard } from "./ui/glare-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import MatrixEffect from "./MatrixEffect";
import { useState } from "react";

const ContactUs: React.FC = () => {
  const [message, setMessage] = useState("");

  const handleWhatsAppMessage = () => {
    const phoneNumber = "60163094214"; // Replace with your WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

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
              <a className="block text-[#fdc97b] font-medium hover:underline">
                +60 16-309 4214
              </a>
              <a className="block text-[#fdc97b] font-medium hover:underline">
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
                className="block text-[#fdc97b] font-medium hover:underline"
              >
                https://www.instagram.com
              </a>
            </GlareCard>
          </motion.div>
        </div>

        {/* WhatsApp Message Box */}
        <div className="mt-12 flex justify-center items-center">
          <div className="w-full sm:w-2/3">
            <h3 className="text-2xl font-semibold mb-4 text-white bg-clip-text text-center">
              Send us a message
            </h3>
            <div className="relative">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="w-full p-4 pr-14 rounded-xl text-white bg-transparent border-2 border-amber-700 bg-clip-padding outline-none shadow-md placeholder-gray-700 resize-none"
                rows={3}
              />
              <div className="absolute -top-3 left-4 font-bold bg-[#a76f53] px-2 text-sm text-white rounded-full shadow">
                📝 Message Us
              </div>
              <button
                onClick={handleWhatsAppMessage}
                className="absolute bottom-2 right-2 flex items-center space-x-2 px-4 py-2 mb-2 mr-1 rounded-lg text-white bg-gradient-to-r from-[#7b4b3a] via-[#a76f53] to-[#d4a373] hover:from-[#a76f53] hover:to-[#7b4b3a] transition-all shadow-lg"
              >
                <span>Message on WhatsApp</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.38 0 0 5.38 0 12a11.91 11.91 0 0 0 2.52 7.44L0 24l4.68-2.43A11.93 11.93 0 0 0 12 24c6.62 0 12-5.38 12-12a11.91 11.91 0 0 0-3.48-8.52ZM12 22a10 10 0 0 1-5.19-1.42l-.37-.22-2.78 1.44 1.47-2.74-.24-.38A9.91 9.91 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10Zm5.36-7.72c-.29-.14-1.72-.85-1.99-.95s-.46-.14-.65.14-.75.95-.92 1.15-.34.22-.63.07a8.07 8.07 0 0 1-2.35-1.44 8.47 8.47 0 0 1-1.57-1.95c-.16-.27 0-.42.12-.57.13-.13.29-.34.44-.51.14-.17.19-.28.29-.47s.05-.36-.03-.51-.65-1.56-.89-2.13c-.24-.57-.48-.49-.65-.5s-.36-.02-.55-.02a1.06 1.06 0 0 0-.77.36c-.26.28-1.02 1-1.02 2.46s1.05 2.85 1.2 3.05c.14.19 2.04 3.14 4.96 4.4.7.3 1.24.48 1.66.61.7.22 1.33.19 1.84.12.56-.08 1.72-.7 1.96-1.38.25-.68.25-1.26.18-1.38s-.26-.2-.55-.34Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default ContactUs;

