import React from "react";
import Dotted from "../../../public/second/dotted.svg";
import Bag from "../../../public/second/bag.svg";
import BeRelevand from "../../../public/second/berelevand.svg";
import Image from "next/image";

export default function Boxes() {
  return (
    <div className="w-full">
      <div className="conatiner mx-auto p-5">
        <div className="flex flex-col lg:flex-row flex-wrap lg:flex-nowrap justify-center pt-10">
          <div className="w-full lg:w-[1330px] flex gap-5">
            <div className="flex flex-col gap-5 flex-wrap lg:flex-nowrap">
              <div className="flex gap-5 flex-wrap lg:flex-nowrap">
                <div className="w-full lg:w-1/2 p-7 rounded-2xl">
                  <div className="flex flex-col gap-5">
                    <p
                      className="text-[#141317] text-[36px] font-medium
                        "
                    >
                      Unlock the benefits of{" "}
                      <span className="text-[#764DEF]">partnering with us</span>{" "}
                    </p>
                    <p className="text-[#5B5766] text-[18px] font-medium">
                      Many engineering colleges lack structured coding clubs,
                      and some have none, operating without industry support.
                      Our goal is to transform these clubs into innovation hubs,
                      nurturing a programmatic and entrepreneurial mindset.
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 p-7 border border-solid border-[#D7CFEE] rounded-2xl">
                  <div className="flex flex-col gap-5">
                    <div className=" bg-white flex gap-2 w-full lg:w-[244px] h-[40px] justify-center items-center border border-[#FFD962] bg-[#FFD962]/5 text-sm rounded-lg">
                      <div>
                        <Image src={Dotted} alt="dotted" width={8} height={8} />
                      </div>
                      <p className="text-sm">College & Students Benefits</p>
                    </div>
                    <p
                      className="text-[#141317] text-[36px] font-medium
                        "
                    >
                      Bag PPOs/Internship{" "}
                    </p>
                    <div className="flex gap-5 w-full flex-wrap lg:flex-nowrap">
                      <div className="w-full lg:w-7/12">
                        <p className="text-[#5B5766] text-[18px] font-medium">
                          Engage in continuous hackathons, including those
                          sponsored by prominent companies, to demonstrate your
                          coding prowess and secure Pre-Placement Offers from
                          top-tier firms
                        </p>
                      </div>
                      <div className="w-full lg:w-5/12">
                        <div className="flex justify-end mt-[75px]">
                          <Image src={Bag} alt="bag" width={200} height={200} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-5 flex-wrap lg:flex-nowrap">
                <div className="w-full lg:w-1/2 p-7 border border-solid border-[#D7CFEE] rounded-2xl">
                  <div className="flex flex-col gap-5">
                    <div className=" bg-white flex gap-2 w-full lg:w-[244px] h-[40px] justify-center items-center border border-[#FFD962] bg-[#FFD962]/5 text-sm rounded-lg">
                      <div>
                        <Image src={Dotted} alt="dotted" width={8} height={8} />
                      </div>
                      <p className="text-sm">College & Students Benefits</p>
                    </div>
                    <p
                      className="text-[#141317] text-[36px] font-medium
                        "
                    >
                      Be Relevant{" "}
                    </p>
                    <div className="flex w-full gap-5 flex-wrap lg:flex-nowrap">
                      <div className="w-full lg:w-7/12">
                        <p className="text-[#5B5766] text-[18px] font-medium">
                          Tech is a fastest evolving sector. We help you keep
                          relevant by providing the group mentorship. We help
                          you craft and update the program as and when required.
                        </p>
                      </div>
                      <div className="w-full lg:w-5/12">
                        <div className="flex justify-end mt-[40px]">
                          <Image
                            src={BeRelevand}
                            alt="bag"
                            width={200}
                            height={200}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 p-7 border border-solid border-[#D7CFEE] rounded-2xl">
                  <div className="flex flex-col gap-5 flex-wrap lg:flex-nowrap">
                    <div className=" bg-white flex gap-2 w-full lg:w-[244px] h-[40px] justify-center items-center border border-[#FFD962] bg-[#FFD962]/5 text-sm rounded-lg">
                      <div>
                        <Image src={Dotted} alt="dotted" width={8} height={8} />
                      </div>
                      <p className="text-sm">College & Students Benefits</p>
                    </div>
                    <p
                      className="text-[#141317] text-[36px] font-medium
                        "
                    >
                      Strong Branding{" "}
                    </p>
                    <div className="w-full flex gap-5 flex-wrap lg:flex-nowrap">
                      <div className="w-full lg:w-7/12">
                        <p className="text-[#5B5766] text-[18px] font-medium">
                          We are working to expand the reach of this club across
                          engineering colleges nationally, offering you the
                          opportunity to establish your personal and college
                          brand nationally through meetup & national hackathons.
                        </p>
                      </div>
                      <div className="w-full lg:w-5/12">
                        <div className="flex mt-[40px]">
                          <Image
                            src="/second/strong.png"
                            alt="bag"
                            width={300}
                            height={300}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full relative lg:w-[1330px] rounded-2xl border border-[#D7CFEE]  p-10">
                <div className="flex justify-between flex-wrap lg:flex-nowrap justify-items-center">
                  <div className="flex flex-col gap-5">
                    <div className=" bg-white flex gap-2 w-full lg:w-[244px] h-[40px] justify-center items-center border border-[#FFD962] bg-[#FFD962]/5 text-sm rounded-lg">
                      <div>
                        <Image src={Dotted} alt="dotted" width={8} height={8} />
                      </div>
                      <p className="text-sm">College & Students Benefits</p>
                    </div>
                    <p
                      className="text-[#141317] text-[36px] font-medium
                        "
                    >
                      Free 3 months live training{" "}
                    </p>

                    <p className="text-[#5B5766] text-[16px] w-full lg:w-[924px] font-medium">
                      Foundation: We place a strong emphasis on programming
                      fundamentals, mirroring the priorities of elite tech
                      companies. To proof our commitment, we offer 100% free 3
                      months of live training from senior developers from FAANG+
                      companies, which is enough to start your coding journey.
                    </p>
                  </div>
                  <div>
                    <Image
                      src="/second/elite.png"
                      alt="bag"
                      width={250}
                      height={250}
                    />
                  </div>
                </div>
                <div className="w-[230px] absolute -bottom-12 right-10 lg:w-[430px] h-auto lg:h-[100px] bg-white rounded-2xl flex justify-center items-center">
                  <div className="w-full lg:w-[416px] bg-[#764DEF] p-6 rounded-2xl">
                    <div className="flex gap-3 items-center">
                      <p className="text-white lg:text-[15px] text-[10px] font-medium">
                        Become your club ambassador
                      </p>
                      <button className="w-full lg:w-[132px] h-[40px] bg-transparent border border-white border-b-2 rounded-xl">
                        <span className="text-white lg:text-[14px] text-[10px] font-semibold">
                          Register Here
                        </span>
                      </button>
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
