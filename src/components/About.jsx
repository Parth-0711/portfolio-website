import React from "react";
import profile from "../assets/profile.png";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const About = () => {
  return (
    <section id="about" className="py-28">
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-green-700 mb-6">
                Software Engineer & Full Stack Developer
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                I am an Information Technology graduate with hands-on
                experience in Java, Spring Boot, React.js, MySQL,
                REST APIs, and Full Stack Development.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                I enjoy building scalable applications, solving
                real-world problems, and continuously learning
                new technologies.
              </p>

              {/* INFO CARDS */}
              <div className="grid grid-cols-2 gap-5">

                <div className="bg-white p-5 rounded-2xl shadow-md">
                  <span className="font-semibold text-green-700">
                    Degree
                  </span>
                  <p className="text-gray-700 mt-1">
                    B.E Information Technology
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-md">
                  <span className="font-semibold text-green-700">
                    Location
                  </span>
                  <p className="text-gray-700 mt-1">
                    Pune, India
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-md">
                  <span className="font-semibold text-green-700">
                    CGPA
                  </span>
                  <p className="text-gray-700 mt-1">
                    7.54
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-md">
                  <span className="font-semibold text-green-700">
                    Status
                  </span>
                  <p className="text-gray-700 mt-1">
                    Open to Opportunities
                  </p>
                </div>

              </div>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">

                {/* Background Decoration */}
                <div className="absolute -top-6 -left-6 w-full h-full bg-green-200 rounded-3xl"></div>

                <img
                  src={profile}
                  alt="Parth Jadhav"
                  className="relative w-[350px] md:w-[420px] rounded-3xl shadow-xl object-cover"
                />

              </div>
            </motion.div>

          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default About;