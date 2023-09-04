import React from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import { FaLinkedin } from "react-icons/fa6";
import { FiFileText } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

import Link from "next/link";

export const metadata = {
  title: "About",
  description: "About Page",
};

export default function About() {
  return (
    <div className="mb-24">
      <div className="flex flex-row gap-x-12 mx-12 mt-12">
        <p className="border-t-2 border-sesame w-full pt-2 font-bold text-2xl uppercase">
          About
        </p>
        <div className="flex justify-end -mt-4">
          <Navbar />
        </div>
      </div>

      <div className="flex flex-col gap-x-20 justify-center items-center mx-12 gap-y-16 lg:mx-24 xl:flex-row xl:min-h-screen lg:gap-y-2 xl:mx-36 xl:gap-x-40 2xl:mx-64 2xl:gap-x-24 xl:mt-32">
        <div className="flex flex-col mt-24 gap-y-8 xl:w-2/3 2xl:w-1/3 xl:self-start">
          <div className="relative w-56 h-56 md:w-72 md:h-72 lg:h-96 lg:w-96">
            <Image
              src="/standing-cat.svg"
              alt="Illustration of a cat standing"
              fill={true}
              object-fit="contain"
              priority={true}
            ></Image>
          </div>
          <h1 className="text-7xl lg:text-8xl font-bold font-gambetta lowercase">
            Maddie Adair
          </h1>
          <div className="space-y-2 lg:text-lg">
            <p>
              Hey there! My name is Maddie Adair and I&apos;m currently a
              student at the University of Houston studying Computer Science
              with a double minor in Mathematics and Chinese Studies.
            </p>
            <p>
              In my free time I enjoy volunteering at the local animal shelter,
              learning new languages, building mechanical keyboards, hanging out
              with my dog, or watching cat videos.
            </p>
            <p>
              Thanks for checking out my website and I hope to get in touch with
              you soon!
            </p>
          </div>
          <div className="space-x-6 ml-1 mb-2">
            <button className="hover:transition-transform hover:rotate-[360deg] scale-150">
              <Link href="https://github.com/maddieadair/">
                <AiFillGithub className="hover:fill-icy" size={20} />
              </Link>
            </button>
            <button className="hover:transition-transform hover:rotate-[360deg] scale-150">
              <Link href="https://www.linkedin.com/in/madelineadair/">
                <FaLinkedin className="hover:fill-icy" size={20} />
              </Link>
            </button>
            <button className="hover:transition-transform hover:rotate-[360deg] scale-150">
              <Link
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiFileText className="hover:fill-icy" size={20} />
              </Link>
            </button>
          </div>
          <div className="border-t-2 border-sesame pt-12 space-y-6 lg:text-lg">
            <p className="bg-sesame text-marshmallow w-fit px-2">
              <strong>My current keyboard build for anyone interested</strong>
            </p>
            <ul className="">
              <li>
                <strong>Keyboard:</strong> Keychron &quot;Q1 Pro&quot; (Barebones,
                White, Knob)
              </li>
              <li>
                <strong>Switches:</strong> Invokeys &quot;Matcha Latte&quot;
                Linears
              </li>
              <li>
                <strong>Keycaps:</strong> Osume &quot;Strawberry Milks with
                Knovelties&quot;
              </li>
              <li>
                <strong>Mods:</strong> PE Foam, 3 layer Tempest Tape Mod
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-y-12 lg:text-lg lg:mt-24 2xl:w-2/3">
          <div className="flex flex-col">
            <div className="xl:flex xl:flex-row">
              <div className="xl:w-1/4"></div>
              <h2 className="xl:w-3/4 font-gambetta font-bold text-4xl mb-10">
                experience
              </h2>
            </div>
            <div className="flex flex-row divide-x-2 divide-sesame">
              <h3 className="xl:w-1/4 text-end font-bold self-center pr-8 hidden xl:block">
                August 2023 - Present
              </h3>
              <div className="xl:w-3/4 hover:bg-sesame hover:text-marshmallow px-8 py-6 w-full">
                <h3 className="font-bold">
                  University of Houston - Department of Computer Science -
                  ConocoPhillips Computer Science Learning Center{" "}
                  <span className="font-normal xl:hidden">
                    {" "}
                    | August 2023 - Present
                  </span>
                </h3>
                <h4 className="font-light italic">
                  Undergraduate Academic Assistant (Tutor)
                </h4>
                <p>
                  I currently tutor students in individual and group sessions
                  for classes such as Introductory Python and C++, and Data
                  Structures and Programming in C++ and Python.
                </p>
              </div>
            </div>

            <div className="flex flex-row divide-x-2 divide-sesame">
              <p className="xl:w-1/4 text-end font-bold self-center pr-8 hidden xl:block">
                June 2022 - Present
              </p>
              <div className="xl:w-3/4 hover:bg-sesame hover:text-marshmallow px-8 py-6 w-full">
                <p className="font-bold ">
                  Kung Fu Tea{" "}
                  <span className="font-normal xl:hidden">
                    {" "}
                    | June 2022 - Present
                  </span>
                </p>
                <p className="font-light italic">Barista and Cashier</p>
                <p>
                  I communicate with and serve an average of 300 customers per
                  day to ensure quality customer service. I also advertise store
                  program subscriptions through sales tactics to reach
                  membership sales objectives.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="xl:flex xl:flex-row">
              <div className="xl:w-1/4"></div>
              <h2 className="xl:w-3/4 font-gambetta font-bold text-4xl mb-10">
                organizations
              </h2>
            </div>
            <div className="flex flex-row divide-x-2 divide-sesame">
              <h3 className="xl:w-1/4 text-end font-bold self-center pr-8 hidden xl:block">
                May 2023 - Present
              </h3>
              <div className="xl:w-3/4 hover:bg-sesame hover:text-marshmallow px-8 py-6 w-full">
                <h3 className="font-bold">
                  Houston Humane Society{" "}
                  <span className="font-normal xl:hidden">
                    {" "}
                    | May 2023 - Present
                  </span>
                </h3>
                <h4 className="font-light italic">Volunteer</h4>
                <p>
                  I currently volunteer at my local humane society where I
                  educate the youth and public on animal welfare issues at
                  schools and festivals through Education and Community Outreach
                  events. In addition, I assist staff with weekly projects and
                  administrative tasks, and aid in the distribution of pet
                  supplies and adoption information at mobile adoptions and pet
                  food drives.
                </p>
              </div>
            </div>
            <div className="flex flex-row divide-x-2 divide-sesame">
              <h3 className="xl:w-1/4 text-end font-bold self-center pr-8 hidden xl:block">
                January 2023 - Present
              </h3>
              <div className="xl:w-3/4 hover:bg-sesame hover:text-marshmallow px-8 py-6 w-full">
                <h3 className="font-bold ">
                  CougarCS{" "}
                  <span className="font-normal xl:hidden">
                    {" "}
                    | January 2023 - Present
                  </span>
                </h3>
                <h4 className="font-light italic">Member</h4>
                <p>
                  Participated in technical workshops, weekly professional
                  meetings, and corporate mixers.
                </p>
              </div>
            </div>

            <div className="flex flex-row divide-x-2 divide-sesame">
              <h3 className="xl:w-1/4 text-end font-bold self-center pr-8 hidden xl:block">
                October 2022 - Present
              </h3>
              <div className="xl:w-3/4 hover:bg-sesame hover:text-marshmallow px-8 py-6 w-full">
                <h3 className="font-bold ">
                  CALCO (Chinese American Language and Culture Organization){" "}
                  <span className="font-normal xl:hidden">
                    {" "}
                    | October 2022 - Present
                  </span>
                </h3>
                <h4 className="font-light italic">Member</h4>
                <p>
                  I aid in the spread of the Chinese culture, history, and
                  language through the participation and advertising of cultural
                  immersion activities and language workshops.
                </p>
              </div>
            </div>

            <div className="flex flex-row divide-x-2 divide-sesame">
              <h3 className="xl:w-1/4 text-end font-bold self-center pr-8 hidden xl:block">
                October 2022 - Present
              </h3>
              <div className="xl:w-3/4 hover:bg-sesame hover:text-marshmallow px-8 py-6 w-full">
                <h3 className="font-bold ">
                  CS Girls{" "}
                  <span className="font-normal xl:hidden">
                    {" "}
                    | October 2022 - Present
                  </span>
                </h3>
                <h4 className="font-light italic">Member</h4>
                <p>
                  Took part in weekly coding challenges, professional info
                  sessions, and community outreach programs. Additionally, I
                  help in the promotion of the fields of science and technology
                  to women and other underrepresented groups within the
                  community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
