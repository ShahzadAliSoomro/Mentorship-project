import Link from "next/link";
import React from "react";
import Email from "../../../public/footer/email.svg";
import Phone from "../../../public/footer/phone.svg";
import Location from "../../../public/footer/location.svg";
import Logo from "../../../public/footer/logofooter.svg";
import Facebook from "../../../public/footer/facebook.svg";
import Twitter from "../../../public/footer/twitter.svg";
import Youtube from "../../../public/footer/youtub.svg";
import Instagram from "../../../public/footer/insta.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full bg-[#141317] text-white">
      <div className="container mx-auto lg:p-5 p-3">
        <footer className=" text-white">
          <div className="container px-6 py-12 mx-auto">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5">
              <div className="sm:col-span-2 space-y-7">
                <div>
                  <Image
                    src={Logo}
                    alt="logo"
                    width={100}
                    height={100}
                    className=""
                  />
                </div>
                <div className="text-[14px] w-full lg:w-[318px]">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa.
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <Image
                    src={Instagram}
                    alt="instagram"
                    width={32}
                    height={32}
                    className=""
                  />
                  <Image
                    src={Youtube}
                    alt="phone"
                    width={32}
                    height={32}
                    className=""
                  />
                  <Image
                    src={Twitter}
                    alt="location"
                    width={32}
                    height={32}
                    className=""
                  />
                  <Image
                    src={Facebook}
                    alt="location"
                    width={32}
                    height={32}
                    className=""
                  />
                </div>
                {/* /// mobile hidden /// */}
                <div className="relative hidden lg:block">
                  <div className="">
                    <input
                      id="email"
                      type="text"
                      className="px-4 py-2 border rounded-md bg-transparent w-full lg:w-[488px] h-auto lg:h-[64px] focus:outline-none"
                      placeholder="Enter your email address"
                    />
                    <button className="absolute right-[66px] top-[7px] w-full px-6 py-2.5 text-[20px] font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-[#764DEF] rounded-md hover:bg-[#764DEF]/80 focus:ring ">
                      Subscribe
                    </button>
                  </div>
                </div>
                {/* // lg hidden // */}
                <div className="relative lg:hidden">
                  <div className="relative flex items-center">
                    <input
                      id="email"
                      type="text"
                      className="px-4 py-2 border rounded-md bg-transparent w-full lg:w-[488px] h-[64px] focus:outline-none"
                      placeholder="Enter your email address"
                    />
                    <button className=" absolute right-[6px] top-[7px] px-6 py-2.5 text-[20px] font-medium tracking-wider text-white transition-colors duration-300 transform focus:outline-none bg-[#764DEF] rounded-md hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-normal text-[20px] ">Our Service</p>

                <div className="flex flex-col items-start mt-5 space-y-4 text-[16px] text-[#E2E7E9]">
                  <Link
                    href="#"
                    className=" transition-colors duration-300 dark:hover:text-blue-400 hover:underline hover:text-[#764DEF] dark:text-gray-300"
                  >
                    UI/UX Design
                  </Link>
                  <Link
                    href="#"
                    className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#764DEF]"
                  >
                    Digital Art
                  </Link>
                  <Link
                    href="#"
                    className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#764DEF]"
                  >
                    Branding
                  </Link>
                  <Link
                    href="#"
                    className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#764DEF]"
                  >
                    Advertising
                  </Link>
                  <Link
                    href="#"
                    className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#764DEF]"
                  >
                    Creative Things
                  </Link>
                </div>
              </div>
              <div>
                <p className="font-normal text-[20px] ">More Links</p>

                <div className="flex flex-col items-start mt-5 space-y-4 text-[16px] text-[#E2E7E9]">
                  <Link
                    href="#"
                    className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#764DEF]"
                  >
                    Proejct Portfolio
                  </Link>
                  <Link
                    href="#"
                    className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#764DEF]"
                  >
                    Ongoing Event
                  </Link>
                  <Link
                    href="#"
                    className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#764DEF]"
                  >
                    Blogs
                  </Link>
                  <Link
                    href="#"
                    className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#764DEF]"
                  >
                    Newsletter
                  </Link>
                </div>
              </div>

              <div>
                <p className="font-normal text-[20px] ">Reach Us</p>

                <div className="flex flex-col items-start mt-5 space-y-4 text-[16px] text-[#E2E7E9]">
                  <div className="flex gap-2 items-center">
                    <Image src={Email} alt="" width={24} height={24} />
                    <Link
                      href="#"
                      className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#764DEF]"
                    >
                      info@codersclass.com
                    </Link>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image src={Phone} alt="" width={24} height={24} />
                    <Link
                      href="#"
                      className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#764DEF]"
                    >
                      (021) 123 988 988
                    </Link>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image src={Location} alt="" width={24} height={24} />
                    <Link
                      href="#"
                      className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#764DEF]"
                    >
                      3891 Ranchview 765-8764 Dr. Richardson California 62639
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between my-14 items-center flex-wrap lg:flex-nowrap gap-5 lg:gap-0">
              <p className="text-[16px]">
                Copyright © 2024 Coders Class. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-[16px]">
                <p>Privacy Policy</p>
                <span className="text-[#FFFFFF]/40">|</span>
                <p>Terms & Conditions</p>
                <span className="text-[#FFFFFF]/40">|</span>
                <p>Refund Policy</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
