import React from "react";
import Dotted from "../../public/profession/dotted.svg";
import Rounded from "../../public/profession/rounded.svg";
import Green from "../../public/profession/green.svg";
import Red from "../../public/profession/red.svg";
import Image from "next/image";

export default function Professional() {
  return (
    <div className="w-full">
      <div className="container mx-auto p-5 pt-10">
        <div className="w-full lg:w-[1360px] p-10">
          <div className="flex flex-col gap-5 pl-5 ">
            <div className="flex items-center gap-14 relative">
              <div className="">
                <div className="w-full lg:w-[400px] border-b-4 h-auto lg:h-[112px] p-7 rounded-2xl border border-[#C1BDCC]">
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <div className="flex">
                      <p className="text-[18px] font-medium">
                        Apply for the program by paying{" "}
                        <span className="text-[#764DEF]">₹4999</span>{" "}
                      </p>
                    </div>
                    <div className="flex gap-2 w-[159px] h-[32px] justify-center items-center border border-[#FFD962] bg-[#FFD962]/5 p-2 rounded-lg">
                      <span>
                        <Image src={Dotted} alt="dotted" width={8} height={8} />
                      </span>
                      <p className="text-[15px]">100% Refundable</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center absolute left-[394px] top-[52px]">
                <span>
                  <Image src={Rounded} alt="rounded" width={12} height={12} />
                </span>
                <span className="w-[45px] border border-b"></span>
                <span>
                  <Image src={Rounded} alt="rounded" width={12} height={12} />
                </span>
              </div>
              {/* // second card /// */}
              <div className="">
                <div className="w-full border-b-4 lg:w-[400px] h-auto lg:h-[112px] p-7 rounded-2xl border border-[#C1BDCC]">
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <div className="flex text-center">
                      <p className="text-[18px] font-medium">
                        Attain Free{" "}
                        <span className="text-[#764DEF]">3 Month</span> Live
                        programming foundation course{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center absolute right-[341px] top-[52px]">
                <span>
                  <Image src={Rounded} alt="rounded" width={12} height={12} />
                </span>
                <span className="w-[45px] border border-b"></span>
                <span>
                  <Image src={Rounded} alt="rounded" width={12} height={12} />
                </span>
              </div>
              {/* /// thared card /// */}
              <div className="flex flex-col">
                <div className="w-full border-b-4 lg:w-[400px] h-auto lg:h-[112px] p-7 rounded-2xl border border-[#C1BDCC]">
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <div className="flex text-center">
                      <p className="text-[18px] font-medium">
                        Undergo{" "}
                        <span className="text-[#764DEF]">1:1 Interview </span>{" "}
                        Bases on above 3 month course{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center absolute right-[141px] top-[105px]">
                  <span>
                    <Image src={Rounded} alt="rounded" width={12} height={12} />
                  </span>
                  <span className="w-[1.2px] h-[41px] border-l-2"></span>
                  <div className="flex items-center absolute top-[51px] right-[5px]">
                    <div className="flex items-center flex-col absolute -top-[5px] -left-[10.5rem]">
                      <span>
                        <Image
                          src={Rounded}
                          alt="rounded"
                          width={12}
                          height={12}
                        />
                      </span>
                      <span className="w-[1.5px] h-[32px] border-l-2"></span>
                      <div className="flex flex-col">
                        <div className="flex justify-center">
                          <div className="flex flex-col justify-center">
                            <span className="w-[166.5px] h-[1.5px] border-b-2"></span>
                            <span className="w-[1.5px] h-[26px] border-[#1BA96E] border-l"></span>
                            <div className="w-[250px] absolute left-[-7.5rem] flex gap-2 justify-center items-center h-[28px] bg-[#F5FCF9] rounded-xl border-[#1BA96E] border-b-2">
                              <span>
                                <Image
                                  src={Green}
                                  alt="red"
                                  width={20}
                                  height={20}
                                />
                              </span>
                              <span className="text-[#1BA96E] text-[16px]">
                                If selected AND interested
                              </span>
                            </div>
                            <span className="w-[1.5px] h-[26px] mt-7 border-[#C1BDCC] border-l"></span>
                          </div>

                          <div className="flex">
                            <span className="w-[166.5px] h-[1.5px] border-b-2"></span>
                            {/* <span className="w-[1.5px] h-[26px] border-[#E53131] border-l"></span> */}
                            <div className="flex flex-col">
                              <span className="w-[1.5px] h-[26px] border-[#E53131] border-l"></span>
                              <div className="w-[301px] absolute top-[4.5rem] right-[-10.5rem] flex gap-2 justify-center items-center h-[28px] bg-[#FCF5F5] rounded-xl border-[#E53131] border-b-2">
                                <span>
                                  <Image
                                    src={Red}
                                    alt="red"
                                    width={20}
                                    height={20}
                                  />
                                </span>
                                <span className="text-[#E53131] text-[16px]">
                                  If Not selected OR Not interested
                                </span>
                              </div>
                              <span className="w-[1.5px] mt-7 h-[26px] border-[#C1BDCC] border-l"></span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-10 absolute top-[123px] -left-[10.5rem]">
                          <div className="flex gap-5 absolute top-0 -left-[2.5rem]">
                            <div className="w-full lg:w-[400px] h-auto lg:h-[128px] mt-[2px] p-5 rounded-2xl border-b-4 border border-[#C1BDCC]">
                              <div className="flex flex-col gap-2 justify-center items-center">
                                <div className="flex">
                                  <p className="text-[16px] font-normal text-center">
                                    Enrol in the fellowship  program by paying
                                    remaining amount post scholarship
                                  </p>
                                </div>
                                <div className="flex gap-2 w-full lg:w-[182px] h-[32px] justify-center items-center border border-[#FFD962] bg-[#FFD962]/5 p-2 rounded-lg">
                                  <span>
                                    <Image
                                      src={Dotted}
                                      alt="dotted"
                                      width={8}
                                      height={8}
                                    />
                                  </span>
                                  <p className="text-[15px]">
                                    Min 80% Scholarship
                                  </p>
                                </div>
                                <div className="flex flex-col items-center mt-1">
                                  <span>
                                    <Image
                                      src={Rounded}
                                      alt="rounded"
                                      width={12}
                                      height={12}
                                    />
                                  </span>
                                  <span className="w-[1.5px] h-[32px] border-l-2"></span>
                                  <div className="flex items-center -mt-[6px] ml-[170px]">
                                    <span className="w-[159.974px] h-[1.5px] border-t-2"></span>
                                    <span className="">
                                      <Image
                                        src={Rounded}
                                        alt="rounded"
                                        width={12}
                                        height={12}
                                      />
                                    </span>
                                    <div className="flex absolute top-[172px] left-[116px] flex-col justify-center items-center">
                                      <span className="w-[1.5px] h-[32px] border-l-2"></span>
                                      <div className="w-full lg:w-[499px] h-auto lg:h-[112px] flex justify-center rounded-2xl border-b-4 border border-[#764DEF]">
                                        <div className="flex flex-col gap-2 justify-center items-center">
                                          <div className="">
                                            <p className="text-[18px] font-medium text-[#764DEF]">
                                              Get a relevant job or 100% tuition
                                              refund
                                            </p>
                                          </div>
                                          <div className="flex gap-2 w-[195px] h-[32px] justify-center items-center border border-[#FFD962] bg-[#FFD962]/5 p-2 rounded-lg">
                                            <span>
                                              <Image
                                                src={Dotted}
                                                alt="dotted"
                                                width={8}
                                                height={8}
                                              />
                                            </span>
                                            <p className="text-[15px]">
                                              No Terms & Conditons
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="w-full lg:w-[296px] flex items-center h-[68px] border border-b-4 rounded-2xl border-[#C1BDCC] p-7">
                              <p className="text-[16px] font-semibold">
                                <span className="text-[#E53131]">₹ 4999</span>{" "}
                                refund within
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <span className="w-[453.5px]  border border-r-2"></span>
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
