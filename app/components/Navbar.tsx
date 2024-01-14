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
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="113"
                height="26"
                viewBox="0 0 113 26"
                fill="none"
              >
                <g clip-path="url(#clip0_392_62)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.61364 17.9454C8.76374 17.9454 7.94865 17.6078 7.34768 17.0069C6.74671 16.4059 6.40909 15.5908 6.40909 14.7409V0H0V14.7409C0 20.0502 4.30435 24.3545 9.61364 24.3545H16.6636V17.9454H9.61364ZM28.8409 6.40909C28.0834 6.40909 27.3333 6.55829 26.6335 6.84817C25.9337 7.13804 25.2978 7.56292 24.7622 8.09855C24.2266 8.63417 23.8017 9.27005 23.5118 9.96988C23.2219 10.6697 23.0727 11.4198 23.0727 12.1773C23.0727 12.9348 23.2219 13.6848 23.5118 14.3847C23.8017 15.0845 24.2266 15.7204 24.7622 16.256C25.2978 16.7916 25.9337 17.2165 26.6335 17.5064C27.3333 17.7963 28.0834 17.9454 28.8409 17.9454C30.3707 17.9454 31.8379 17.3377 32.9196 16.256C34.0014 15.1742 34.6091 13.7071 34.6091 12.1773C34.6091 10.6475 34.0014 9.18029 32.9196 8.09855C31.8379 7.01681 30.3707 6.40909 28.8409 6.40909ZM16.6636 12.1773C16.6636 5.45221 22.1159 0 28.8409 0C35.566 0 41.0182 5.45221 41.0182 12.1773C41.0182 18.9023 35.566 24.3545 28.8409 24.3545C22.1159 24.3545 16.6636 18.9023 16.6636 12.1773ZM98.0591 6.40909C96.5293 6.40909 95.0621 7.01681 93.9804 8.09855C92.8986 9.18029 92.2909 10.6475 92.2909 12.1773C92.2909 13.7071 92.8986 15.1742 93.9804 16.256C95.0621 17.3377 96.5293 17.9454 98.0591 17.9454C99.5889 17.9454 101.056 17.3377 102.138 16.256C103.22 15.1742 103.827 13.7071 103.827 12.1773C103.827 10.6475 103.22 9.18029 102.138 8.09855C101.056 7.01681 99.5889 6.40909 98.0591 6.40909ZM85.8818 12.1773C85.8818 5.45221 91.334 0 98.0591 0C104.784 0 110.236 5.45221 110.236 12.1773C110.236 18.9023 104.784 24.3545 98.0591 24.3545C91.334 24.3545 85.8818 18.9023 85.8818 12.1773ZM54.4773 0C47.7522 0 42.3 5.45221 42.3 12.1773C42.3 18.9023 47.7522 24.3545 54.4773 24.3545H72.4227C73.6847 24.3545 74.9018 24.1623 76.0464 23.8059L79.4727 25.6364L83.1695 18.712C84.1086 16.9493 84.5998 14.9827 84.6 12.9855V12.1773C84.6 5.45221 79.1478 0 72.4227 0H54.4773ZM78.1909 12.1773C78.1909 10.6475 77.5832 9.18029 76.5014 8.09855C75.4197 7.01681 73.9526 6.40909 72.4227 6.40909H54.4773C53.7198 6.40909 52.9697 6.55829 52.2699 6.84817C51.5701 7.13804 50.9342 7.56292 50.3986 8.09855C49.8629 8.63417 49.438 9.27005 49.1482 9.96988C48.8583 10.6697 48.7091 11.4198 48.7091 12.1773C48.7091 12.9348 48.8583 13.6848 49.1482 14.3847C49.438 15.0845 49.8629 15.7204 50.3986 16.256C50.9342 16.7916 51.5701 17.2165 52.2699 17.5064C52.9697 17.7963 53.7198 17.9454 54.4773 17.9454H72.4227C73.9448 17.9455 75.4052 17.3439 76.4857 16.2719C77.5661 15.1998 78.1791 13.7442 78.1909 12.2221V12.1773Z"
                    fill="#141317"
                  />
                  <path
                    d="M112.8 1.60227C112.8 2.02722 112.631 2.43477 112.331 2.73525C112.03 3.03573 111.623 3.20454 111.198 3.20454C110.773 3.20454 110.365 3.03573 110.065 2.73525C109.764 2.43477 109.595 2.02722 109.595 1.60227C109.595 1.17732 109.764 0.769779 110.065 0.469295C110.365 0.16881 110.773 0 111.198 0C111.623 0 112.03 0.16881 112.331 0.469295C112.631 0.769779 112.8 1.17732 112.8 1.60227Z"
                    fill="#141317"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_392_62">
                    <rect width="112.8" height="25.6364" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
          <button
            onClick={handleOpenMenu}
            className="md:hidden flex pt-2 items-center"
          >
            <FiMenu className="text-3xl" />
          </button>
          <div className="hidden md:flex gap-8 items-center justify-center">
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
            <div className="hidden lg:flex justify-center items-center text-[#764DEF] border border-[#B1AAC6] p-3 h-[40px] rounded-lg">
              <Link href="/" className="">
                Sign In
              </Link>
            </div>
            <div className="hidden lg:flex justify-center items-center p-3 bg-[#764DEF] text-white h-[40px] rounded-lg">
              <Link href="/">Book Free Trial Today</Link>
            </div>
          </div>
        </div>
      </div>
      {/* /// mobile screen navbar /// */}
      {isOpen && (
        <div className="md:hidden absolute top-16 right-0 w-full">
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
