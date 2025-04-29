"use client";
import { motion } from "framer-motion";
import React from "react";
import { MdOutlineUnsubscribe } from "react-icons/md";
import { PiMouseSimpleLight } from "react-icons/pi";

function InviteSection() {
  return (
    <div id="invite-section">
      <div className="w-full py-16 overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto lg:px-8 sm:px-[5%] px-[4%]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Text Section */}
            <div className="flex flex-col leading-relaxed text-gray-800">
              <h6 className="text-sm sm:text-base font-medium">
                Join Our Community 👫
              </h6>
              <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Let&apos;s End Sickle Cell Disease Together
              </h4>
            </div>

            {/* Right Form Section */}
            <div className="flex flex-col justify-center items-center w-full">
              <form className="flex flex-col w-full max-w-md gap-4">
                {/* Email Input */}
                <input
                  className="w-full h-12 border rounded-md px-4 text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2F7889]"
                  type="email"
                  placeholder="Your Email"
                />

                {/* Name Input */}
                <input
                  className="w-full h-12 border rounded-md px-4 text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2F7889]"
                  type="text"
                  placeholder="Your Name"
                />

                {/* Send Invite Button */}
                <button
                  type="submit"
                  className="flex items-center justify-center bg-[#2F7889] hover:bg-[#47A8BE] focus:ring-2 focus:ring-[#60C1D7] text-white text-sm sm:text-base font-medium rounded-md h-12 px-6 whitespace-nowrap transition-all"
                >
                  <MdOutlineUnsubscribe className="text-lg mr-2" />
                  <span>Send Invite</span>
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Mouse Icon placed lower */}
        {/* <div className="absolute bottom-6 left-0 right-0 flex justify-center pt-4"> */}
        <div className="relative w-full flex justify-center mt-10">
          <motion.button
            onClick={() => {
              const section = document.getElementById("faq-section"); // <-- make sure your ID is correct
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
            <PiMouseSimpleLight className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-600"/>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default InviteSection;
