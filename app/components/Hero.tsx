import React from "react";
import { BsDot } from "react-icons/bs";
import { IoPlay } from "react-icons/io5";

export default function Hero() {
  return (
    <div className="w-full">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 font-medium">
              <div className="flex gap-3">
                <div className="flex justify-center items-center border border-[#FFD962] bg-[#FFD962]/5 p-2 rounded-lg">
                  <span>
                    <BsDot className="text-[#FFD03F] w-9 h-9" />
                  </span>
                  <p>Job Guarantee</p>
                </div>
                <div className="flex justify-center items-center border border-[#FFD962] bg-[#FFD962]/5 p-2 rounded-lg">
                  <span>
                    <BsDot className="text-[#FFD03F] w-9 h-9" />
                  </span>
                  <p>Money Back guarantee</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex justify-center items-center border border-[#FFD962] bg-[#FFD962]/5 p-2 rounded-lg">
                  <span>
                    <BsDot className="text-[#FFD03F] w-9 h-9" />
                  </span>
                  <p>Corporate Sponsored</p>
                </div>
                <div className="flex justify-center items-center border border-[#FFD962] bg-[#FFD962]/5 p-2 rounded-lg">
                  <span>
                    <BsDot className="text-[#FFD03F] w-9 h-9" />
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
            <p className="text-xl font-medium">
              COde your journey from beginner to{" "}
              <span className="border-b border-black uppercase">top 1%</span>{" "}
              sortware developer.
            </p>
            <div className="flex gap-4">
              <div className="w-full lg:w-3/12 flex justify-center p-3 bg-[#764DEF] text-white rounded-lg">
                <p>Start 3 Month Free Trial</p>
              </div>
              <div className="flex gap-2 justify-center text-[#764DEF] border border-[#B1AAC6] p-3 rounded-lg">
                <span>
                  <IoPlay className="w-6 h-6" />
                </span>
                <p className="font-semibold">Watch Video</p>
              </div>
            </div>
          </div>
          <p>add second hero section</p>
        </div>
      </div>
    </div>
  );
}
