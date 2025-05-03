// components/donate/DonateModal.tsx
"use client";
import React, { useState } from "react";
// import { QRCode } from "qrcode.react";
// import QRCode from "qrcode.react"; // ✅ Correct
import QRCode from "react-qr-code";
import { PaystackOptions, PaystackResponse } from "../../../@types";

// declare global {
//   interface Window {
//     PaystackPop: any;
//   }
// }
// declare global {
//   interface Window {
//     PaystackPop: {
//       setup: (options: any) => { openIframe: () => void };
//     };
//   }
// }
declare global {
  interface Window {
    PaystackPop: {
      setup: (options: PaystackOptions) => {
        openIframe: () => void;
      };
    };
  }
}

type DonateModalProps = {
  planName: string;
  isOpen: boolean;
  onClose: () => void;
};

const DonateModal = ({ planName, isOpen, onClose }: DonateModalProps) => {
  const [tab, setTab] = useState<"paystack" | "crypto">("paystack");
  const [email, setEmail] = useState("");

  const handlePaystack = () => {
    if (!email) return alert("Please enter your email.");

    const handler = window.PaystackPop.setup({
      key: "pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", // Replace with your public key
      email,
      amount: 500000, // in kobo, ₦5000
      currency: "NGN",
      ref: `${planName}-${Date.now()}`,

      callback: (response: PaystackResponse) => {
        alert("Payment complete! Reference: " + response.reference);
        onClose();
      },

      onClose: () => {
        alert("Transaction was not completed.");
      },
    } as PaystackOptions);

    handler.openIframe();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
          Donate to {planName}
        </h2>

        {/* Tab Switch */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded-full font-semibold ${
              tab === "paystack" ? "bg-[#2F7889] text-white" : "bg-gray-100"
            }`}
            onClick={() => setTab("paystack")}
          >
            Pay with Card/Bank
          </button>
          <button
            className={`px-4 py-2 rounded-full font-semibold ${
              tab === "crypto" ? "bg-[#2F7889] text-white" : "bg-gray-100"
            }`}
            onClick={() => setTab("crypto")}
          >
            Pay with Crypto
          </button>
        </div>

        {/* Paystack Tab */}
        {tab === "paystack" && (
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-4 py-2 rounded-md"
            />
            <button
              onClick={handlePaystack}
              className="w-full bg-[#2F7889] text-white py-2 rounded-md hover:bg-[#25616f]"
            >
              Donate ₦5,000 with Paystack
            </button>
          </div>
        )}

        {/* Crypto Tab */}
        {tab === "crypto" && (
          <div className="space-y-6 text-center">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Bitcoin</h3>
              <QRCode value="bc1qxyz...replace-this-address" size={128} />
              <p className="mt-2 text-xs text-gray-500">
                bc1qxyz...replace-this-address
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Ethereum</h3>
              <QRCode value="0xabc123...replace-this-address" size={128} />
              <p className="mt-2 text-xs text-gray-500">
                0xabc123...replace-this-address
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-2">USDT (TRC20)</h3>
              <QRCode value="TXYZ987...replace-this-address" size={128} />
              <p className="mt-2 text-xs text-gray-500">
                TXYZ987...replace-this-address
              </p>
            </div>
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-6 w-full bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DonateModal;
