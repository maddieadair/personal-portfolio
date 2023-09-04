import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: '404 Error',
    description: '404 Error Page'
  }

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center mx-16 gap-y-8 mb-24">
      <div className="relative w-56 h-56 md:w-72 md:h-72 lg:h-96 lg:w-96">
        <Image
          src="/cat-ljump.svg"
          alt="Illustration of a cat jumping"
          fill={true}
          object-fit="contain"
          priority={true}
        ></Image>
      </div>
      <h1 className="text-7xl md:text-9xl font-gambetta font-bold">Oops!</h1>
      <h2 className="text-3xl md:text-5xl text-center font-bold">
        Error Code 404
      </h2>
      <div className="mt-4 space-y-2">
        <h2 className="md:text-xl text-center">
          Sorry the page you were looking for could not be found :(
        </h2>
        <h2 className="md:text-xl text-center">
          (Unless you were looking for a page with a picture of a cat. <br></br>
          If so, then you&apos;re in luck! You&apos;ve found the right place!)
        </h2>
      </div>
      <button className="mt-8 bg-sesame text-marshmallow rounded-md p-3 transition ease-in-out hover:-translate-y-1 duration-300">
        <Link href="/" className="flex flex-row gap-x-2 md:text-xl">
          return home<AiFillHome size={22}></AiFillHome>
        </Link>
      </button>
    </div>
  );
}
