import Image from "next/image";
import React from "react";
import logobanner from "../../public/certificateimg/logobanner.svg";
import botbanner from "../../public/certificateimg/botbanner.svg";
import group from "../../public/certificateimg/group71.svg";
import logo from "../../public/certificateimg/logo.svg";
import user from "../../public/certificateimg/user.svg";
import arrow from "../../public/certificateimg/arrow.svg";

export default function VerefyCertificate() {
  return (
    <div className="w-full bg-[#FAF7FF] ">
      <div className="container mx-auto lg:p-5 p-0 ">
        <div className="w-full">
          <div className="flex justify-between flex-wrap-reverse lg:flex-wrap-reverse-none gap-6 lg:gap-0 lg:p-10 p-5">
            <div className="flex flex-col justify-center gap-8">
              <div className="w-full flex lg:gap-[393px] gap-[10px] flex-wrap lg:flex-nowrap relative">
                <div className=" bg-white flex gap-2 w-full lg:w-[244px] h-[40px] justify-center items-center border border-[#FFD962] bg-[#FFD962]/5 text-sm rounded-lg">
                  <div>
                  <Image
                  src={user}
                  alt="user"
                  width={24}
                  height={24}
                />
                  </div>
                  <p className="text-sm">Industry Vetted Curriculum</p>
                </div>
                <div className="flex z-20 relative gap-2 w-full lg:w-[177px] h-[44px] justify-center items-center text-center text-white bg-[#764DEF] text-sm rounded-lg">
                  <p className="text-sm">
                    Awarded post qualifying interview test
                  </p>
                  <span className="absolute -left-16 top-3 z-10">
                    <Image
                      src={arrow}
                      alt="arrow"
                      width={79}
                      height={32}
                    />
                  </span>
                </div>
              </div>
              <div className="w-full lg:text-5xl text-4xl font-semibold">
                <p className="">
                  Verified Certificate of{" "}
                  <span className="text-[#764DEF]">Achievement</span>
                </p>
              </div>
              <div className="text-lg w-full lg:w-[821px] font-medium">
                <p>
                  Add Credibility to your CV and LinkedIn profile by showcasing
                  our certification and letters, which is only awarded post
                  qualifying an interview with us.{" "}
                </p>
              </div>
              <div className="text-lg w-full lg:w-[821px] font-medium">
                <p>
                  Top performing students gets letter of recommendation by the
                  founder + Goodies
                </p>
              </div>
            </div>
            {/* /// certificate start /// */}
            <div className="w-full relative lg:w-[469px] lg:h-[455px] h-[480px] border rounded-2xl bg-white">
              <div className="flex-wrap lg:flex-nowrap">
                <div className="w-full h-full absolute">
                <Image
                  src="/certificateimg/pattern.png"
                  alt="certificate"
                  width={469}
                  height={455}
                  className="w-full lg:w-[469px] lg:h-[455px] h-[200px]"
                />
              </div>
              <div className="w-full absolute flex justify-center items-center mt-3">
                <Image
                  src="/certificateimg/Rectangle 3.png"
                  alt="certificate"
                  width={445}
                  height={423}
                  className="w-full lg:w-[445px] h-[423px]"
                />
              </div>
              <div className="w-full absolute flex justify-center items-center mt-6">
                <Image
                  src="/certificateimg/Rectangle 1809.png"
                  alt="certificate"
                  width={421}
                  height={397}
                  className="w-full lg:w-[421px] h-[397px]"
                />
              </div>
              <div className="w-full absolute left-12">
                <span>
                  <Image
                    src={logobanner}
                    alt="certificate"
                    width={76}
                    height={275}
                    className="w-[76px] lg:w-[76px] lg:h-[275px] h-[135px]"
                  />
                </span>
                <div className="w-full absolute lg:top-[32px] top-[10px] left-4">
                  <Image
                    src={logo}
                    alt="certificate"
                    width={44}
                    height={10}
                    className="w-[34px] hidden lg:w-[44px] h-[10px] ml-1 lg:ml-0"
                  />
                </div>
                <div className="w-full absolute lg:top-[120px] top-[30px] left-[1px]">
                  <Image
                    src={group}
                    alt="certificate"
                    width={74.187}
                    height={61}
                    className="w-[74.187px] h-[61px]"
                  />
                </div>
                <div className="w-full absolute lg:top-[200px] top-[80px] -left-1 ">
                  <Image
                    src={botbanner}
                    alt="certificate"
                    width={76}
                    height={275}
                    className="rotate-180 z-20"
                  />
                </div>
              </div>
             {/* /// certificate content /// */}
              <div className="absolute lg:left-36 left-0 p-2 lg:p-0 top-[135px] lg:top-[44px] text-black">
                <div className="flex flex-col lg:gap-5 gap-2">
                  <div className="flex flex-col gap-2">
                    <p className="text-xl font-semibold">
                      Coders Class Certified
                    </p>
                    <span className="border-b border-[#7B4DEF] w-[44px] h-[1.5px]"></span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[10px] font-normal">
                      This certificate is owned to
                    </p>
                    <p className="text-[12px] font-semibold">Alexender</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[10px] font-normal">
                      In recognition of their successful completion of the
                    </p>
                    <p className="text-[12px] font-semibold">
                      1 year Software Development Fellowship
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[8px] font-normal w-full lg:w-[282px]">
                      This prestigious fellowship represents an intensive
                      learning experience, encompassing over 500 hours of live
                      instruction delivered by developers from leading tech
                      giants throughout a one-year period. The program culminate
                      in a valuable 4-month externship, providing practical
                      application of your acquired knowledge.
                    </p>
                    <p className="text-[8px] font-normal w-full lg:w-[282px]">
                      Upon successful completion of a proctored live coding test
                      and a one-on-one interview, demonstrating your mastery of
                      advanced data structures, algorithms, and specialized
                      backend skills, you will be conferred with this
                      certificate.
                    </p>
                  </div>
                  <div className="flex justify-between gap-2 mt-4">
                    <p className="text-[9px] font-semibold">
                      Abhishek Sahu | Coders class
                    </p>
                    <div className="flex flex-col gap-1">
                      <p className="text-[8px] font-medium w-[122px]">
                        Issue Date: 28th Jan, 2024 Expiration Date: 23rd Jan,
                        2029 Certificate ID: yx-mdn5-6x{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
