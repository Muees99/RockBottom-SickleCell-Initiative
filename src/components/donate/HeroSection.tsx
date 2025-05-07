import Image from "next/image";
import donate from "../../../public/assets/donate.png";

const HeroSection = () => {
  return (
    <section className="bg-white py-20 mt-10">
      <div className="max-w-[1440px] mx-auto lg:px-8 sm:px-[5%] px-[4%]">
        <div className="relative w-full h-[70vh] md:h-[80vh] rounded-lg overflow-hidden">
          <Image
            src={donate}
            alt="Donate Hero"
            fill
            className="object-cover z-0"
            priority
          />
          <div className="absolute inset-0 bg-black/50 z-10 flex flex-col justify-center items-center text-center p-4">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
              Give Hope, Change Lives
            </h1>
            <p className="text-white text-lg md:text-xl max-w-xl">
              Help us empower individuals and families living with sickle cell
              around the world; your donation makes a difference.
            </p>
            <button
              onClick={() => {
                const section = document.getElementById("donateplan"); // <-- make sure  ID is correct
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center justify-center px-6 py-3 rounded-full text-[#000] bg-[#FFF] mt-10"
            >
              Make a Donation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

