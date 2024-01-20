import React from "react";
import { IoPlay } from "react-icons/io5";

export default function Hero() {
  return (
    <div
      className="w-full"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.36) 50.22%, #FBF7FF 100%)",
      }}
    >
      <div className="container mx-auto p-5 ">
        <div className="w-full flex justify-center">
          <div className="flex flex-col gap-48 justify-center items-center">
            <div className="flex flex-col justify-center text-center gap-10 pt-10">
              <div className="flex items-center justify-center gap-4 pt-10">
                <span className="border-t-4 w-[27px] border-[#FFD03F]"></span>
                <p className="lg:text-[20px] text-[14px] font-medium text-[#493F67] uppercase">{`Country’s First and Only`}</p>
                <span className="border-t-4 w-[27px] border-[#FFD03F]"></span>
              </div>
              <div className="lg:text-[48px] text-[32px] font-normal w-full lg:w-[721px]">
                Empowering Coding Culture in{" "}
                <span className="text-[#764DEF]">Engineering Colleges</span>{" "}
              </div>
              <p className="text-[#393643] text-[24px]">
                Partner with us to{" "}
                <span className="text-[#764DEF] border-b border-[#764DEF]">
                  launch
                </span>{" "}
                coding club in your engineering college for FREE.
              </p>
              <div className="flex justify-center gap-4 flex-wrap md:flex-nowrap">
                <div className="w-full lg:w-3/12 h-[48px] flex justify-center p-3 bg-[#764DEF] text-white rounded-lg">
                  <p>Start your coders club</p>
                </div>
                <div className="flex gap-2 h-[48px]  justify-center text-[#764DEF] border border-[#B1AAC6] p-3 rounded-lg">
                  <span>
                    <IoPlay className="w-6 h-6" />
                  </span>
                  <p className="font-semibold">Watch Video</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[692px]">
              <p className="text-[#666274] text-center">
                “Many engineering colleges lack structured coding clubs, and
                some have none, operating without industry support. Our goal is
                to transform these clubs into innovation hubs, nurturing a
                programmatic and entrepreneurial mindset.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
