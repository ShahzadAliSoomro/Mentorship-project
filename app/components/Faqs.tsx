"use client";
import Image from "next/image";
import React, { useState } from "react";
import Plus from "../../public/faqimg/plus.svg";
import { FiMinus } from "react-icons/fi";

const faqs = [
  {
    id: 1,
    title: "Who is eligible for the Coders Class Fellowship Program?",
    icon: Plus,
    textClick:
      "Yes, you can apply for the program. The eligibility criteria are as follows:",
  },
  {
    id: 2,
    title: "What is the duration of this program?",
    icon: Plus,
    textClick: "The duration of this program is 3 months.",
  },
  {
    id: 3,
    title: "Is this an online program?",
    icon: Plus,
    textClick: "Yes, this is an online program.",
  },
  {
    id: 4,
    title: "Are the timings flexible during the program?",
    icon: Plus,
    textClick: "Yes, the timings are flexible.",
  },
  {
    id: 5,
    title: "Will I get a certificate at the end of the program?",
    icon: Plus,
    textClick: "Yes, you will get a certificate at the end of the program.",
  },
  {
    id: 6,
    title:
      "How do I secure a scholarship to attend the Coders Class Fellowship Program?",
    icon: Plus,
    textClick:
      "You can secure a scholarship to attend the program. The scholarship amount will be awarded based on your performance in the program.",
  },
];

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <div className="container mx-auto lg:p-10 p-5">
        <div className="w-full flex gap-5 lg:p-10 p-3 flex-wrap xl:flex-nowrap">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-semibold">FAQs</h1>
            <p className="text-[#5B5766] text-[20px] w-full lg:w-[396px]">
              A comprehensive end-to-end fellowship program designed to guide.
            </p>
            <div>
              <Image
                src="/faqimg/left.png"
                alt="dotted"
                width={500}
                height={500}
                className="w-full lg:w-[396px] h-[350px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-7">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="w-full lg:w-[932px] h-auto lg:h-[auto] border border-[#C7C3D5] p-4 rounded-xl"
              >
                <div className="flex justify-between items-center">
                  <p className="text-[16px] font-medium">{faq.title}</p>
                  <div
                    onClick={() => toggleAccordion(index)}
                    className="cursor-pointer"
                  >
                    {activeIndex === index ? (
                      <FiMinus className="w-[24px] h-[24px] text-[#938F9F]" />
                    ) : (
                      <Image
                        src={faq.icon}
                        alt="arrow"
                        width={24}
                        height={24}
                      />
                    )}
                  </div>
                </div>
                {activeIndex === index && (
                  <p className="text-[#5B5766] text-[14px] mt-2">
                    {faq.textClick}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
