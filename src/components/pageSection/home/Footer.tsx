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
    <footer className="w-full bg-[#FFF] pt-10 overflow-hidden break-words">
      <div className="max-w-[1440px] mx-auto px-[4%] sm:px-[5%]">
        {/* Layout container */}
        <div className="flex flex-col lg:flex-row justify-between gap-y-10 pb-10">
          {/* Logo section */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/4 gap-4">
            <Image
              src={RockBottomLogo}
              alt="Treasure Health Logo"
              width={32}
              height={32}
              className="bg-[#000]"
            />
            <h2 className="text-[#000] text-[14px] leading-[175%] max-w-[270px]">
              We treasure your wellbeing
            </h2>
          </div>

          {/* Link sections - stacked vertically on small screens */}
          <div className="flex flex-col gap-10 w-full lg:flex-row lg:justify-center lg:gap-16 lg:w-2/4">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-8 lg:gap-16 w-full">
              {sections.map((section) => (
                <ul
                  key={section.title}
                  className="flex flex-col gap-2 min-w-[100px] flex-shrink"
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

          {/* Socials section */}
          <div className="flex flex-col gap-4 items-center lg:items-end lg:w-1/4 w-full max-w-xs mx-auto">
            {[
              {
                icon: <FaSquareFacebook className="text-white text-xl" />,
                text: "Follow us on Facebook",
                href: "https://www.facebook.com/",
              },
              {
                icon: <FaInstagram className="text-white text-xl" />,
                text: "Follow us on Instagram",
                href: "https://www.instagram.com/",
              },
              {
                icon: <FaLinkedin className="text-white text-xl" />,
                text: "Follow us on LinkedIn",
                href: "https://www.linkedin.com/in/",
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

