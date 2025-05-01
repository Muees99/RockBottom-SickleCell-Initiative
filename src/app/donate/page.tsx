import React from 'react'
import Navbar from '@/components/Navs/Navbar';
import Footer from "@/components/pageSection/home/Footer";

function page() {
  return (
    <div className="w-full py-16 overflow-hidden relative">
      <div className="max-w-[1440px] lg:px-8 sm:px-[5%] px-[4%]">
        <Navbar/>
        <Footer/>
      </div>
    </div>
  );
}

export default page