import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import GreenIcon from "@/../public/assets/GreenIcon.png";
import ExclamationOpen from "@/../public/assets/ExclamationOpen.png";
import ExclamationClose from "@/../public/assets/ExclamationClose.png";
import Image from "next/image";
import User1 from "@/../public/assets/User1.png";
import User2 from "@/../public/assets/User2.png";
import User3 from "@/../public/assets/User3.png";
import User4 from "@/../public/assets/User4.png";
import User5 from "@/../public/assets/User2.png";
import User6 from "@/../public/assets/User3.png";
import { PiMouseSimpleLight } from "react-icons/pi";

function TestimonialSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  const testimonials = [
    {
      text: "The community is amazing! Always ready to help.",
      user: "Andre Andre",
      role: "Researcher",
      img: User1,
      bg: "bg-[#60C1D7]",
    },
    {
      text: "Joining was the best decision. I feel so included.",
      user: "Sarah Connor",
      role: "Designer",
      img: User2,
      bg: "bg-[#47A8BE]",
    },
    {
      text: "The support here is phenomenal. Highly recommend!",
      user: "Michael Stone",
      role: "Developer",
      img: User3,
      bg: "bg-[#2F7889]",
    },
    {
      text: "I've grown so much with the help of this group.",
      user: "Laura Swift",
      role: "Content Creator",
      img: User4,
      bg: "bg-[#60C1D7]",
    },
    {
      text: "A wonderful environment for growth and learning.",
      user: "Paul Adams",
      role: "Engineer",
      img: User5,
      bg: "bg-[#47A8BE]",
    },
    {
      text: "This community made me believe in myself again.",
      user: "Diana Prince",
      role: "Product Manager",
      img: User6,
      bg: "bg-[#60C1D7]",
    },
  ];

  return (
    <div
      id="testimonial-section"
      className="relative bg-black pt-[120px] pb-20 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 text-white">
        {/* Header */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center space-x-2 mb-6"
        >
          <Image
            src={GreenIcon}
            alt="Green Dot"
            className="w-2 h-2 rounded-full object-cover"
          />
          <motion.h5
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg font-semibold"
          >
            Testimonials
          </motion.h5>
        </motion.div>

        {/* Line under heading */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: " 80rem " }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="h-0.5 bg-[#808080] rounded-full mb-8"
        />

        <h4 className="text-lg sm:text-xl lg:text-2xl leading-snug tracking-normal mb-12 max-w-2xl">
          Inspiring Journeys and Stories of Hope
        </h4>

        {/* Scrollable Testimonials */}
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto no-scrollbar space-x-6 pb-10"
          >
            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className={`min-w-[280px] max-w-[280px] flex-shrink-0 ${item.bg} rounded-lg p-6 shadow-md hover:scale-105 transition-transform duration-300 flex flex-col justify-between`}
              >
                {/* Text + Exclamation Icons */}
                <div className="flex flex-col items-start gap-2">
                  <Image
                    src={ExclamationOpen}
                    alt="Exclamation Top"
                    className="w-5 h-5"
                  />
                  <p className="text-sm font-medium">{item.text}</p>
                  <Image
                    src={ExclamationClose}
                    alt="Exclamation Bottom"
                    className="w-5 h-5 self-end"
                  />
                </div>

                {/* User Info - side by side */}
                <div className="flex items-center gap-3 pt-4">
                  <Image
                    src={item.img}
                    alt={item.user}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <h5 className="text-base font-semibold">{item.user}</h5>
                    <span className="text-xs">{item.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Progress Bar */}
          <div className="relative w-full h-1 bg-[#808080] rounded-full mt-2">
            <motion.div
              style={{ width: `${scrollProgress}%` }}
              className="absolute top-0 left-0 h-1 bg-white rounded-full transition-all duration-300"
            />
          </div>
        </div>
        {/* Mouse Icon placed lower */}
        <div className="relative w-full flex justify-center mt-10">
          <motion.button
            onClick={() => {
              const section = document.getElementById("invite-section"); // <-- make sure your ID is correct
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/80 shadow-md backdrop-blur hover:bg-[#cdd8ae] transition-all duration-300"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [1, 0.8, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <PiMouseSimpleLight className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-600" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
