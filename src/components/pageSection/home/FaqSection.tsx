// import { motion } from "framer-motion";
// import React from "react";

// function FaqSection() {
//   return (
//     <div id="faq-section">
//       <div className="w-full py-16 overflow-hidden relative bg-black">
//         <div className="max-w-[1440px] mx-auto lg:px-8 sm:px-[5%] px-[4%]">
//           <div className="flex flex-col items-center justify-center text-[#FFF]">
//             {/* Header */}
//             <div className="text-center">
//               <h4 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
//                 FAQ
//               </h4>
//               <span className="text-sm sm:text-base md:text-lg lg:text-xl leading-snug tracking-normal max-w-3xl mt-3 block">
//                 Answers to the frequently asked questions.
//               </span>
//             </div>

//             {/* FAQs */}
//             <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-[#FFF] w-full">
//               {/* Left Column */}
//               <div className="flex flex-col gap-6">
//                 <motion.div
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7, delay: 0.1 }}
//                   viewport={{ once: true }}
//                   className="bg-[#EDF7D1] rounded-lg p-6"
//                 >
//                   <p className="text-sm sm:text-base font-medium leading-relaxed text-gray-800">
//                     What inspired the creation of Rock Bottom Sickle Cell
//                     Initiative?
//                   </p>
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7, delay: 0.2 }}
//                   viewport={{ once: true }}
//                   className="bg-[#EDF7D1] rounded-lg p-6"
//                 >
//                   <p className="text-sm sm:text-base font-medium leading-relaxed text-gray-800">
//                     How does your mission help those with sickle cell?
//                   </p>
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7, delay: 0.3 }}
//                   viewport={{ once: true }}
//                   className="bg-[#EDF7D1] rounded-lg p-6"
//                 >
//                   <p className="text-sm sm:text-base font-medium leading-relaxed text-gray-800">
//                     What communities do you primarily serve in Nigeria?
//                   </p>
//                 </motion.div>
//               </div>

//               {/* Right Column */}
//               <div className="flex flex-col gap-6">
//                 <motion.div
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7, delay: 0.4 }}
//                   viewport={{ once: true }}
//                   className="bg-[#EDF7D1] rounded-lg p-6"
//                 >
//                   <p className="text-sm sm:text-base font-medium leading-relaxed text-gray-800">
//                     What kinds of support do you offer individuals and families?
//                   </p>
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7, delay: 0.5 }}
//                   viewport={{ once: true }}
//                   className="bg-[#EDF7D1] rounded-lg p-6"
//                 >
//                   <p className="text-sm sm:text-base font-medium leading-relaxed text-gray-800">
//                     How can people get involved or support your work?
//                   </p>
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7, delay: 0.6 }}
//                   viewport={{ once: true }}
//                   className="bg-[#EDF7D1] rounded-lg p-6"
//                 >
//                   <p className="text-sm sm:text-base font-medium leading-relaxed text-gray-800">
//                     Do you collaborate with healthcare or government
//                     organizations?
//                   </p>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FaqSection;


// import { motion, AnimatePresence } from "framer-motion";
// import React, { useState } from "react";
// import { FiPlus, FiMinus } from "react-icons/fi";

// const faqData = [
//   {
//     question:
//       "What inspired the creation of Rock Bottom Sickle Cell Initiative?",
//     answer:
//       "It was born from a deep understanding of the challenges faced by individuals living with sickle cell in Nigeria. We aim to bridge gaps in awareness, support, and healthcare access.",
//   },
//   {
//     question: "How does your mission help those with sickle cell?",
//     answer:
//       "Through comprehensive support, education, and advocacy, we empower individuals and ensure sickle cell doesn’t limit anyone’s potential.",
//   },
//   {
//     question: "What communities do you primarily serve in Nigeria?",
//     answer:
//       "We focus on underserved and rural communities where access to proper care and education is limited.",
//   },
//   {
//     question: "What kinds of support do you offer individuals and families?",
//     answer:
//       "Medical assistance, emotional support, economic empowerment programs, and educational outreach.",
//   },
//   {
//     question: "How can people get involved or support your work?",
//     answer:
//       "You can volunteer, donate, or partner with us. Visit our website or contact us directly to learn more.",
//   },
//   {
//     question: "Do you collaborate with healthcare or government organizations?",
//     answer:
//       "Yes, we work closely with medical professionals and government agencies to implement sustainable programs.",
//   },
// ];

// function FaqSection() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleFAQ = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div id="faq-section">
//       <div className="w-full py-16 overflow-hidden relative bg-black text-white">
//         <div className="max-w-[1440px] mx-auto lg:px-8 sm:px-[5%] px-[4%]">
//           <div className="flex flex-col items-center text-center">
//             <h4 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
//               FAQ
//             </h4>
//             <span className="text-sm sm:text-base md:text-lg lg:text-xl leading-snug max-w-3xl mt-3">
//               Answers to the frequently asked questions.
//             </span>
//           </div>

//           <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
//             {faqData.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-[#EDF7D1] text-gray-800 rounded-lg p-6"
//               >
//                 <button
//                   className="flex justify-between items-center w-full text-left"
//                   onClick={() => toggleFAQ(index)}
//                 >
//                   <span className="text-sm sm:text-base font-semibold">
//                     {item.question}
//                   </span>
//                   {openIndex === index ? (
//                     <FiMinus className="text-lg" />
//                   ) : (
//                     <FiPlus className="text-lg" />
//                   )}
//                 </button>

//                 <AnimatePresence initial={false}>
//                   {openIndex === index && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="overflow-hidden mt-3"
//                     >
//                       <p className="text-sm sm:text-base leading-relaxed">
//                         {item.answer}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FaqSection;


"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaqItemProps } from "../../../../@types";


const faqData = [
  {
    question: "How can I become a member?",
    answer:
      "It was born from the challenges faced by individuals living with sickle cell in Nigeria—limited healthcare access, low awareness, and stigma. We aim to bridge these gaps.",
  },
  {
    question: "What is your mission?",
    answer:
      "To empower those impacted by sickle cell through support, education, and advocacy. We aim to remove barriers and enable fulfilling lives.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "You can support through donations, volunteering, partnerships, or spreading awareness about our cause.",
  },
  {
    question: "Do you collaborate with healthcare professionals?",
    answer:
      "Yes, we work closely with healthcare providers, community leaders, and government bodies to create sustainable programs.",
  },
  {
    question: "Where are your services available?",
    answer:
      "Currently, we operate in Nigeria with plans to expand across regions most affected by sickle cell disease.",
  },
  {
    question: "Is this only for people with sickle cell?",
    answer:
      "No. We support individuals, families, caregivers, and advocates — anyone touched by sickle cell is welcome.",
  },
];


const FaqItem: React.FC<FaqItemProps> = ({
  item,
  index,
  openIndex,
  toggleFAQ,
}) => (
  <div className="bg-[#FFFFFF] text-gray-800 rounded-lg p-6">
    <button
      className="flex justify-between items-center w-full text-left"
      onClick={() => toggleFAQ(index)}
    >
      <span className="text-sm sm:text-base font-semibold">
        {item.question}
      </span>
      {openIndex === index ? (
        <FiMinus className="text-lg" />
      ) : (
        <FiPlus className="text-lg" />
      )}
    </button>
    <AnimatePresence initial={false}>
      {openIndex === index && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden mt-3"
        >
          <p className="text-sm sm:text-base leading-relaxed">{item.answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq-section">
      <div className="w-full py-16 overflow-hidden relative bg-black">
        <div className="max-w-[1440px] mx-auto lg:px-8 sm:px-[5%] px-[4%]">
          <div className="flex flex-col items-center justify-center text-[#FFF]">
            {/* Heading */}
            <div className="flex flex-col items-center text-center">
              <h4 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                FAQ
              </h4>
              <span className="text-sm sm:text-base md:text-lg lg:text-xl leading-snug tracking-normal max-w-3xl mt-3">
                Answers to the frequently asked questions.
              </span>
            </div>

            {/* FAQ Items */}
            <div className="mt-12 flex flex-col md:flex-row gap-6 w-full">
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-6">
                {faqData.slice(0, 3).map((item, index) => (
                  <FaqItem
                    key={index}
                    item={item}
                    index={index}
                    openIndex={openIndex}
                    toggleFAQ={toggleFAQ}
                  />
                ))}
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col gap-6">
                {faqData.slice(3, 6).map((item, index) => (
                  <FaqItem
                    key={index + 3}
                    item={item}
                    index={index + 3}
                    openIndex={openIndex}
                    toggleFAQ={toggleFAQ}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
