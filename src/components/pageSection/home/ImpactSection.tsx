"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

// Import your images
import ImAwareness from "@/../public/assets/ImAwareness.png";
import ImSupport from "@/../public/assets/ImSupport.png";
import ImAcessCare from "@/../public/assets/ImAccessCare.png";
import { PiMouseSimpleLight } from "react-icons/pi";

// Impact items
const impactItems = [
  {
    title: "Awareness & Education",
    description:
      "Our Awareness & Education program aims to dispel myths and provide accurate information to communities across the nation. We conduct community outreach programs in both urban and rural areas, leveraging local languages and culturally sensitive approaches to maximize impact.",
    image: ImAwareness,
  },
  {
    title: "Support & Advocacy",
    description:
      "Our Support & Advocacy program provides a lifeline for individuals and families, offering counseling, peer support groups, and practical assistance. We understand the unique struggles faced by families in Nigeria, including the high cost of treatment and the lack of access to specialized care.",
    image: ImSupport,
  },
  {
    title: "Access to Care",
    description:
      "Our Access to Care program focuses on bridging the gap between patients and healthcare providers, particularly in underserved communities. We facilitate access to diagnostic testing, medication, and specialized treatment, ensuring that individuals receive timely and appropriate care.",
    image: ImAcessCare,
  },
];

function ImpactSection() {
  const router = useRouter();
  return (
    <div id="impact-section" className="w-full py-16 overflow-hidden relative">
      <div className="flex flex-col sm:px-[5%] px-[4%]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center text-[#000] py-2"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
            Our Impact
          </h3>
          <p className="text-sm font-light leading-[175%] mt-2">
            Key Programs and Initiatives
          </p>
        </motion.div>

        {/* Impact Items */}
        <div className="flex flex-col gap-20 mt-12">
          {impactItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center gap-8"
            >
              {idx % 2 === 0 ? (
                <>
                  {/* Text First */}
                  <div className="w-full sm:w-1/2 bg-[#EDF7D1] rounded-lg p-6 text-[#000]">
                    <h3 className="text-lg md:text-2xl font-semibold leading-[140%] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium leading-[175%] mb-6">
                      {item.description}
                    </p>
                    <button
                      onClick={() => router.push("#")}
                      className="flex items-center justify-center w-fit bg-[#2F7889] text-white rounded-full hover:bg-[#1e515e] text-sm font-medium px-6 py-3"
                    >
                      Learn More
                      <IoIosArrowRoundForward className="ml-2 w-5 h-5" />
                    </button>
                  </div>
                  {/* Image Second */}
                  <div className="w-full sm:w-1/2 flex justify-center">
                    <div className="w-[70%] sm:w-[80%] md:w-[70%]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        layout="responsive"
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Image First */}
                  <div className="w-full sm:w-1/2 flex justify-center">
                    <div className="w-[70%] sm:w-[80%] md:w-[70%]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        layout="responsive"
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                  {/* Text Second */}
                  <div className="w-full sm:w-1/2 bg-[#EDF7D1] rounded-lg p-6 text-[#000]">
                    <h3 className="text-lg md:text-2xl font-semibold leading-[140%] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium leading-[175%] mb-6">
                      {item.description}
                    </p>
                    <button
                      onClick={() => router.push("#")}
                      className="flex items-center justify-center w-fit bg-[#2F7889] text-white rounded-full hover:bg-[#1e515e] text-sm font-medium px-6 py-3"
                    >
                      Learn More
                      <IoIosArrowRoundForward className="ml-2 w-5 h-5" />
                    </button>
                    {/* <div className="absolute bottom-6 left-0 right-0 flex justify-center pt-4">
                    <button
                      onClick={() => {
                        const section =
                          document.getElementById("@-section");
                        section?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="animate-bounce"
                    >
                      <PiMouseSimpleLight className="w-8 h-8 sm:w-2 text-neutral-500" />
                    </button>
                  </div> */}
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center pt-4">
                      <motion.button
                        onClick={() => {
                          const section =
                            document.getElementById("impact-section"); // <-- make sure your ID is correct
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
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImpactSection;
