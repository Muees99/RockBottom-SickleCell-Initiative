// import React from "react";
// import { PiMouseSimpleLight } from "react-icons/pi";
// // import Image from "next/image";

// function MissionSection() {
//   return (
//     // <div>MissionSection</div>
//     <div id="mission-section">
//       <section className="w-full py-10 overflow-hidden relative">
//         <div className="max-w-[1440px]  mx-auto sm:px-[5%] px-[4%]">
//           <div>
//             <div className=" grid-cols-1 sm:grid-cols-2 gap-6 items-center justify-center">
//               {/* Left side with images */}

//               {/* Wrapper for all 3 sections */}
//               <div className="relative rounded-lg overflow-hidden">
//                 {/* Main rectangular header */}
//                 <div className="w-full mb-4">
//                   <div className="rounded-lg border bg-[#2F7889] p-6 flex  flex-col justify-center items-center text-[#FFF]">
//                     <h2 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
//                       Our Mission
//                     </h2>
//                     <span className="text-sm sm:text-xs text-center md:text-lg xl:text-xl leading-snug tracking-normal max-w-2xl mt-2">
//                       To Create a Brighter Future for Those Living with Sickle
//                       Cell
//                     </span>
//                   </div>
//                 </div>

//                 {/* Two smaller images side by side beneath the main header */}
//                 <div className="flex space-x-4 my-4 sm:mt-0">
//                   <div className="w-[50%] h-fit">
//                     <div className="flex flex-row border border-none  bg-[#EDF7D1] rounded-lg sm:px-[5%] px-[4%] items-center justify-center ">
//                       <p className="text-sm font-medium  leading-[175%] w-full pb-2">
//                         Rock Bottom Sickle Cell Initiative was born from a deep
//                         understanding of the challenges faced by individuals
//                         living with sickle cell disease in Nigeria. We recognize
//                         the unique socio-economic realities that often
//                         exacerbate the condition, including limited access to
//                         healthcare, inadequate awareness, and the stigma that
//                         surrounds the disease. Our organization was founded to
//                         bridge these gaps, providing a lifeline of support and
//                         empowerment to those affected. We are rooted in the
//                         belief that every Nigerian, regardless of their health
//                         status, deserves the opportunity to live a fulfilling
//                         and productive life.
//                       </p>
//                     </div>
//                   </div>
//                   <div className="w-[50%] h-fit">
//                     <div className="flex flex-col border border-none  bg-[#EDF7D1] rounded-lg sm:px-[5%] px-[4%]">
//                       <p className="text-sm font-medium  leading-[175%] w-full pb-2">
//                         Our mission is to empower individuals and families
//                         impacted by sickle cell disease through comprehensive
//                         support, education, and advocacy. We strive to create a
//                         society where sickle cell disease is not a barrier to
//                         achieving one&apos;s full potential. We achieve this by
//                         collaborating with healthcare professionals, community
//                         leaders, and government agencies to implement
//                         sustainable programs that address the specific needs of
//                         our target population. Our approach is holistic,
//                         encompassing medical assistance, emotional support, and
//                         economic empowerment.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute bottom-0 left-0 right-0 flex justify-center">
//                 <button
//                   onClick={() => {
//                     const section = document.getElementById("impact-section");
//                     section?.scrollIntoView({ behavior: "smooth" });
//                   }}
//                   className="animate-bounce"
//                 >
//                   <PiMouseSimpleLight className="w-8 h-8 text-neutral-500" />
//                 </button>
//               </div>
//       </section>
//     </div>
//   );
// }

// export default MissionSection;

import React from "react";
import { PiMouseSimpleLight } from "react-icons/pi";

function MissionSection() {
  return (
    <div id="mission-section">
      <section className="w-full py-16 overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto lg:px-8 sm:px-[5%] px-[4%]">
          {/* Header Section */}
          <div className="rounded-lg border bg-[#2F7889] p-6 flex flex-col items-center text-white text-center">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Our Mission
            </h2>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl leading-snug tracking-normal max-w-3xl mt-3">
              To Create a Brighter Future for Those Living with Sickle Cell
            </span>
          </div>

          {/* Content Section */}
          {/* Two smaller sections side by side beneath the main header */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#EDF7D1] rounded-lg p-6">
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
            </div>

            <div className=" flex bg-[#EDF7D1] rounded-lg p-6">
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
            </div>
          </div>

          {/* Scroll Down Icon */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center">
            <button
              onClick={() => {
                const section = document.getElementById("impact-section");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="animate-bounce"
            >
              <PiMouseSimpleLight className="w-8 h-8 text-neutral-500" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MissionSection;

