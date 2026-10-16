import React from "react";
import SectionWrapper from "./SectionWrapper";

const Experience = () => {
  return (
    <section id="experience" className="py-28">
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
            Experience
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Internship Experience */}
            <div
              className="
                bg-white
                rounded-3xl
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300
                p-8
                border-t-4
                border-green-500
              "
            >
              <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">
                Internship Experience
              </span>

              <h3 className="text-2xl font-bold text-gray-900 mt-4">
                Web Development Intern
              </h3>

              <p className="text-green-700 font-semibold mt-2">
                CodeClause
              </p>

              <p className="text-gray-500 text-sm mt-1 mb-5">
                1 Month Internship
              </p>

              <p className="text-gray-600 leading-relaxed mb-5">
                Developed a responsive Blog Website using HTML, CSS, and
                JavaScript. Focused on creating clean UI layouts, improving
                user experience, and implementing dynamic frontend features.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  HTML
                </span>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  CSS
                </span>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  JavaScript
                </span>
              </div>
            </div>

            {/* Academic Experience */}
            <div
              className="
                bg-white
                rounded-3xl
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300
                p-8
                border-t-4
                border-blue-500
              "
            >
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Academic Experience
              </span>

              <h3 className="text-2xl font-bold text-gray-900 mt-4">
                BrezzyDrive Rentals
              </h3>

              <p className="text-blue-700 font-semibold mt-2">
                Team Project
              </p>

              <p className="text-gray-500 text-sm mt-1 mb-5">
                MERN Stack Application
              </p>

              <p className="text-gray-600 leading-relaxed mb-5">
                Collaborated in a team to develop a car rental platform using
                the MERN stack. Contributed primarily to backend development,
                database design, API implementation, and problem-solving to
                ensure efficient booking and vehicle management workflows.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  MongoDB
                </span>

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Express.js
                </span>

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  React.js
                </span>

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Node.js
                </span>
              </div>
            </div>

          </div>

        </div>
      </SectionWrapper>
    </section>
  );
};

export default Experience;