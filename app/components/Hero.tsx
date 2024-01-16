import React from "react";
import { IoPlay } from "react-icons/io5";
import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <div className="w-full">
      <div className="container mx-auto p-4 relative">
        {/* <div className="hidden lg:block absolute top-[30%] left-[30%] transform -translate-x-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="34"
            viewBox="0 0 33 34"
            fill="none"
          >
            <path
              opacity="0.3"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.6804 2.9889C10.5364 2.54577 10.4645 2.3242 10.4801 2.1259C10.5009 1.8615 10.6259 1.6162 10.8275 1.44395C10.9788 1.31477 11.2004 1.24278 11.6435 1.09879C12.0866 0.95481 12.3082 0.882819 12.5065 0.898425C12.7709 0.919233 13.0162 1.04422 13.1884 1.24589C13.3176 1.39715 13.3896 1.61872 13.5336 2.06185L16.7783 12.0479L13.9251 12.975L10.6804 2.9889ZM11.357 18.0153L1.37086 21.26C0.92772 21.404 0.706152 21.4759 0.554897 21.6051C0.353225 21.7774 0.228237 22.0227 0.207428 22.2871C0.191822 22.4854 0.263813 22.7069 0.407798 23.1501C0.551782 23.5932 0.623773 23.8148 0.752956 23.966C0.925201 24.1677 1.1705 24.2927 1.4349 24.3135C1.6332 24.3291 1.85477 24.2571 2.29791 24.1131L12.284 20.8685L11.357 18.0153ZM17.0153 22.4856L20.26 32.4717C20.4039 32.9148 20.4759 33.1364 20.6051 33.2876C20.7774 33.4893 21.0227 33.6143 21.2871 33.6351C21.4854 33.6507 21.7069 33.5787 22.1501 33.4347C22.5932 33.2907 22.8148 33.2187 22.966 33.0896C23.1677 32.9173 23.2927 32.672 23.3135 32.4076C23.3291 32.2093 23.2571 31.9877 23.1131 31.5446L19.8684 21.5585L17.0153 22.4856ZM21.7946 17.7783L31.7807 14.5336C32.2238 14.3896 32.4454 14.3176 32.5966 14.1885C32.7983 14.0162 32.9233 13.7709 32.9441 13.5065C32.9597 13.3082 32.8877 13.0866 32.7437 12.6435C32.5997 12.2004 32.5277 11.9788 32.3986 11.8275C32.2263 11.6259 31.981 11.5009 31.7166 11.4801C31.5183 11.4645 31.2967 11.5365 30.8536 11.6804L20.8675 14.9251L21.7946 17.7783Z"
              fill="#493F67"
            />
          </svg>
        </div> */}
        {/* <div className="hidden lg:block absolute top-[93%] left-[55%] transform -translate-x-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <circle
              cx="13"
              cy="13"
              r="11.5"
              stroke="#764DEF"
              stroke-width="3"
            />
          </svg>
        </div> */}
        <div className="flex justify-between items-center flex-wrap lg:flex-nowrap gap-8 lg:gap-0">
          <div className="flex flex-col gap-8 w-full lg:w-8/12">
            <div className="flex flex-col gap-3 font-medium">
              <div className="flex gap-3 flex-wrap lg:flex-nowrap">
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
              <div className="flex gap-3 flex-wrap lg:flex-nowrap">
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
              <p className="text-5xl font-bold w-full lg:w-[72%] text-[#764DEF]">
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
