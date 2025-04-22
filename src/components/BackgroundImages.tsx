// components/BackgroundImages.tsx
"use client";
import React from "react";
import Image from "next/image";
import TopLeftImg from "@/public/assets/Hero1.png";
import TopRightImg from "@/public/assets/Hero2.png";
import BottomLeftImg from "@/public/assets/BaldGirl3.png";
import BottomRightImg from "@/public/assets/StaffJacket4.png";

const BackgroundImages: React.FC = () => {
  return (
    <>
      {/* Top background images */}
      <Image
        src={TopLeftImg}
        alt="Top Left"
        className="absolute top-0 left-0 z-0 pointer-events-none"
      />
      <Image
        src={TopRightImg}
        alt="Top Right"
        className="absolute top-0 right-0 z-0 pointer-events-none"
      />

      {/* Bottom background images */}
      <Image
        src={BottomLeftImg}
        alt="Bottom Left"
        className="absolute bottom-0 left-0 z-0 pointer-events-none"
      />
      <Image
        src={BottomRightImg}
        alt="Bottom Right"
        className="absolute bottom-0 right-0 z-0 pointer-events-none"
      />
    </>
  );
};

export default BackgroundImages;
