import type {Metadata} from "next";
import "./globals.css";
import {PropsWithChildren} from "react";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "BMark",
  description: "BMark Application",
};

export default function RootLayout({children}: Readonly<PropsWithChildren>) {
  return (
      <html lang="en">
      <body>
      <div className={"min-h-screen h-full w-full"}>
        <Navbar/>
        {children}
      </div>
      </body>
      </html>
  );
}
