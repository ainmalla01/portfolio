'use client';

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-white py-10">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-6">

        {/* Social Icons */}
        <div className="flex justify-center gap-4">
          <a href="#" className="bg-white text-teal-700 p-3 rounded-full hover:bg-teal-500 hover:text-white transition">
            <FaFacebookF />
          </a>
          <a href="#" className="bg-white text-teal-700 p-3 rounded-full hover:bg-teal-500 hover:text-white transition">
            <FaTwitter />
          </a>
          <a href="#" className="bg-white text-teal-700 p-3 rounded-full hover:bg-teal-500 hover:text-white transition">
            <FaLinkedinIn />
          </a>
        </div>

        {/* Address */}
        <p className="text-sm">
          250 Executive Park Blvd, Suite 3400 • San Francisco CA 94134 • United States
        </p>

        {/* Contact Info */}
        <div className="flex justify-center items-center gap-6 flex-wrap text-sm">
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span>+123-456-789</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>info@gmail.com</span>
          </div>
        </div>

        {/* Logo Placeholder */}
        <h2 className="text-2xl font-semibold">Logo <span className="font-light">Here</span></h2>
      </div>
    </footer>
  );
};

export default Footer;
