// components/donate/DonationPlans.tsx
"use client";
import { useState } from "react";
import DonateModal from "./DonateModal"; // import the modal

const plans = [
  {
    name: "General Donation",
    description:
      "This is a general donation our cause in Rock Bottom. This helps all our general expenses as well as administrative costs. Thank you as you contribute to this.",
    bg: "bg-[#EDF7D1]",
    showProgress: false,
  },
  {
    name: "YMRG Campaign",
    amount: "$50/mo",
    description:
      "Support the YMRG Campaign to help cover ongoing community programs. Every monthly donation makes a huge difference.",
    bg: "bg-[#EDF7D1]",
    showProgress: true,
    raised: 400,
    goal: 50000,
  },
  {
    name: "Yearly Retreat",
    amount: "$500",
    description:
      "Help fund the yearly retreat that provides rest and growth for families affected by sickle cell. Every contribution counts.",
    bg: "bg-[#EDF7D1]",
    showProgress: true,
    raised: 15000,
    goal: 30000,
  },
];

const DonationPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-10">
          Choose Your Donation Plan
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {plans.map((plan, idx) => {
            const progress =
              plan.showProgress && plan.raised && plan.goal
                ? (plan.raised / plan.goal) * 100
                : 0;

            return (
              <div
                key={idx}
                className={`${plan.bg} border rounded-xl p-6 hover:shadow-md transition text-left flex flex-col justify-between`}
              >
                <div>
                  <h3 className="text-xl font-semibold text-[#2F7889] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-2xl font-bold mb-2">{plan.amount}</p>
                  <p className="text-gray-700 mb-4">{plan.description}</p>

                  {plan.showProgress && (
                    <div className="mt-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>${plan.raised?.toLocaleString()} raised</span>
                        <span>Goal: ${plan.goal?.toLocaleString()}</span>
                      </div>
                      <div className="w-full h-3 bg-gray-300 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#2F7889] rounded-full"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-[#2F7889] mt-1 font-semibold">
                        {Math.round(progress)}% funded
                      </p>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setSelectedPlan(plan.name)}
                  className="mt-6 bg-[#2F7889] text-white px-4 py-2 rounded-full hover:bg-[#25616f] transition w-full"
                >
                  Make a Donation
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <DonateModal
        planName={selectedPlan || ""}
        isOpen={!!selectedPlan}
        onClose={() => setSelectedPlan(null)}
      />
    </section>
  );
};

export default DonationPlans;
