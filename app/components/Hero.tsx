import React from "react";
import { BsDot } from "react-icons/bs";
import { IoPlay } from "react-icons/io5";
import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <div className="w-full">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center flex-wrap lg:flex-nowrap gap-8 lg:gap-0">
          <div className="flex flex-col gap-8 w-full lg:w-8/12">
            <div className="flex flex-col gap-3 font-medium">
              <div className="flex gap-3">
                <div className="flex gap-2 h-[32px] justify-center items-center border border-[#FFD962] bg-[#FFD962]/5 p-2 rounded-lg">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                    >
                      <circle
                        cx="4"
                        cy="4"
                        r="4"
                        fill="url(#paint0_linear_392_117)"
                      />
                      <circle cx="4" cy="4" r="4" fill="#FFD03F" />
                      <defs>
                        <linearGradient
                          id="paint0_linear_392_117"
                          x1="1"
                          y1="-7.25021e-07"
                          x2="9.68587"
                          y2="2.83521"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FFC34C" />
                          <stop offset="1" stop-color="#FF4CA2" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <p>Job Guarantee</p>
                </div>
                <div className="flex gap-2 h-[32px] justify-center items-center border border-[#FFD962] bg-[#FFD962]/5 p-2 rounded-lg">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                    >
                      <circle
                        cx="4"
                        cy="4"
                        r="4"
                        fill="url(#paint0_linear_392_117)"
                      />
                      <circle cx="4" cy="4" r="4" fill="#FFD03F" />
                      <defs>
                        <linearGradient
                          id="paint0_linear_392_117"
                          x1="1"
                          y1="-7.25021e-07"
                          x2="9.68587"
                          y2="2.83521"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FFC34C" />
                          <stop offset="1" stop-color="#FF4CA2" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <p>Money Back guarantee</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex gap-2 h-[32px] justify-center items-center border border-[#FFD962] bg-[#FFD962]/5 p-2 rounded-lg">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                    >
                      <circle
                        cx="4"
                        cy="4"
                        r="4"
                        fill="url(#paint0_linear_392_117)"
                      />
                      <circle cx="4" cy="4" r="4" fill="#FFD03F" />
                      <defs>
                        <linearGradient
                          id="paint0_linear_392_117"
                          x1="1"
                          y1="-7.25021e-07"
                          x2="9.68587"
                          y2="2.83521"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FFC34C" />
                          <stop offset="1" stop-color="#FF4CA2" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <p>Corporate Sponsored</p>
                </div>
                <div className="flex gap-2 h-[32px] justify-center items-center border border-[#FFD962] bg-[#FFD962]/5 p-2 rounded-lg">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                    >
                      <circle
                        cx="4"
                        cy="4"
                        r="4"
                        fill="url(#paint0_linear_392_117)"
                      />
                      <circle cx="4" cy="4" r="4" fill="#FFD03F" />
                      <defs>
                        <linearGradient
                          id="paint0_linear_392_117"
                          x1="1"
                          y1="-7.25021e-07"
                          x2="9.68587"
                          y2="2.83521"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FFC34C" />
                          <stop offset="1" stop-color="#FF4CA2" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <p>Min. 80% Scholarship</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="border-t-2 w-16 border-black"></span>
              <p className="text-xl text-[#493F67] uppercase">
                Countrys Unique
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-5xl font-medium">Mentorship-Driven</p>
              <p className="text-5xl font-bold w-full lg:w-8/12">
                1 Year Software Development Fellowship
              </p>
            </div>
            <p className="text-xl font-medium ">
              COde your journey from beginner to{" "}
              <span className="border-b border-black uppercase">top 1%</span>{" "}
              sortware developer.
            </p>
            <div className="flex gap-4 flex-wrap md:flex-nowrap">
              <div className="w-full lg:w-3/12 h-[48px] flex justify-center p-3 bg-[#764DEF] text-white rounded-lg">
                <p>Start 3 Month Free Trial</p>
              </div>
              <div className="flex gap-2 h-[48px]  justify-center text-[#764DEF] border border-[#B1AAC6] p-3 rounded-lg">
                <span>
                  <IoPlay className="w-6 h-6" />
                </span>
                <p className="font-semibold">Watch Video</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12">
            <HeroVideo />
          </div>
        </div>
      </div>
    </div>
  );
}
