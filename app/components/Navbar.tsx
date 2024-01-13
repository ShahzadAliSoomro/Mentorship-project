"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <div className="text-black text-4xl font-bold">
            <Link href="/">Navbar</Link>
          </div>
          <button
            onClick={handleOpenMenu}
            className="lg:hidden flex pt-2 items-center"
          >
            <FiMenu className="text-3xl" />
          </button>
          <div className="hidden lg:flex gap-8 items-center justify-center">
            <Link href="/" className="text-black text-xl font-semibold">
              Curriculum
            </Link>
            <Link href="/" className="text-black text-xl font-semibold">
              Fee
            </Link>
            <Link href="/" className="text-black text-xl font-semibold">
              Admission
            </Link>
            <Link href="/" className="text-black text-xl font-semibold">
              Contact
            </Link>
            <div className="hidden lg:flex justify-center border border-[#B1AAC6] p-3 rounded-lg">
              <Link href="/" className="text-[#764DEF]">
                Sign In
              </Link>
            </div>
            <div className="hidden lg:flex justify-center p-3 bg-[#764DEF] text-white rounded-lg">
              <Link href="/">Book Free Trial Today</Link>
            </div>
            {/* Hamburger menu for mobile */}
            <div className="lg:hidden">
              {/* Add your mobile menu toggle logic here */}
            </div>
          </div>
        </div>
      </div>
      {/* /// mobile screen navbar /// */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 right-0 w-full">
          <div className="flex flex-col gap-8 p-4">
            <Link href="/" className="text-black text-xl font-semibold">
              Curriculum
            </Link>
            <Link href="/" className="text-black text-xl font-semibold">
              Fee
            </Link>
            <Link href="/" className="text-black text-xl font-semibold">
              Admission
            </Link>
            <Link href="/" className="text-black text-xl font-semibold">
              Contact
            </Link>
            <div className="w-20 justify-center border border-[#B1AAC6] p-3 rounded-lg">
              <Link href="/" className="text-[#764DEF]">
                Sign In
              </Link>
            </div>
            <div className="w-48 justify-center p-3 bg-[#764DEF] text-white rounded-lg">
              <Link href="/">Book Free Trial Today</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
