"use client";
import React, { useEffect, useState } from "react";
import { GiHeartBeats } from "react-icons/gi";
import Navbar from "@/components/Navs/Navbar";
import CheckInternetLayout from "./CheckInternetLayout";
import HeroSection from "@/components/pageSection/home/HeroSection";
import MissionSection from "@/components/pageSection/home/MissionSection";
// import Hero from "@/components/Hero";
// import About from "@/components/About";
// import Services from "@/components/Services";
// import Reviews from "@/components/Reviews";
// import Footer from "@/components/Footer";
// import News from "@/components/News";

export default function HomeLayout({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a 1 second loading time
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      // <div className="flex items-center justify-center h-screen">
      //   <BiLoaderCircle className="animate-spin  h-24 w-24 text-[#484646]" />
      // </div>
      <div className="absolute flex flex-col items-center justify-center inset-0">
        <h2 className=" font-bold  text-lg md:text-xl lg:text-2xl xl:text-3xl m-4 ">
          Rock Bottom Sickle Cell Initiative
        </h2>
        <div className="w-12 h-12 border-4 border-transparent  rounded-full animate-pulse">
          <GiHeartBeats className="w-full h-full " />
        </div>

        <p className="text-center  text-base font-light animate-letters  ">
          Empowering lives through support, education, and advocacy for sickle
          cell warriors.
        </p>
      </div>
    );
  }
  return (
    <CheckInternetLayout>
      <>
        <Navbar />
        {/* {children} */}
        <HeroSection />
        <MissionSection/>
        {/* <Hero/>
        
      <About/>
      <Services/>
      <Reviews/>
      <News/>
      <Footer/> */}
      </>
    </CheckInternetLayout>
  );
}
