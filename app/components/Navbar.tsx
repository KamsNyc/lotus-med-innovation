
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <nav className="fixed flex h-14 w-full items-center justify-between px-4 sm:px-8 md:px-16 lg:px-40 z-20">
        <ul className="flex items-center justify-center gap-4 sm:gap-8 lg:gap-6 flex-grow text-[14px] tracking-widest text-[#eeeeee] pl-[50px]">
          <Link className="hover:text-white hover:font-bold duration-700 ease-out" href="/Homepage">Home</Link>
          <Link className="hover:text-white hover:font-bold duration-700 ease-out" href="/about">About</Link>
          <Link className="hover:text-white hover:font-bold  duration-700 ease-out" href="/contact">Contact</Link>
        </ul>
        <Link href="/">
          <Image
            className=""
            src="/replay.png"
            width={30}
            height={30}
            alt="replay video"
          />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
