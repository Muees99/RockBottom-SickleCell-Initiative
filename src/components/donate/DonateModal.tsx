// components/donate/DonateModal.tsx
"use client";

import React, { useState } from "react";
import QRCode from "react-qr-code";
import { PaystackOptions, PaystackResponse } from "../../../@types";
import { ClipboardCopy } from "lucide-react";

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

const planAmounts: Record<string, number> = {
  monthly: 5000, // $50 in kobo
  yearly: 50000, // $500 in kobo
};

const displayAmounts: Record<string, string> = {
  monthly: "$50",
  yearly: "$500",
};

const DonateModal = ({ planName, isOpen, onClose }: DonateModalProps) => {
  const [tab, setTab] = useState<"paystack" | "stripe" | "zelle" | "crypto">(
    "paystack"
  );
  const [email, setEmail] = useState("");
  //   const amount = planAmounts[planName.toLowerCase()] || 5000;
  //   const displayAmount = displayAmounts[planName.toLowerCase()] || "$50";
  const normalizedPlan = planName.toLowerCase().includes("year")
    ? "yearly"
    : "monthly";

  const amount = planAmounts[normalizedPlan];
  const displayAmount = displayAmounts[normalizedPlan];


  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);

      // Clear message after 2 seconds
      setTimeout(() => setCopiedText(null), 2000);
    } catch {
      alert("Failed to copy.");
    }
  };

  const handlePaystack = () => {
    if (!email) return alert("Please enter your email.");

    const handler = window.PaystackPop.setup({
      key: "pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", // Replace with your public key
      email,
      //   amount: 5000, // in kobo: ₦50
      amount,

      currency: "USD",
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

  const handleStripe = async () => {
    if (!email) return alert("Please enter your email.");

    try {
      const res = await fetch("/api/create-stripe-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, planName }),
      });
      const data = await res.json();
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        alert("Failed to initiate Stripe payment.");
      }
      
    } catch (error) {
      if (error instanceof Error) {
        alert("Stripe error: " + error.message);
      } else {
        alert("An unknown error occurred.");
      }
    }
  };
  const [copiedText, setCopiedText] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
          Donate to {planName}
        </h2>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {["paystack", "stripe", "zelle", "crypto"].map((method) => (
            <button
              key={method}
              className={`px-3 py-1.5 rounded-full font-semibold text-sm ${
                tab === method ? "bg-[#2F7889] text-white" : "bg-gray-100"
              }`}
              //   onClick={() => setTab(method as any)}
              onClick={() =>
                setTab(method as "paystack" | "stripe" | "zelle" | "crypto")
              }
            >
              {method === "paystack" && "Paystack"}
              {method === "stripe" && "Stripe"}
              {method === "zelle" && "Zelle"}
              {method === "crypto" && "Crypto"}
            </button>
          ))}
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
              {/* Donate $50 with Paystack */}
              Donate {displayAmount} with Paystack
            </button>
          </div>
        )}

        {/* Stripe Tab */}
        {tab === "stripe" && (
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-4 py-2 rounded-md"
            />
            <button
              onClick={handleStripe}
              className="w-full bg-[#2F7889] text-white py-2 rounded-md hover:bg-[#25616f]"
            >
              {/* Donate $50 with Stripe */}
              Donate {displayAmount} with Stripe
            </button>
          </div>
        )}

        {/* Zelle Tab */}
        {tab === "zelle" && (
          <div className="text-center space-y-4">
            <p className="text-gray-700">Send your donation to:</p>
            <div className="relative bg-gray-100 p-3 rounded-md flex items-center justify-between text-sm font-mono">
              <span>donate@example.com</span>

              <span className="relative group">
                <button
                  onClick={() => copyToClipboard("donate@example.com")}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <ClipboardCopy size={18} />
                </button>

                {/* Tooltip for hover */}
                <span className="absolute bottom-full mb-1 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2">
                  Copy to clipboard
                </span>

                {/* Tooltip for click */}
                {copiedText === "donate@example.com" && (
                  <span className="absolute bottom-full mb-1 left-0 bg-green-600 text-white text-xs rounded py-1 px-2 animate-fade-in">
                    Copied!
                  </span>
                )}
              </span>
            </div>
            <p className="text-sm text-gray-500">
              After sending, kindly email your receipt to{" "}
              <strong>donate@example.com</strong>
            </p>
          </div>
        )}

        {/* Crypto Tab */}
        {tab === "crypto" && (
          <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
            {/* Bitcoin */}
            <div className="flex flex-col items-center">
              <h3 className="font-semibold text-gray-700 mb-2">Bitcoin</h3>
              <div className="w-20 sm:w-32">
                <QRCode
                  value="bc1qxyz...replace-this-address"
                  size={0}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              <p className="mt-2 text-xs text-gray-500 flex items-center justify-center gap-2 font-mono">
                bc1qxyz...replace-this-address
                <span className="relative group">
                  <button
                    onClick={() =>
                      copyToClipboard("bc1qxyz...replace-this-address")
                    }
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <ClipboardCopy size={18} />
                    {copiedText === "bc1qxyz...replace-this-address" && (
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] rounded px-2 py-0.5">
                        Copied!
                      </span>
                    )}
                  </button>

                  {/* Tooltip for hover */}
                  <span className="absolute bottom-full mb-1 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2">
                    Copy to clipboard
                  </span>

                  {/* Tooltip for click */}
                  {copiedText === "bc1qxyz...replace-this-address" && (
                    <span className="absolute bottom-full mb-1 left-0 bg-green-600 text-white text-xs rounded py-1 px-2 animate-fade-in">
                      Copied!
                    </span>
                  )}
                </span>
              </p>
            </div>

            {/* Ethereum */}
            <div className="flex flex-col items-center">
              <h3 className="font-semibold text-gray-700 mb-2">Ethereum</h3>
              <div className="w-20 sm:w-32">
                <QRCode
                  value="0xabc123...replace-this-address"
                  size={0}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              <p className="mt-2 text-xs text-gray-500 flex items-center justify-center gap-2 font-mono">
                0xabc123...replace-this-address
                <span className="relative group">
                  <button
                    onClick={() =>
                      copyToClipboard("0xabc123...replace-this-address")
                    }
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <ClipboardCopy size={18} />
                  </button>

                  {/* Tooltip for hover */}
                  <span className="absolute bottom-full mb-1 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2">
                    Copy to clipboard
                  </span>

                  {/* Tooltip for click */}
                  {copiedText === "0xabc123...replace-this-address" && (
                    <span className="absolute bottom-full mb-1 left-0 bg-green-600 text-white text-xs rounded py-1 px-2 animate-fade-in">
                      Copied!
                    </span>
                  )}
                </span>
              </p>
            </div>

            {/* USDT */}
            <div className="flex flex-col items-center">
              <h3 className="font-semibold text-gray-700 mb-2">USDT (TRC20)</h3>
              <div className="w-20 sm:w-32">
                <QRCode
                  value="TXYZ987...replace-this-address"
                  size={0}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              <p className="mt-2 text-xs text-gray-500 flex items-center justify-center gap-2 font-mono">
                TXYZ987...replace-this-address
                <span className="relative group">
                  <button
                    onClick={() =>
                      copyToClipboard("TXYZ987...replace-this-address")
                    }
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <ClipboardCopy size={18} />
                  </button>

                  {/* Tooltip for hover */}
                  <span className="absolute bottom-full mb-1 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2">
                    Copy to clipboard
                  </span>

                  {/* Tooltip for click */}
                  {copiedText === "TXYZ987...replace-this-address" && (
                    <span className="absolute bottom-full mb-1 left-0 bg-green-600 text-white text-xs rounded py-1 px-2 animate-fade-in">
                      Copied!
                    </span>
                  )}
                </span>
              </p>
            </div>
          </div>
        )}
        <p className="text-sm text-gray-500">
          After sending, kindly email your receipt to{" "}
          <strong>donate@example.com</strong>
        </p>

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
