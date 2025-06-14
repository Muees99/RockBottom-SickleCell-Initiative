"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PiMouseSimpleLight } from "react-icons/pi";

import BackgroundImages from "@/components/BackgroundImages";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const HeroSection: React.FC = () => {
  const router = useRouter();

  return (
    <div className="relative w-full overflow-hidden pt-[100px] sm:pt-[160px] lg:pt-[180px] min-h-screen">
      <div className="max-w-[1440px] mx-auto lg:px-8 sm:px-[5%] px-[4%]">
        {/* Background Images */}
        <div className="absolute inset-0 -z-10">
          <BackgroundImages />
          <div className="absolute inset-0 bg-white/80 sm:bg-white/60 -z-10"></div>{" "}
          {/* Soft overlay */}
        </div>

        {/* Content */}
        <MaxWidthWrapper className="relative z-10 flex flex-col items-center justify-center text-center gap-6 mt-1 lg:mt-10">
          <h2 className="text-lg sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-gray-900 max-w-4xl break-words">
            Empowering Lives & Transforming Futures by fighting{" "}
            <span className="bg-[#2F7889] rounded-lg px-2 text-white whitespace-nowrap">
              Sickle Cell
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg xl:text-xl text-neutral-600 max-w-2xl mt-2">
            Rock Bottom Sickle Cell Initiative provides support, education, and
            advocacy for individuals and families affected by sickle cell
            disease.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-row flex-wrap items-center justify-center gap-3 mt-6 w-full max-w-md">
            <button
              className="bg-[#2F7889] hover:bg-[#24606f] text-white text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 w-[130px] text-center"
              onClick={() => router.push("/donate")}
            >
              Donate
            </button>
            <button
              onClick={() => router.push("/")}
              className="flex items-center justify-center text-[#000] hover:text-[#1e515e] text-sm font-medium w-[130px]"
            >
              Learn More <IoIosArrowRoundForward className="ml-1 w-5 h-5" />
            </button>
          </div>
        </MaxWidthWrapper>

        {/* Mouse Icon placed lower */}
        <div className="absolute bottom-5 left-0 right-0  w-full flex justify-center mt-10">
          <button
            onClick={() => {
              const section = document.getElementById("mission-section");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="animate-bounce"
          >
            <PiMouseSimpleLight className="w-8 h-8 text-neutral-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
