import React from "react";
import Banner from "../../public/scholorship/banner.svg";
import Image from "next/image";
import Dotted from "../../public/scholorship/dotted.svg";
import Good from "../../public/scholorship/right.svg";

export default function ScholorShip() {
  return (
    <div className="w-full">
      <div className="container mx-auto p-5">
        <div className="flex justify-center flex-wrap xl:flex-nowrap pt-4">
          <div className="w-full lg:w-[1360px] md:w-[90%] h-auto xl:h-[514px] border rounded-3xl bg-[#141317]">
            <div className="flex relative flex-col xl:flex-row lg:gap-4">
              {/* /// card /// */}
              {/* <div className="w-full relative"> */}
              {/* <div className=""> */}
              <Image
                src={Banner}
                alt="banner"
                width={376}
                height={403}
                className="w-full lg:w-[376px] h-[403px] lg:ml-12 ml-0 "
              />
              {/* </div> */}
              <div className="flex flex-col absolute xl:top-[10%] lg:top-[5%] top-[5%] xl:left-[7%] lg:left-[9%] md:left-[27%] sm:left-[7%] left-[7%]">
                <div className="absolute lg:left-32 left-28 bg-white flex gap-2 w-[185px] h-[32px] justify-center items-center border border-[#FFD962] bg-[#FFD962]/5 text-sm rounded-lg">
                  <div>
                    <Image src={Dotted} alt="icon" />
                  </div>
                  <p className="text-sm">Min 80% Scholorship</p>
                </div>
                <div className="mt-20">
                  <div className="flex justify-center items-center ">
                    <div className="flex flex-col gap-5 justify-center items-center">
                      <p className="text-[#141317] text-3xl line-through">
                        {" "}
                        ₹2,80,000
                      </p>
                      <div className="text-[#141317] text-3xl font-bold flex gap-2">
                        <p>
                          ₹56,000{" "}
                          <span className="text-lg font-semibold">
                            {" "}
                            /Max Pay
                          </span>
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-2 text-white">
                          <span>
                            <Image
                              src={Good}
                              alt="icon"
                              width={22.008}
                              height={22.008}
                            />
                          </span>
                          <div className="flex text-lg">
                            <p>
                              Pay EMI of{" "}
                              <span className="text-lg font-semibold">
                                ₹4999 /Mo x 12
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2 text-white">
                          <span>
                            <Image
                              src={Good}
                              alt="icon"
                              width={22.008}
                              height={22.008}
                            />
                          </span>
                          <div className="flex text-lg">
                            <p>
                              Pay EMI of{" "}
                              <span className="text-lg font-semibold">
                                ₹2399 /Mo x 24
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2 text-white">
                          <span>
                            <Image
                              src={Good}
                              alt="icon"
                              width={22.008}
                              height={22.008}
                            />
                          </span>
                          <div className="flex text-lg">
                            <p>*Flexible EMI is also avaliable</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
              {/* /// card content /// */}
              <div className="w-full text-white lg:p-10 p-5">
                <div className="flex flex-col flex-wrap lg:flex-nowrap gap-5 pt-3">
                  <p className="text-3xl font-bold">
                    15 months fellowship program
                  </p>
                  <p className="text-[18px] font-normal w-full lg:w-[714px]">
                    All students admitted to this fellowship receive a minimum
                    of 80% scholarship to cover their tution.
                  </p>
                  <div className="w-full lg:w-[836px] h-auto lg:h-[190px] bg-[#1F1E24] border border-[#6B667A] rounded-2xl">
                    <div className="flex flex-col gap-5 p-5">
                      <p className="text-[18px]">
                        We offer{" "}
                        <span className="text-[#FFD03F]">
                          3 months free tria
                        </span>{" "}
                        l to our fellowship program because
                      </p>
                      <div className="w-full flex ">
                        <div className="w-full lg:w-1/2">
                          <div className="flex gap-1">
                            <span>1.</span>
                            <p className="text-[16px]">
                              We don't judge based on your prior track. We only
                              admit those students whom We deem fit based on a 3
                              months foundation program.
                            </p>
                          </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                          <div className="flex gap-1">
                            <span>2.</span>
                            <p className="text-[16px]">
                              Building a strong coding foundation: 3 months free
                              program is enough to crack coding rounds in most
                              service based firms.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div
                          className="flex justify-center items-center p-2 border w-full lg:w-[745px] h-[32px]
                    rounded-md border-t-[#667A75] border-r-[#667A75]  border-b-[#141317] border-l-[#667A75]"
                        >
                          <p className="lg:text-[13px] text-[8px]">
                            Mastering the basics in coding is the compass that
                            guides you through the intricate terrain of advanced
                            programming
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full mt-3 lg:w-[266px] h-[56px] bg-[#FFD03F] p-5 flex justify-center items-center rounded-xl">
                    <p className="text-[18px] font-bold text-[#141317]">
                      Apply for Scholarship
                    </p>
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
