import React from "react";
//import Image from "next/image";
import Navbar from "../components/navbar";
import Mail from "./script";

export const metadata = {
  title: "Contact",
  description: "Contact Page",
};

export default function Contact() {
  return (
    <div className="">
      <div className="flex flex-row gap-x-12 mx-12 mt-12">
        <p className="border-t-2 border-sesame w-full pt-2 font-bold text-2xl uppercase">
          Contact
        </p>
        <div className="flex justify-end -mt-4">
          <Navbar />
        </div>
      </div>

      <Mail />
    </div>
  );
}
