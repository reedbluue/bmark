import type {Metadata} from "next";
import "./globals.css";
import {PropsWithChildren} from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "BMark",
  description: "BMark Application",
};

export default function RootLayout({children}: Readonly<PropsWithChildren>) {
  return (
      <html lang="en">
      <body>
      <div className={"min-h-screen h-full w-full flex flex-col"}>
        <Navbar/>
        <div className={"flex-grow"}>
          {children}
        </div>
        <Footer/>
      </div>
      </body>
      </html>
  );
}
