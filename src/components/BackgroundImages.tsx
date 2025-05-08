"use client";
import React from "react";
import Image from "next/image";
import TopLeftImg from "@/../public/assets/Hero1.png";
import TopRightImg from "@/../public/assets/Hero2.png";
import BottomLeftImg from "@/../public/assets/BaldGirl3.png";
import BottomRightImg from "@/../public/assets/StaffJacket4.png";

const BackgroundImages: React.FC = () => {
  return (
    <>
      {/* Top Left Image */}
      <div className="absolute top-44 left-0 z-0 pointer-events-none w-[30vw] max-w-[200px] sm:w-[20vw] md:w-[15vw] opacity-30 sm:opacity-60">
        <Image
          src={TopLeftImg}
          alt="Top Left"
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Top Right Image - hidden on very small screens */}
      <div className="hidden sm:block absolute top-32 right-0 z-0 pointer-events-none w-[30vw] max-w-[200px] sm:w-[20vw] md:w-[15vw] opacity-40 sm:opacity-60">
        <Image
          src={TopRightImg}
          alt="Top Right"
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Bottom Left Image */}
      <div className="absolute bottom-2 left-4 z-0 pointer-events-none w-[35vw] max-w-[250px] sm:w-[25vw] md:w-[20vw] opacity-30 sm:opacity-60">
        <Image
          src={BottomLeftImg}
          alt="Bottom Left"
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Bottom Right Image - hidden on very small screens */}
      <div className="hidden sm:block absolute bottom-2 right-4 z-0 pointer-events-none w-[35vw] max-w-[250px] sm:w-[25vw] md:w-[20vw] opacity-30 sm:opacity-60">
        <Image
          src={BottomRightImg}
          alt="Bottom Right"
          className="w-full h-auto"
          priority
        />
      </div>
    </>
  );
};

export default BackgroundImages;
