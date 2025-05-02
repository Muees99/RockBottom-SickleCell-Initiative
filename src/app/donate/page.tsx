import React from "react";
import Navbar from "@/components/Navs/Navbar";
import Footer from "@/components/pageSection/home/Footer";
import HeroSection from "@/components/donate/HeroSection";
import HowDonationsWork from "@/components/donate/HowDonationWork";

// import Image from "next/image"

function Donationpage() {
  return (
    <>
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <HeroSection/>
        <HowDonationsWork/>
      </main>
      <Footer />
    </>
  );
}

export default Donationpage;
