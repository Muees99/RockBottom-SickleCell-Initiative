import React from "react";
import { PiMouseSimpleLight } from "react-icons/pi";
import { motion } from "framer-motion";

function MissionSection() {
  return (
    <div id="mission-section">
      <section className="w-full py-16 overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto lg:px-8 sm:px-[5%] px-[4%]">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-lg border bg-[#2F7889] p-6 flex flex-col items-center text-white text-center"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Our Mission
            </h2>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl leading-snug tracking-normal max-w-3xl mt-3">
              To Create a Brighter Future for Those Living with Sickle Cell
            </span>
          </motion.div>

          {/* Content Section */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Block */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#EDF7D1] rounded-lg p-6"
            >
              <p className="text-sm sm:text-base font-medium leading-relaxed text-gray-800">
                Rock Bottom Sickle Cell Initiative was born from a deep
                understanding of the challenges faced by individuals living with
                sickle cell disease in Nigeria. We recognize the unique
                socio-economic realities that often exacerbate the condition,
                including limited access to healthcare, inadequate awareness,
                and the stigma that surrounds the disease. Our organization was
                founded to bridge these gaps, providing a lifeline of support
                and empowerment to those affected. We are rooted in the belief
                that every Nigerian, regardless of their health status, deserves
                the opportunity to live a fulfilling and productive life.
              </p>
            </motion.div>

            {/* Second Block */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex bg-[#EDF7D1] rounded-lg p-6"
            >
              <p className="text-sm sm:text-base font-medium leading-relaxed text-gray-800">
                Our mission is to empower individuals and families impacted by
                sickle cell disease through comprehensive support, education,
                and advocacy. We strive to create a society where sickle cell
                disease is not a barrier to achieving one&apos;s full potential.
                We achieve this by collaborating with healthcare professionals,
                community leaders, and government agencies to implement
                sustainable programs that address the specific needs of our
                target population. Our approach is holistic, encompassing
                medical assistance, emotional support, and economic empowerment.
              </p>
            </motion.div>
          </div>

          {/* Scroll Down Icon */}
          {/* Mouse Icon placed lower */}
          <div className="relative w-full flex justify-center mt-10">
            <motion.button
              onClick={() => {
                const section = document.getElementById("impact-section"); // <-- make sure your ID is correct
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
      </section>
    </div>
  );
}

export default MissionSection;
