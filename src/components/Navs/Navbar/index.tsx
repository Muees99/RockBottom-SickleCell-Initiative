"use client";
import { NAVLINKS } from "@/../libs/constants";
// import Image from "next/image";
import cn from "@/app/utils/twcx";
import Link from "next/link";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
// import MobileNav from "../MobileNav";
import { useStateCtx } from "@/../context/StateContext";
import useWindowHeight from "@/../hooks/useDimension";
// import Button from "@/components/Ui/Button";
// import { CiLogin, CiLogout } from "react-icons/ci";
import Image from "next/image";
import RockBottomLogo from "@/../public/assets/RockBottomLogo.png";
import Button from "../../../../Ui/Button";

const Navbar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { showMobileMenu, setShowMobileMenu } = useStateCtx();
  const searchParams = useSearchParams().get("path");
  const scrollHeight = useWindowHeight();

  const [isActive, setIsActive] = useState("");
  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
      return;
    }
  }, [searchParams]);

  return (
    <header className="fixed top-4 w-full z-50 flex justify-center">
      <nav
        className={cn(
          "w-full max-w-[90%] sm:px-[5%] px-[4%] h-[14vh] flex justify-between items-center rounded-full bg-[#1E1E1E] shadow-md transition-all duration-500",
          scrollHeight > 200
            ? "backdrop-blur-lg shadow-md py-3 border-b border-gray-400"
            : ""
        )}
      >
        {/* <Link
          href="/?path=home"
          className={cn(
            "max-sm:w-[120px] max-[450px]:w-[100px]",
            scrollHeight > 200 ? "w-[120px] " : "w-fit",
            "animate-pulse" // Apply the pulse animation
          )}
        >
          <Image
            src={treasureHealthLG} // Insert the logo image
            alt="Treasure Health Logo"
            width={30} // Adjust width as needed
            height={30} // Adjust height as needed
            className="mr-2" // Add margin for spacing between image and text
          />
          <span className="text-white text-sm md:text-lg sm:text-xl font-semibold">
            Treasure Health Services LLC
          </span>
        </Link> */}
        <Link
          href="/?path=home"
          className={cn(
            "flex items-center max-sm:w-[120px] max-[450px]:w-[100px]",
            scrollHeight > 200 ? "max-w-[50%]" : "w-fit"
          )}
        >
          <Image
            src={RockBottomLogo}
            alt="Treasure Health Logo"
            width={60} // Adjust width as needed
            height={60} // Adjust height as needed
            className="flex items-center gap-2 max-w-[200px]" // Add margin for spacing between image and text
          />
          {/* <span className="text-white text-sm md:text-lg sm:text-xl font-semibold whitespace-nowrap flex-grow animate-pulse">
            RockBottom SickleCell Initiative
          </span> */}
        </Link>

        <div className="hidden lg:flex items-center justify-center  gap-x-5 lg:gap-x-7 2xl:gap-x-10 ml-auto">
          {NAVLINKS.map((link) => (
            <Link
              // href={
              //   link.link === "home"
              //     ? "/?path=home"
              //     : `${link.link}?path=${link.link}`
              // }
              href={`#${link.link}`} // Use hash links for on-page navigation
              key={link.id}
              onClick={() => {
                setIsActive(link.link);
              }}
              className={cn(
                "text-[white] text-lg capitalize relative font-medium  before:bg-blue-400 before:w-[0%] before:h-1 before:absolute before:-bottom-2 before:left-0 before:transition-all before:duration-500",
                isActive === link.link ? "before:w-full text-gray-200" : "",
                "hover:text-[#FFFFFF]"
                // bg-gray-400
              )}
            >
              <span className="">{link.label}</span>
            </Link>
          ))}
          {/* <Button className="rounded-full px-6 py-2 max-w-full text-white bg-[#2F7889]">
            Donate
          </Button> */}

          <Button className=" flex items-center justify-center  rounded-full bg-amber-500  ">
            Donate
          </Button>
        </div>

        <div
          tabIndex={0}
          className="lg:hidden text-2xl cursor-pointer focus:border border-primary focus:p-1 focus:rounded-md ml-auto"
          onClick={() => setShowMobileMenu(true)}
        >
          <FaBars className="text-[#ffffff]" />
        </div>
        {/* <MobileNav /> */}
      </nav>
    </header>
  );
};

export default Navbar;

{
  /* <h1 className="font-heading text-3xl">This uses Figtree</h1>
<p className="font-body text-base">This uses Outfit</p> */
}
