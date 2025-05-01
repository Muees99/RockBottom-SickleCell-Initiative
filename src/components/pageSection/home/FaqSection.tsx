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
