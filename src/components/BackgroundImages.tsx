// // components/BackgroundImages.tsx
// "use client";
// import React from "react";
// import Image from "next/image";
// import TopLeftImg from "@/../public/assets/Hero1.png";
// import TopRightImg from "@/../public/assets/Hero2.png";
// import BottomLeftImg from "@/../public/assets/BaldGirl3.png";
// import BottomRightImg from "@/../public/assets/StaffJacket4.png";

// const BackgroundImages: React.FC = () => {
//   return (
//     <>
//       {/* Top background images */}
//       <Image
//         src={TopLeftImg}
//         alt="Top Left"
//         className="absolute top-10 left-0 z-0 pointer-events-none"
//       />
//       <Image
//         src={TopRightImg}
//         alt="Top Right"
//         className="absolute top-8 right-0 z-0 pointer-events-none"
//       />

//       {/* Bottom background images */}
//       <Image
//         src={BottomLeftImg}
//         alt="Bottom Left"
//         className="absolute bottom-2 left-8  sm:px-[5%] px-[4%] z-0 pointer-events-none"
//       />
//       <Image
//         src={BottomRightImg}
//         alt="Bottom Right"
//         className="absolute bottom-2 right-8 z-0 pointer-events-none"
//       />
//     </>
//   );
// };

// export default BackgroundImages;

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
      <div className="sm:px-[5%] px-[4%]">
        {/* Top background images */}
        <Image
          src={TopLeftImg}
          alt="Top Left"
          className="absolute top-44 left-0 border rounded-b-md z-0 pointer-events-none w-[30vw] max-w-[200px] sm:w-[20vw] md:w-[15vw]"
          priority
        />
        <Image
          src={TopRightImg}
          alt="Top Right"
          className="absolute  top-32 right-0 border rounded-b-md z-0 pointer-events-none w-[30vw] max-w-[200px] sm:w-[20vw] md:w-[15vw]"
          priority
        />

        {/* Bottom background images */}
        <Image
          src={BottomLeftImg}
          alt="Bottom Left"
          className="absolute bottom-2  border rounded-b-md left-4 z-0 pointer-events-none w-[35vw] max-w-[250px] sm:w-[25vw] md:w-[20vw]"
          priority
        />
        <Image
          src={BottomRightImg}
          alt="Bottom Right"
          className="absolute bottom-2 border rounded-b-md right-4 z-0 pointer-events-none w-[35vw] max-w-[250px] sm:w-[25vw] md:w-[20vw]"
          priority
        />
      </div>
    </>
  );
};

export default BackgroundImages;
