
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from './Logo';

const Navbar = () => {
  return (
    <div className="mt-4">
      {/* CONTAUNER */}
      <nav className="fixed flex h-16 mt-2 w-full items-center justify-between px-4 sm:px-8 md:px-16 lg:px-28 z-20">
         {/* Logo */}
    <Link href={'/Homepage'} className="">
    <Image
        className="mb-4 cursor-pointer"
        width={200}
        height={60}
        src="/Logov2.png"
        alt="logo"
      />
    </Link>
    {/* NAVLINK */}
        <ul className="flex items-center justify-end gap-4 sm:gap-8 lg:gap-8 flex-grow text-[16px] tracking-widest text-[#fff] font-light pl-[50px]">
          <Link className="hover:text-white hover:font-bold duration-300 ease-out  uppercase" href="/Homepage">Home</Link>
          <Link className="hover:text-white hover:font-bold duration-300 ease-out  uppercase" href="/about">About</Link>
          <Link className="hover:text-white hover:font-bold  duration-300 ease-out  uppercase" href="/contact">Contact</Link>

          <Link href="/">
          <Image
            className="hover:scale-105 duration-300 ease-out"
            src="/replay.png"
            width={30}
            height={30}
            alt="replay video"
          />
        </Link>
        </ul>
      
      </nav>
    </div>
  );
};

export default Navbar;
