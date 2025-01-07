"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";

// const ContactInfoButton = ({ i, expanded, setExpanded, contactDetails }) => {
//   const isOpen = i === expanded;

//   return (
//     <div>
//       <motion.button
//         onClick={() => setExpanded(isOpen ? null : i)} // Toggle expanded state
//         aria-expanded={isOpen}
//         aria-controls={`contact-info-${i}`} // Unique id for each accordion content
//         initial={false}
//         animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
//         className="text-sm font-semibold text-white py-2 px-4 rounded-md mt-2 hover:scale-105 transition-transform"
//       >
//         {isOpen ? "Hide Contact Info" : "Show Contact Info"}
//       </motion.button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             id={`contact-info-${i}`} // Unique ID for each section
//             key={`content-${i}`}
//             initial="collapsed"
//             animate="open"
//             exit="collapsed"
//             variants={{
//               open: { opacity: 1, height: "auto" },
//               collapsed: { opacity: 0, height: 0 },
//             }}
//             transition={{ duration: 0.3 }}
//             className="text-gray-600 mt-4 p-2 border rounded-md bg-gray-100"
//           >
//             {contactDetails}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default ContactInfoButton;

export function Slidelines() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div className=" mb-12 max-w-[1252px] w-full">
            <div className="w-2/3 h-2 py-4">
              <motion.div initial={{ width: 0 }} whileInView={{ width: 100, duration: 1000 }} className=" h-1 rounded-lg bg-blue-600 animate-fade-right"></motion.div>
            </div>
            <div>
            <h1 className="md:text-2xl lg:text-4xl font-semibold text-first">
            MEET THE TEAM
          </h1>
            </div>
        </motion.div>
    )
  }