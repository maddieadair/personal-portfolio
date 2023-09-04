import Image from "next/image";
import Clock from "./components/clock";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-row justify-end mx-12 mt-8">
        <Navbar />
      </div>

      <div className="flex flex-col min-h-screen gap-y-10 justify-center items-center md:flex-row md:mx-32 md:gap-x-4 lg:mx-32 lg:gap-x-8 lg:w-10/12 xl:gap-x-4 xl:mx-40 2xl:gap-x-16 2xl:mx-64">
        <div className="relative w-full h-52 md:hidden">
          <Image
            src="/cat-sitting.svg"
            alt="Illustration of a loafing cat"
            fill={true}
            object-fit="contain"
          ></Image>
        </div>
        <div className="relative order-2 hidden md:block w-[320px] shrink-0 h-[320px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[600px] 2xl:h-[600px]">
          <Image
            src="/cat-peeking.svg"
            alt="Illustration of a cat peeking from behind a wall"
            fill={true}
            object-fit="contain"
            className="w-fit h-full"
          ></Image>
        </div>
        <div className="md:order-1 space-y-12 text-center lg:space-y-20 md:text-start md:space-y-16">
          <h1 className="text-8xl sm:text-9xl md:text-[150px] lg:text-[200px] xl:text-[250px] 2xl:text-[300px] font-bold font-gambetta">
            hey!
          </h1>
          <Clock />
        </div>
      </div>
    </div>
  );
}
