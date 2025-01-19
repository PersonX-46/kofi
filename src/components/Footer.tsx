import Image from "next/image";
import coffeeLogo from "../assets/coffee-logo.png"; // Replace with your coffee logo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-radial from-[#1d130d] to-black text-gray-300 py-16 px-6 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-coffee-pattern opacity-20"></div>

      {/* Content Container Centered */}
      <div className="relative z-10 max-w-screen-xl mx-auto">
        {/* Logo and Description Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-10 text-center md:text-left">
          <div className="flex items-center space-x-4">
            <Image
              src={coffeeLogo}
              alt="Coffee Logo"
              className="w-16 h-16 rounded-full shadow-xl transition-transform duration-300 transform hover:scale-110"
            />
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-widest hover:text-[#D8B99C] transition duration-300">
              Mr Kofi
            </h1>
          </div>
          <p className="mt-6 md:mt-0 max-w-lg text-sm text-gray-400 opacity-80 hover:opacity-100 transition duration-300">
            Indulge in the rich aroma and exquisite flavors of our artisan coffee, lovingly crafted for every coffee lover.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center md:justify-start space-x-8 mb-10">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group transform transition-transform duration-300 hover:scale-110"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              className="w-8 h-8 text-gray-400 group-hover:text-white transition duration-200"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group transform transition-transform duration-300 hover:scale-110"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-8 h-8 text-gray-400 group-hover:text-white transition duration-200"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group transform transition-transform duration-300 hover:scale-110"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="w-8 h-8 text-gray-400 group-hover:text-white transition duration-200"
            />
          </a>
          <a
            href="mailto:coffeehaven@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group transform transition-transform duration-300 hover:scale-110"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="w-8 h-8 text-gray-400 group-hover:text-white transition duration-200"
            />
          </a>
        </div>

        {/* Footer Middle Section: Quick Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-8 mb-10">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-[#D8B99C] transition duration-300">About Us</a></li>
              <li><a href="/menu" className="hover:text-[#D8B99C] transition duration-300">Menu</a></li>
              <li><a href="/blog" className="hover:text-[#D8B99C] transition duration-300">Blog</a></li>
              <li><a href="/contact" className="hover:text-[#D8B99C] transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold text-white mb-4">Send Us a Message</h4>
            <p className="text-sm text-gray-400 mb-4">We&apos;d love to hear from you! Reach out to us on WhatsApp for any inquiries or feedback.</p>
            <a
              href="https://wa.me/60163094214" // Replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="inline px-6 py-2  text-white font-semibold rounded-lg shadow-lg bg-gradient-to-r from-[#7b4b3a] via-[#a76f53] to-[#d4a373] hover:from-[#a76f53] hover:to-[#7b4b3a]transition duration-300"
            >
              Message Us on WhatsApp
            </a>
            
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="w-full border-t  border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-center text-sm">
          <p className="text-gray-400">
            © {new Date().getFullYear()} MrKofi. All rights reserved.
          </p>
          <p className="text-gray-400 mt-2 md:mt-0">
            Designed with ☕ and ❤️ by Coffee Enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


