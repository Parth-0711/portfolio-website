import React from 'react'

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-bold mb-3">
          Parth Jadhav
        </h2>

        <p className="text-gray-400 mb-6">
          Software Engineer | Java Backend Developer
        </p>

        <div className="flex justify-center gap-6 text-2xl">

          <a
            href="https://github.com/Parth-0711"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/parth-jadhav-6b1266260/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:yourmail@gmail.com">
            <FaEnvelope />
          </a>

        </div>

        <p className="text-gray-500 mt-8 text-sm">
          © 2026 Parth Jadhav. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;