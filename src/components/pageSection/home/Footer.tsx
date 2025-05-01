// import React from "react";
// import cn from "@/app/utils/twcx";
// import { FOOTER_LINKS } from "../../../../libs/constants";
// import { FaSquareFacebook } from "react-icons/fa6";
// import { FaInstagram, FaLinkedin } from "react-icons/fa";
// import Link from "next/link";
// import Image from "next/image";

// import RockBottomLogo from "@/../public/assets/RockBottomLogo.png";

// const Footer = () => {
//   const currentDate = new Date();
//   const currentYear = currentDate.getFullYear();

//   const sections = [
//     { title: "Company", links: FOOTER_LINKS.company },
//     { title: "Services", links: FOOTER_LINKS.services },
//     { title: "Resources", links: FOOTER_LINKS.resources },
//   ];

//   return (
//     <footer className="w-full bg-[#FFF] pt-5 lg:pt-10">
//       <div className="max-w-[1440px] mx-auto px-[4%] sm:px-[5%]">
//         <div className="flex flex-col justify-between pb-8">
//           <div className="flex flex-col lg:flex-row lg:justify-between gap-y-5 items-center lg:items-start">
//             <div className="flex flex-col items-center lg:items-start gap-y-4 lg:mr-8 lg:w-1/4">
//               <Image
//                 src={RockBottomLogo}
//                 alt="Treasure Health Logo"
//                 width={32}
//                 height={32}
//                 className="w-[120px] lg:w-[155px] bg-[#2F7889]"
//               />
//               <h2 className="text-[#000] text-[14px] leading-[175%] text-center lg:text-left max-w-[270px]">
//                 We treasure your wellbeing
//               </h2>
//             </div>

//             <div className="flex flex-wrap gap-8 lg:gap-16 w-full lg:w-3/4  lg:justify-end lg:flex-row items-start text-white">
//               {sections.map((section) => (
//                 <ul
//                   key={section.title}
//                   className="flex flex-col gap-y-3 text-lg sm:text-base min-w-[150px]"
//                 >
//                   <span className="font-semibold text-[#000]">
//                     {section.title}
//                   </span>
//                   {section.links.map(
//                     (link: { id: number; link: string; label: string }) => (
//                       <Link
//                         href={link.link}
//                         key={link.id}
//                         className={cn(
//                           "capitalize hover:font-medium hover:text-primary transition-colors duration-300  text-base text-[#42454A]"
//                         )}
//                       >
//                         {link.label}
//                       </Link>
//                     )
//                   )}
//                 </ul>
//               ))}

//               <div className="flex flex-col gap-4 p-4">
//                 <div className="flex  gap-4 bg-black p-6 rounded-full">
//                   <Link
//                     href="https://www.facebook.com/profile.php?id=61568320691704&mibextid=LQQJ4d"
//                     target="_blank"
//                     className="flex items-center space-x-3"
//                   >
//                     <div className="p-2 rounded-full bg-[#2F7889]">
//                       <FaSquareFacebook className="text-white text-xl" />
//                     </div>
//                     <span className="text-white text-sm sm:text-base font-medium">
//                       Follow us on Facebook
//                     </span>
//                   </Link>
//                 </div>
//                 <div className="flex  gap-4 bg-black p-6 rounded-full">
//                   <Link
//                     href="https://www.instagram.com/treasurehealth365/"
//                     target="_blank"
//                     className="flex items-center space-x-3"
//                   >
//                     <div className="p-2 rounded-full bg-[#2F7889]">
//                       <FaInstagram className="text-white text-xl" />
//                     </div>
//                     <span className="text-white text-sm sm:text-base font-medium">
//                       Follow us on Instagram
//                     </span>
//                   </Link>
//                 </div>
//                 <div className="flex  gap-4 bg-black p-6 rounded-full">
//                   <Link
//                     href="https://www.linkedin.com/in/treasure-health-services-291863337/"
//                     target="_blank"
//                     className="flex items-center space-x-3"
//                   >
//                     <div className="p-2 rounded-full bg-[#2F7889]">
//                       <FaLinkedin className="text-white text-xl" />
//                     </div>
//                     <span className="text-white text-sm sm:text-base font-medium">
//                       Follow us on LinkedIn
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-6 text-center text-[#000] text-xs sm:text-sm">
//           © Copyright {currentYear} RockBottom Sickle Cell Initiative. All
//           Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import cn from "@/app/utils/twcx";
import { FOOTER_LINKS } from "../../../../libs/constants";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

import RockBottomLogo from "@/../public/assets/RockBottomLogo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    { title: "Company", links: FOOTER_LINKS.company },
    { title: "Services", links: FOOTER_LINKS.services },
    { title: "Resources", links: FOOTER_LINKS.resources },
  ];

  return (
    <footer className="w-full bg-[#FFF] pt-10">
      <div className="max-w-[1440px] mx-auto px-[4%] sm:px-[5%]">
        {/* Layout container */}
        <div className="flex flex-col lg:flex-row justify-between gap-y-10 pb-10">
          {/* Logo section */}
          <div className="flex flex-col items-center lg:items-start lg:w-1/4 gap-4">
            <Image
              src={RockBottomLogo}
              alt="Treasure Health Logo"
              width={32}
              height={32}
              className="bg-[#000]"
            />
            <h2 className="text-[#000] text-[14px] leading-[175%] text-center lg:text-left max-w-[270px]">
              We treasure your wellbeing
            </h2>
          </div>

          {/* Link sections in a row on small screens, column on large */}
          <div className="flex flex-col gap-10 w-full lg:flex-row lg:justify-center lg:gap-16 lg:w-2/4">
            <div className="flex flex-row justify-between gap-8 lg:gap-16 w-full">
              {sections.map((section) => (
                <ul
                  key={section.title}
                  className="flex flex-col gap-2 min-w-[100px]"
                >
                  <span className="font-semibold text-[#000]">
                    {section.title}
                  </span>
                  {section.links.map(
                    (link: { id: number; link: string; label: string }) => (
                      <Link
                        href={link.link}
                        key={link.id}
                        className={cn(
                          "capitalize hover:font-medium hover:text-primary transition-colors duration-300 text-base text-[#42454A]"
                        )}
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                </ul>
              ))}
            </div>
          </div>

          {/* Socials - stacked on all sizes, but positioned right on large */}
          <div className="flex flex-col gap-4 items-center lg:items-end lg:w-1/4">
            {[
              {
                icon: <FaSquareFacebook className="text-white text-xl" />,
                text: "Follow us on Facebook",
                href: "https://www.facebook.com/profile.php?id=61568320691704&mibextid=LQQJ4d",
              },
              {
                icon: <FaInstagram className="text-white text-xl" />,
                text: "Follow us on Instagram",
                href: "https://www.instagram.com/treasurehealth365/",
              },
              {
                icon: <FaLinkedin className="text-white text-xl" />,
                text: "Follow us on LinkedIn",
                href: "https://www.linkedin.com/in/treasure-health-services-291863337/",
              },
            ].map(({ icon, text, href }, i) => (
              <Link
                key={i}
                href={href}
                target="_blank"
                className="flex items-center gap-4 bg-black p-4 rounded-full w-fit"
              >
                <div className="p-2 rounded-full bg-[#2F7889]">{icon}</div>
                <span className="text-white text-sm sm:text-base font-medium">
                  {text}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-[#000] text-xs sm:text-sm">
          © {currentYear} RockBottom Sickle Cell Initiative. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
