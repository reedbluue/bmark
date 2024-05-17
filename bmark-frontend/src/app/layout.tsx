import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import type {Metadata} from "next";
import {PropsWithChildren} from "react";
import Header from "@/components/Header";
import PrelineScript from "@/components/PrelineScript";
import {ToastContainer} from "react-toastify";

export const metadata: Metadata = {
  title: {
    default: "Bmark",
    template: "%s | Bmark",
  },
  description: "Bmark is a bookmark manager for the web",
};

export default function RootLayout({children}: Readonly<PropsWithChildren>) {
  return (
      <html lang="en">
      <body>
      <div>
        <Header/>
        <div className={"container mx-auto"}>
          {children}
        </div>
        <ToastContainer/>
      </div>
      </body>
      <PrelineScript/>
      </html>
  );
}
