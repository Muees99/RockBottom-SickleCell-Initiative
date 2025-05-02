// components/donate/HowDonationsWork.tsx
import { BsMegaphone } from "react-icons/bs";
import { GiOpenBook } from "react-icons/gi";
import { GoGear } from "react-icons/go";
import { MdOutlineMedication } from "react-icons/md";

const steps = [
  {
    title: "Medical Care",
    desc: "Your donation helps provide essential medications like Hydroxyurea, blood transfusions, and access to specialized medical care for those who desperately need it. We partner with local hospitals and clinics to ensure that individuals receive timely and effective treatment.",
    icon: <MdOutlineMedication className="text-3xl bg-[#FFF]"/>,
    bg: "bg-[#A3DAC2]",
  },
  {
    title: "Education & Awareness",
    desc: "Our contribution supports our community outreach programs, workshops, and educational campaigns. We raise awareness about sickle cell disease across the world, dispelling myths and providing vital information to families and communities. This includes radio jingles in local dialects, and printed materials.",
    icon: <GiOpenBook className="text-3xl bg-[#FFF]"/>,
    bg: "bg-[#F0DA69]",
  },
  {
    title: "Support & Advocacy",
    desc: "Your support enables us to provide emotional counseling, peer support groups, and advocacy services to individuals and families affected by sickle cell disease. We work to amplify their voices and advocate for policies that improve access to care and reduce the financial burden on families.",
    icon: <BsMegaphone className="text-3xl bg-[#FFF]"/>,
    bg: "bg-[#E7C2D4]",
  },
  {
    title: "Administrative Costs",
    desc: "We are committed to maximizing the impact of your donation. A small portion of your contribution goes towards essential administrative costs, ensuring that our operations are efficient and effective. We strive to keep these costs low, so that the majority of your donation directly benefits those we serve.",
    icon: <GoGear className="text-3xl  bg-[#FFF] "/>,
    bg: "bg-[#92BDF6]",
  },
];

const HowDonationsWork = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center lg:px-8 sm:px-[5%] px-[4%]">
        <div className=" flex flex-col items-center justify-center my-4 ">
          <h6 className="   text-sm md:text-lg font-semibold text-[#FFF]  uppercase bg-[#2F7889] w-fit px-6 py-3 rounded-lg mt-2">
            How Your Donation Helps
          </h6>
          <h2 className="text-2xl md:text-4xl font-bold my-10">
            Every Naira, Every Dollar makes a difference
          </h2>
          <p className="text-sm md:text-lg font-light">
            We understand that you want to know exactly how your generous
            donation is being used to support individuals and families affected
            by sickle cell disease. Here&apo;s a breakdown of how your
            contributions directly impact lives
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`rounded-xl text-[#000000] p-6 sm:p-8 shadow-md ${step.bg}`}
            >
              {/* <div className="mb-4">
                {step.icon}
                <h3 className="text-xl font-semibold mb-2 text-[#2F7889]">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
              </div> */}
              <div className="mb-4">
                {step.icon}
                <h3 className="text-xl font-semibold my-6">{step.title}</h3>
                <p className="text-[#000000] text-sm sm:text-base mt-4">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowDonationsWork;
