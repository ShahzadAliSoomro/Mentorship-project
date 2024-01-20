import React from "react";
import Foundation from "../../public/intro/found.svg";
import MentorShip from "../../public/intro/mentor.svg";
import Career from "../../public/intro/career.svg";
import Externship from "../../public/intro/exter.svg";
import Image from "next/image";

const card = [
  {
    id: 1,
    Icon: Foundation,
    title: "Foundation",
    text: "We place a strong emphasis on programming fundamentals, mirroring the priorities of elite tech companies. We offer 100% free 3 month of live training from senior developers from FAANG+ companies.",
  },
  {
    id: 2,
    Icon: Externship,
    title: "Externship",
    text: "Say goodbye to the era of making website clones! .You'll have the opportunity to engage in an externship where you'll tackle a genuine tech problem presented by a partnering company.    ",
  },
  {
    id: 3,
    Icon: MentorShip,
    title: "1-1 mentorship    ",
    text: "Collaborate with senior engineers  to build a roadmap for your target company. Receive ongoing guidance to track your progress until course completion.    ",
  },
  {
    id: 4,
    Icon: "/intro/elite.png",
    title: "Elite Instructors",
    text: "All instructors are among the Top 1% senior developers  working in the elite tech companies like google, Amazon etc.. Entire curriculum is designed and will be delivered by them. -> No last minute surprise    ",
  },
];

export default function Card() {
  return (
    <div className="w-full">
      <div className="container mx-auto p-5 pt-10 lg:pt-20">
        <div className="flex flex-col w-full">
          <div className="w-full flex gap-5 flex-wrap lg:flex-nowrap p-3">
            <div className="w-full lg:w-10/12 flex flex-col gap-5">
              <div className="flex gap-5 flex-wrap lg:flex-nowrap">
                <div className="w-full hover:border-b-[#C3B9E3] hover:border-b-4 border border-[#D7CFEE] 
                rounded-2xl lg:w-7/12 bg-rgba(253, 252, 255, 0.70) p-5 h-h-auto lg:h-[350px]">
                  <div className="flex flex-col gap-6 items-center justify-center">
                    <div>
                      <Image
                        src={Foundation}
                        alt="foundation"
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-lg font-semibold">Foundation</p>
                      <p className="text-[#5B5766] text-[15px]">
                        We place a strong emphasis on programming fundamentals,
                        mirroring the priorities of elite tech companies. We
                        offer 100% free 3 month of live training from senior
                        developers from FAANG+ companies.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full hover:border-b-[#C3B9E3] hover:border-b-4 border 
                border-[#D7CFEE] rounded-2xl lg:w-5/12 bg-rgba(253, 252, 255, 0.70) p-5 h-h-auto lg:h-[350px]">
                  <div className="flex flex-col gap-6 items-center justify-center">
                    <div>
                      <Image
                        src={Externship}
                        alt="foundation"
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-lg font-semibold">Externship</p>
                      <p className="text-[#5B5766] text-[15px]">
                        Say goodbye to the era of making website clones! .You'll
                        have the opportunity to engage in an externship where
                        you'll tackle a genuine tech problem presented by a
                        partnering company.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 flex-wrap lg:flex-nowrap">
                <div className="w-full hover:border-b-[#C3B9E3] hover:border-b-4 border
                 border-[#D7CFEE] rounded-2xl lg:w-5/12 bg-rgba(253, 252, 255, 0.70) p-5 h-h-auto lg:h-[350px]">
                  <div className="flex flex-col gap-6 items-center justify-center">
                    <div>
                      <Image
                        src={MentorShip}
                        alt="foundation"
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-lg font-semibold">1-1 mentorship</p>
                      <p className="text-[#5B5766] text-[15px]">
                        {`Collaborate with senior engineers  to build a roadmap for your target company. Receive ongoing guidance to track your progress until course completion.`}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full hover:border-b-[#C3B9E3] 
                hover:border-b-4 border border-[#D7CFEE] rounded-2xl lg:w-7/12 bg-rgba(253, 252, 255, 0.70) p-5 h-auto lg:h-[350px]">
                  <div className="flex flex-col gap-6 items-center justify-center">
                    <div>
                      <Image
                        src="/intro/elite.png"
                        alt="foundation"
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-lg font-semibold">Elite Instructors</p>
                      <p className="text-[#5B5766] text-[15px]">
                        {`All instructors are among the Top 1% senior developers  working in the elite tech companies like google, Amazon etc.. Entire curriculum is designed and will be delivered by them. -> No last minute surprise`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /// right side card /// */}
            <div className="w-full hover:border-b-[#C3B9E3] hover:border-b-4 
            flex justify-center border border-[#D7CFEE] rounded-2xl lg:w-2/12 
            bg-rgba(253, 252, 255, 0.70) p-5 h-[728px]">
              <div className="flex justify-center">
                <div className="flex flex-col gap-40 items-center justify-end">
                  <div className="">
                    <Image
                      src={Career}
                      alt="foundation"
                      width={150}
                      height={150}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-lg font-semibold">Career Services</p>
                    <p className="text-[#5B5766] text-[15px]">
                      Our success is intricately tied to your success. We
                      provide full fledged 2 months of career service, with in
                      person workshops, expert guidance to build your resume,
                      github & linkedin profile and many more.
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
