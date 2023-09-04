import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import { AiFillGithub } from "react-icons/ai";

export const metadata = {
  title: "Projects",
  description: "Projects Page",
};

export default function Projects() {
  return (
    <div className="mb-24">
      <div className="flex flex-row gap-x-12 mx-12 mt-12">
        <p className="border-t-2 border-sesame w-full pt-2 font-bold text-2xl uppercase">
          Projects
        </p>
        <div className="flex justify-end -mt-4">
          <Navbar />
        </div>
      </div>

      <div className="mt-40 mx-12 lg:mx-24 xl:mx-36 2xl:mx-40 flex flex-col gap-y-12 min-h-screen justify-center items-center">
        <div className="2xl:w-1/2 w-full flex flex-col gap-y-8 border-2 border-sesame hover:bg-sesame group hover:text-marshmallow rounded-md p-12 transition ease-in-out hover:-translate-y-1 duration-300">
          <div className="space-y-4">
            <div className="flex flex-row gap-x-8">
              <h1 className="text-2xl lg:text-4xl font-bold text-start lowercase">
                Personal Portfolio
              </h1>
              <button className="hover:transition-transform hover:rotate-[360deg] scale-150">
                <Link href="https://github.com/maddieadair/personal-portfolio">
                  <AiFillGithub className="hover:fill-icy" size={20} />
                </Link>
              </button>
            </div>
            <p className="text-start italic lg:text-lg border-b-2 border-sesame group-hover:border-marshmallow pb-4">
              A simple portfolio website showcasing basic information about
              myself as well as my personal projects.
            </p>
            <p className="text-start pt-4 lg:text-lg">
              This was my first real dabble into Next.js and an opportunity to
              practice what I&apos;ve learned about front-end web development in
              what has ultimately become an extension of myself.
            </p>
            <p className="text-start lg:text-lg">
              Overall, this was a great learning experience for me as I learned
              more about the principles and importance of UI/UX design and what
              it takes to make a functional and presentable website.
            </p>
            <p className="text-start lg:text-lg">
              I&apos;ll be updating this website frequently as time goes along
              and I add new features or changes.
            </p>
            <p className="text-start lg:text-lg">
              As of right now, I am working towards adding multi-language
              functionality!
            </p>
            <p>Stock Images © Spiharu / Adobe Stock</p>
          </div>
          <div className="flex flex-col gap-y-2 w-full lg:text-lg">
            <div className="flex flex-row gap-x-1 ">
              <h4 className="font-bold pr-4 uppercase">UI</h4>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/tailwind-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white"
                className="w-auto h-6 xl:h-8"
              />
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/react-20232A?style=for-the-badge&logo=react"
                className="w-auto h-6 xl:h-8"
              />
            </div>
            <div className="flex flex-row ">
              <h4 className="font-bold pr-4 uppercase">Framework</h4>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/next-black?style=for-the-badge&logo=next.js"
                className="w-auto h-6 xl:h-8"
              />
            </div>
            <div className="flex flex-row ">
              <h4 className="font-bold pr-4 uppercase">Hosting</h4>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/vercel-black?style=for-the-badge&logo=vercel"
                className="w-auto h-6 xl:h-8"
              />
            </div>
          </div>
        </div>

        <div className="2xl:w-1/2 w-full flex flex-col gap-y-8 border-2 border-sesame hover:bg-sesame group hover:text-marshmallow rounded-md p-12 transition ease-in-out hover:-translate-y-1 duration-300">
          <div className="space-y-4">
            <div className="flex flex-row gap-x-8">
              <h1 className="text-2xl lg:text-4xl font-bold text-start lowercase">
                Chinese Worksheet Generator
              </h1>
              <button className="hover:transition-transform hover:rotate-[360deg] scale-150">
                <Link href="https://github.com/maddieadair/chinese-stroke-ws-gen">
                  <AiFillGithub className="hover:fill-icy" size={20} />
                </Link>
              </button>
            </div>
            <h2 className="italic text-start text-red-400 group-hover:text-red-200 lg:text-lg">
              work in progress!
            </h2>
            <p className="italic text-start lg:text-lg border-b-2 border-sesame group-hover:border-marshmallow pb-4">
              A web app that generates worksheets of Chinese characters and
              words to help with practicing stroke order and writing.
            </p>
            <p className="text-start pt-4 lg:text-lg">
              This is a passion project that started out of my goal to practice
              my Chinese writing more in hopes of getting better at recognizing
              the characters.
            </p>
            <p className="text-start lg:text-lg">
              It uses Next.js for the front-end and Django for the back-end, and
              PostgreSQL for storing and retrieving the word/character
              information and the stroke order. Word and character information
              are thanks to the Make Me a Hanzi and CC-EDICT datasets.
            </p>
            <p className="text-start lg:text-lg">
              Additionally, it includes options for customizing the layout, grid
              lines, character and outline colors, and whether to include pinyin
              and/or english translations.
            </p>
          </div>

          <div className=" flex flex-col gap-y-2 w-full lg:text-lg">
            <div className="flex flex-row gap-x-1 ">
              <h4 className="font-bold pr-4 uppercase">UI</h4>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/tailwind-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white"
                className="w-auto h-6 xl:h-8"
              />
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/react-20232A?style=for-the-badge&logo=react"
                className="w-auto h-6 xl:h-8"
              />
            </div>
            <div className="flex flex-row ">
              <h4 className="font-bold pr-4 uppercase">Frameworks</h4>
              <div className="flex flex-row gap-x-1 flex-wrap gap-y-1">
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/next-black?style=for-the-badge&logo=next.js"
                  className="w-auto h-6 xl:h-8"
                />
                <img
                  alt="Static Badge"
                  src="https://img.shields.io/badge/django-092E20?style=for-the-badge&logo=django"
                  className="w-auto h-6 xl:h-8"
                />
              </div>
            </div>
            <div className="flex flex-row ">
              <h4 className="font-bold pr-4 uppercase">Datbase</h4>
              <img
                alt="Static Badge"
                src="https://img.shields.io/badge/postgresql-316192?style=for-the-badge&logo=postgresql&logoColor=white"
                className="w-auto h-6 xl:h-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
