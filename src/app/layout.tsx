import type { Metadata } from "next";
import { outfit, figtree } from "./font";
import "./globals.css";
import GotoTop from "@/components/Ui/GotoTop";
import StateContextProvider from "@/../context/StateContext";

export const metadata: Metadata = {
  title: "Rock Bottom Sickle Cell Initiative",
  description:
    "Rock Bottom Sickle Cell Initiative provides support, education,and advocacy for individuals and families affected by sickle cell disease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en">
    //   <body
    //     // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    //     className={`${outfit.variable} ${figtree.variable} font-body antialiased`}
    //   >
    //     {children}
    //   </body>
    // </html>
    <html lang="en" className={`${outfit.variable} ${figtree.variable}`}>
      <body className="font-figtree">
        <StateContextProvider>
        {children}
        <GotoTop />
        </StateContextProvider>
      </body>
    </html>
  );
}
