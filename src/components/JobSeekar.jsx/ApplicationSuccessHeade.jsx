// import React, { useEffect, useState } from "react";
// import Confetti from "react-confetti";
// import { motion } from "framer-motion";
// import { CheckCircle } from "lucide-react";

// export default function ApplicationSuccessHeader({ onViewApplication, onExploreMore }) {
//   const [showConfetti, setShowConfetti] = useState(true);

//   useEffect(() => {
//     // Stop confetti after 2.5 seconds
//     const timer = setTimeout(() => setShowConfetti(false), 6500);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="relative w-full">
//       {/* 🎉 Confetti */}
//       {showConfetti && <Confetti numberOfPieces={180} recycle={false} />}

//       {/* MAIN HEADER */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="bg-green-50 border border-green-200 p-6 rounded-xl mt-4 shadow-sm flex flex-col items-center"
//       >
//         {/* ✔ Animated Checkmark */}
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1.1 }}
//           transition={{ type: "spring", stiffness: 200, damping: 10 }}
//         >
//           <CheckCircle className="text-green-600 w-14 h-14 mb-3" />
//         </motion.div>

//         {/* TEXT */}
//         <h2 className="text-xl font-semibold text-green-700">
//           Application submitted successfully! 🎉
//         </h2>

//         <p className="text-sm text-gray-600 mt-1">
//           Here are similar opportunities you may be interested in.
//         </p>

//         {/* BUTTONS */}
//         <div className="flex gap-3 mt-4">
//           <button
//             onClick={onViewApplication}
//             className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//           >
//             View My Application
//           </button>

//           <button
//             onClick={onExploreMore}
//             className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
//           >
//             Explore More Jobs
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";
import "./ApplicationSuccessHeader.css"; // we will create this

export default function ApplicationSuccessHeader({ job }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100); // slight delay to trigger animations
  }, []);

  return (
    <div className="relative bg-green-50 rounded-2xl shadow-lg p-4 sm:p-4 mb-6 text-center overflow-hidden fade-up-section ">
      {/* Confetti */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`confetti bg-color-${i % 8}`}
          style={{ left: `${10 + i * 7}%`, animationDelay: `${i * 0.25}s` }}
        ></div>
      ))}

      <div className="flex gap-6 items-center">
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-green-500 rounded-full pulse-ring "></div>

          <div
            className={`relative bg-green-500    rounded-full w-24 h-24
          sm:w-16 sm:h-16 flex items-center justify-center 
          ${animate ? "checkmark-animate" : ""}`}
          >
            <Check size={32} className="text-white" />
          </div>
        </div>

        {/* Title */}
        <div className="flex flex-col">
          <p className="text-base text-start sm:text-lg lg:text-xl font-bold text-gray-900 ">
            Application Submitted Successfully!
          </p>
          <p className="text-base text-start  sm:text-base  text-gray-500 max-w-2xl">
            Your application for
            <span className="font-semibold text-gray-900"> {job?.title} </span>
            at
            <span className="font-semibold text-gray-900">
              {" "}
              {job?.postedBy.companyName}
            </span>
            has been submitted.
          </p>
          {/* BUTTONS */}
          <div className="flex gap-3 mt-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition">
              View My Application
            </button>

            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-2xl hover:bg-gray-300 transition">
              Explore More Jobs
            </button>
          </div>
        </div>
      </div>
      {/* SUCCESS ICON */}

      {/* Subtitle */}
    </div>
  );
}
