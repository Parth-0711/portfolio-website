// import React from "react";
// import SectionWrapper from "./SectionWrapper";
// import { education } from "../data/portfolioData";

// const Education = () => {
//   return (
//     <section id="education" className="py-28">
//       <SectionWrapper>
//         <div className="max-w-6xl mx-auto px-8">

//           <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
//             Education
//           </h2>

//           <div className="space-y-8">

//             {education.map((item, index) => (
//               <div
//                 key={index}
//                 className="
//                   bg-white
//                   rounded-3xl
//                   shadow-md
//                   hover:shadow-xl
//                   transition-all
//                   duration-300
//                   overflow-hidden
//                 "
//               >
//                 <div className="flex">

//                   {/* Left Accent */}
//                   <div className="w-2 bg-green-500"></div>

//                   {/* Content */}
//                   <div className="p-8 flex-1">

//                     <h3 className="text-2xl font-bold text-gray-900">
//                       {item.degree}
//                     </h3>

//                     <p className="text-green-700 font-semibold mt-2">
//                       {item.institution}
//                     </p>

//                     <p className="text-gray-500 text-sm mt-1">
//                       {item.duration}
//                     </p>

//                     <div className="mt-4 inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
//                       {item.score}
//                     </div>

//                   </div>

//                 </div>
//               </div>
//             ))}

//           </div>

//         </div>
//       </SectionWrapper>
//     </section>
//   );
// };

// export default Education;