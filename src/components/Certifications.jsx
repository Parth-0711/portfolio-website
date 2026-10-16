import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { certifications } from "../data/portfolioData";
import { FaCertificate, FaTimes } from "react-icons/fa";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-28">
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {certifications.map((cert, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-3xl
                  shadow-md
                  hover:shadow-xl
                  transition-all
                  duration-300
                  p-8
                  hover:-translate-y-2
                "
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <FaCertificate
                    size={30}
                    className="text-green-600"
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {cert.name}
                </h3>

                <p className="text-green-700 font-semibold">
                  {cert.issuer}
                </p>

                <p className="text-gray-500 mt-2 mb-6">
                  {cert.year}
                </p>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="
                    bg-green-500
                    text-white
                    px-5
                    py-3
                    rounded-xl
                    font-medium
                    hover:bg-green-600
                    transition
                  "
                >
                  View Certificate
                </button>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedCert && (
            <div
              className="
                fixed inset-0
                bg-black/70
                flex items-center justify-center
                z-50
                p-4
              "
            >
              <div
                className="
                  bg-white
                  rounded-2xl
                  max-w-5xl
                  w-full
                  relative
                  overflow-hidden
                "
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="
                    absolute
                    top-4
                    right-4
                    text-2xl
                    text-gray-700
                  "
                >
                  <FaTimes />
                </button>

                <img
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  className="
                    w-full
                    max-h-[85vh]
                    object-contain
                  "
                />
              </div>
            </div>
          )}

        </div>
      </SectionWrapper>
    </section>
  );
};

export default Certifications;