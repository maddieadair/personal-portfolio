"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <button
        className="flex top-0 right-0 z-20 relative w-10 h-10 focus:outline-none"
        onClick={handleNav}
      >
        <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-3">
          <span
            className={`absolute h-[3px] w-8 transform transition duration-300 ease-in-out ${
              nav
                ? "rotate-45 delay-200 bg-marshmallow"
                : "-translate-y-1.5 bg-sesame"
            }`}
          ></span>
          <span
            className={`absolute h-[3px] transform transition-all duration-200 ease-in-out ${
              nav
                ? "w-0 opacity-50 bg-marshmallow"
                : "w-8 delay-200 opacity-100 bg-sesame mt-1"
            }`}
          ></span>
          <span
            className={`absolute h-[3px] w-8 transform transition duration-300 ease-in-out ${
              nav
                ? "-rotate-45 delay-200 bg-marshmallow"
                : "translate-y-1.5 bg-sesame mt-2"
            }`}
          ></span>
        </div>
      </button>
      <nav
        className={`fixed flex top-0 left-0 w-full p-10 z-10 h-screen justify-center items-center pt-24 bg-gray-900 text-marshmallow bg-opacity-100 ease-in-out transform transition-all duration-500 ${
          nav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        <ul className="text-marshmallow text-3xl font-gambetta space-y-8 text-center">
          <li>
            <Link href="/" onClick={handleNav}>
              home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={handleNav}>
              about
            </Link>
          </li>
          <li>
            <Link href="/projects" onClick={handleNav}>
              projects
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={handleNav}>
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
