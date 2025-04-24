// "use client";
// import BackgroundImages from "@/components/BackgroundImages";
// import MaxWidthWrapper from "@/components/MaxWidthWrapper";
// // import Button from "@/components/headless-ui/Button";
// // import Image from "next/image";
// // import { useRouter } from "next/navigation";
// import router from "next/router";
// import React, { FC } from "react";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { PiMouseSimpleLight } from "react-icons/pi";
// // import { UserContext } from "@/context/UserContext";

// type SectionProps = React.HTMLProps<HTMLDivElement>;

// const HeroSection: FC<SectionProps> = ({ ...props }) => {
//   return (
//     <div
//       {...props}
//       className="w-full bg-neutral-50  relative pb-5 sm:px-[5%] px-[4%]"
//     >
//       {/*Content info*/}
//       <MaxWidthWrapper className="w-[95%] xl:w-[80%] h-full relative gap-10  mt-24">
//         <div className="w-full lg:w-[90%] xl:w-[70%] relative mx-auto text-center flex items-center justify-center pt-[100px] z-20 flex-col gap-5 h-auto">
//           <h2 className="text-3xl sm:text-[45px] md:text-[50px] lg:text-[60px] xl:text-[80px] font-medium">
//             Empowering Lives & Transforming Futures by fighting{" "}
//             <span className="bg-[#2F7889] rounded-lg px-1 text-white">
//               Sickle Cell
//             </span>
//           </h2>
//           <p className=" text-sm md:text-base xl:text-lg w-[80%] md:w-[65%] lg:w-[60%] text-neutral-500 ">
//             Rock Bottom Sickle Cell Initiative provides support, education, and
//             advocacy for individuals and families affected by sickle cell
//             disease.
//           </p>
//           <div className="flex flex-col sm:flex-row w-full mx-auto gap-3 items-center justify-center md:gap-5  md:w-[50%]">
//             <>
//               <button
//                 className=" items-center justify-center px-6 py-3 rounded-full text-sm text-white bg-[#2F7889]"
//                 onClick={() => {
//                   router.push("/donate");
//                 }}
//               >
//                 Donate
//               </button>
//               <button
//                 className=" flex items-center justify-center px-6 py-3 text-white"
//                 onClick={() => router.push("/auth/signin")}
//               >
//                 <span className=" text-[#000] text-sm flex items-center">
//                   Learn More <IoIosArrowRoundForward className=" mr-2" />
//                 </span>
//               </button>
//             </>
//           </div>
//               <PiMouseSimpleLight className=" w-8 h-8" />
//         </div>
//       </MaxWidthWrapper>

//       {/*Meal list*/}

//       <div className="absolute top-0 left-0 w-full h-full">
//         {/* <Image
//           src="/assets/radialbox.svg"
//           layout="fill"
//           alt="bg"
//           objectFit="cover"
//         /> */}
//         <BackgroundImages />
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// "use client";

// import { useRouter } from "next/navigation";
// import React from "react";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { PiMouseSimpleLight } from "react-icons/pi";

// import BackgroundImages from "@/components/BackgroundImages";
// import MaxWidthWrapper from "@/components/MaxWidthWrapper";

// const HeroSection: React.FC = () => {
//   const router = useRouter();

//   return (
//     <div className="w-full bg-neutral-50 relative overflow-hidden pb-16 sm:px-6 px-4">
//       {/* Background Images */}
//       <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
//         <BackgroundImages />
//       </div>

//       {/* Content */}
//       <MaxWidthWrapper className="relative z-10 flex flex-col items-center justify-center text-center gap-6 pt-32">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight tracking-tight text-gray-900 max-w-5xl">
//           Empowering Lives & Transforming Futures by fighting{" "}
//           <span className="bg-[#2F7889] rounded-lg px-2 text-white">
//             Sickle Cell
//           </span>
//         </h2>

//         <p className="text-base md:text-lg xl:text-xl text-neutral-600 max-w-2xl mt-2">
//           Rock Bottom Sickle Cell Initiative provides support, education, and
//           advocacy for individuals and families affected by sickle cell disease.
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
//           <button
//             onClick={() => router.push("/donate")}
//             className="bg-[#2F7889] hover:bg-[#24606f] text-white text-sm font-medium px-6 py-3 rounded-full transition-all duration-300"
//           >
//             Donate
//           </button>
//           <button
//             onClick={() => router.push("/auth/signin")}
//             className="flex items-center text-[#2F7889] hover:text-[#1e515e] text-sm font-medium"
//           >
//             Learn More <IoIosArrowRoundForward className="ml-1 w-5 h-5" />
//           </button>
//         </div>

//         {/* Mouse Icon */}
//         <div className="mt-10">
//           <PiMouseSimpleLight className="w-8 h-8 text-neutral-500" />
//         </div>
//       </MaxWidthWrapper>
//     </div>
//   );
// };

// export default HeroSection;

// "use client";

// import { useRouter } from "next/navigation";
// import React from "react";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { PiMouseSimpleLight } from "react-icons/pi";

// import BackgroundImages from "@/components/BackgroundImages";
// import MaxWidthWrapper from "@/components/MaxWidthWrapper";

// const HeroSection: React.FC = () => {
//   const router = useRouter();

//   return (
//     <div className="w-full bg-neutral-50 relative overflow-hidden pt-[120px] pb-16 sm:px-6 px-4 mt-4">
//       {/* Background Images */}
//       <div className="absolute top-0 left-0 w-full h-full my-12 z-0 pointer-events-none">
//         <BackgroundImages />
//       </div>

//       {/* Content */}
//       <MaxWidthWrapper className="relative z-10 flex flex-col items-center justify-center text-center gap-6">
//         <h2 className="text-lg sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-gray-900 max-w-4xl break-words">
//           Empowering Lives & Transforming Futures by fighting{" "}
//           <span className="bg-[#2F7889] rounded-lg px-2 text-white whitespace-nowrap">
//             Sickle Cell
//           </span>
//         </h2>

//         <p className="text-sm sm:text-base md:text-lg xl:text-xl text-neutral-600 max-w-2xl mt-2">
//           Rock Bottom Sickle Cell Initiative provides support, education, and
//           advocacy for individuals and families affected by sickle cell disease.
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex flex-row flex-wrap items-center justify-center gap-3 mt-6 w-full max-w-md">
//           <button
//             onClick={() => router.push("/donate")}
//             className="bg-[#2F7889] hover:bg-[#24606f] text-white text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 w-[130px] text-center"
//           >
//             Donate
//           </button>
//           <button
//             onClick={() => router.push("/auth/signin")}
//             className="flex items-center justify-center text-[#000] hover:text-[#1e515e] text-sm font-medium w-[130px]"
//           >
//             Learn More <IoIosArrowRoundForward className="ml-1 w-5 h-5" />
//           </button>
//         </div>

//         {/* Mouse Icon */}
//         <div className="mt-10 justify-center items-center flex">
//           <PiMouseSimpleLight className="w-8 h-8 text-neutral-500" />
//         </div>
//       </MaxWidthWrapper>
//     </div>
//   );
// };

// export default HeroSection;

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
    <div className="relative w-full  overflow-hidden pt-[120px] min-h-screen sm:px-6 px-4">
      {/* Background Images */}
      <div className="absolute inset-0 -z-10">
        <BackgroundImages />
        <div className="absolute inset-0 bg-opacity-60"></div>{" "}
        {/* Soft overlay */}
      </div>

      {/* Content */}
      <MaxWidthWrapper className="relative z-10 flex flex-col items-center justify-center text-center gap-6">
        <h2 className="text-lg sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-gray-900 max-w-4xl break-words">
          Empowering Lives & Transforming Futures by fighting{" "}
          <span className="bg-[#2F7889] rounded-lg px-2 text-white whitespace-nowrap">
            Sickle Cell
          </span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg xl:text-xl text-neutral-600 max-w-2xl mt-2">
          Rock Bottom Sickle Cell Initiative provides support, education, and
          advocacy for individuals and families affected by sickle cell disease.
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-3 mt-6 w-full max-w-md">
          <button
            onClick={() => router.push("/donate")}
            className="bg-[#2F7889] hover:bg-[#24606f] text-white text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 w-[130px] text-center"
          >
            Donate
          </button>
          <button
            onClick={() => router.push("/auth/signin")}
            className="flex items-center justify-center text-[#000] hover:text-[#1e515e] text-sm font-medium w-[130px]"
          >
            Learn More <IoIosArrowRoundForward className="ml-1 w-5 h-5" />
          </button>
        </div>
      </MaxWidthWrapper>

      {/* Mouse Icon placed lower */}
      {/* <div className="absolute bottom-5 left-0 right-0 flex justify-center">
        <PiMouseSimpleLight className="w-8 h-8 text-neutral-500" />
      </div> */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center">
        <button
          onClick={() => {
            const section = document.getElementById("next-section");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="animate-bounce"
        >
          <PiMouseSimpleLight className="w-8 h-8 text-neutral-500" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
