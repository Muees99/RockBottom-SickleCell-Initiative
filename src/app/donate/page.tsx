"use client";
import React from "react";
import Navbar from "@/components/Navs/Navbar";
import Footer from "@/components/pageSection/home/Footer";
import HeroSection from "@/components/donate/HeroSection";
import HowDonationsWork from "@/components/donate/HowDonationWork";
import DonationPlans from "@/components/donate/DonationPlans";

import { Suspense } from "react";


function Donationpage() {
  return (
    <>
      <Suspense fallback={<div className=" flex justify-center items-center mt-10">Loading...</div>}>
        <Navbar />
        <main className="w-full overflow-x-hidden">
          <HeroSection />
          <HowDonationsWork />
          <DonationPlans />
        </main>
        <Footer />
      </Suspense>
    </>
  );
}

export default Donationpage;
