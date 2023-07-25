"use client";

import { useState } from "react";
import Image from "next/image";
import "./style.scss";
import Link from "next/link";
import { close, menu } from "@/public/image";
import Menu from "../menu/Menu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="w-full flex justify-between p-5 max-h-16">
        <Link className="logo items-center hidden md:flex" href="/">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </Link>

        <div className="flex justify-around items-center w-full md:gap-5 md:w-[40%]">
          <Image
            className=""
            src="/search.svg"
            alt="Logo"
            width={26}
            height={26}
          />
          {/* <Image className="" src="/app.svg" alt="Logo" width={26} height={26} /> */}
          {/* <Image
          className=""
          src="/expand.svg"
          alt="Logo"
          width={26}
          height={26}
        /> */}
          <div className="notification flex">
            <Image
              className=""
              src="/notifications.svg"
              alt="Logo"
              width={26}
              height={26}
            />
            <span>1</span>
          </div>
          <Image
            className=""
            src="/settings.svg"
            alt="Logo"
            width={26}
            height={26}
          />
          <div className="user">
            <Image
              className="rounded-full w-[26px] h-[26px] object-cover"
              src="/yash.jpg"
              alt="Logo"
              width={26}
              height={26}
            />
            <span>Yash</span>
          </div>
          <Image
            className="md:hidden transition-all duration-150"
            src={isMenuOpen ? close : menu}
            onClick={handleMenuToggle}
            alt="menu"
            width={26}
            height={26}
          />
        </div>
      </nav>
      {isMenuOpen && (
        <div className="bg-[#1c2330] w-[80%] absolute h-max right-0 bottom-0 top-12 overflow-y-auto z-[99999] rounded-l-2xl">
          <div className="overflow-y-auto h-full w-full px-8 py-10">
            <Menu />
          </div>
        </div>
      )}
    </>
  );
}
