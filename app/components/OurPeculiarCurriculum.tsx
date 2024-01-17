"use client";
import React, { useState } from "react";
import ContainerIcon from "../../public/banner3/conIcon.svg";
import BtnIcon from "../../public/banner3/btnIcon.svg";
import DotteIcon from "../../public/banner3/dotteIcon.svg";
import ArrowClose from "../../public/banner3/arrowClose.svg";
import ArrowOpen from "../../public/banner3/arrowOpen.svg";
import Image from "next/image";

const CardContent = [
  {
    id: 1,
    btnicon: BtnIcon,
    btntext: "No tuition fees",
    title: "Sprint 1-6 - Programming Essentials!",
    icon3: DotteIcon,
    icon3text: "3 months",
    icon4: DotteIcon,
    icon4text: "Enough to clear service based MNCs",
    arrowbtn: ArrowClose,
    arrowbtn2: ArrowOpen,
    desc: "Hold on to your hats, future coding maestros! This isn't just a course; it's a thrilling 3-month journey into the heart of programming—oh, and did we mention, no tuition fees? 🎉",
    conHeading: "Why You'll Love It:",
    conCommonIcon: ContainerIcon,
    conText1: `It's not just solving problems; it's a journey through that will have you saying, "I can't believe I just did that!"`,
    conText1Color: `algorithms`,
    conText2: `are no longer a puzzle; they're your secret weapons for conquering coding challenges with flair.`,
    conText2Color: `Arrays ,Lists, Strings, Maps, Stacks and Queue`,
    conText3: `Become the maestro of . Master the art of elegant code composition and design.`,
    conText3Color: `Object-Oriented Programming (OOP)`,
    conText4: `Choose your coding crush— . It's not just learning; it's a love affair with the language of your dreams. `,
    conText4Color: `Java or TypeScript`,
    conText5: `Crafting code isn't just a task; it's an art. Understand the rhythm of time and , and let your code groove.`,
    conText5Color: `space complexity`,
    conText6: `Use AI tools to battle coding wars`,
    bor1: `Data Types`,
    bor2: `Operators`,
    bor3: `Conditional Statements`,
    bor4: `Loops`,
    bor5: `Arrays`,
    bor6: `Sorting Algorithms`,
    bor7: `Search Algorithms`,
    bor8: `Divide & Conquer`,
    bor9: `Recursion`,
    bor10: `Time & Space Complexity Recursion`,
    bor11: `AWS Codewhispher`,
    bor12: `Google Bard ChatGPT`,
  },
  {
    id: 2,
    // btnicon: BtnIcon,
    // btntext: "No tuition fees",
    title: "Sprint 7-14 :: Data Structures and Algorithms",
    icon3: DotteIcon,
    icon3text: "months",
    icon4: DotteIcon,
    icon4text: "Selective Admission via sponsorship",
    arrowbtn: ArrowClose,
    arrowbtn2: ArrowOpen,
    desc: "Hold on to your hats, future coding maestros! This isn't just a course; it's a thrilling 3-month journey into the heart of programming—oh, and did we mention, no tuition fees? 🎉",
    conHeading: "Why You'll Love It:",
    conCommonIcon: ContainerIcon,
    conText1: `It's not just solving problems; it's a journey through that will have you saying, "I can't believe I just did that!"`,
    conText1Color: `algorithms`,
    conText2: `are no longer a puzzle; they're your secret weapons for conquering coding challenges with flair.`,
    conText2Color: `Arrays ,Lists, Strings, Maps, Stacks and Queue`,
    conText3: `Become the maestro of . Master the art of elegant code composition and design.`,
    conText3Color: `Object-Oriented Programming (OOP)`,
    conText4: `Choose your coding crush— . It's not just learning; it's a love affair with the language of your dreams. `,
    conText4Color: `Java or TypeScript`,
    conText5: `Crafting code isn't just a task; it's an art. Understand the rhythm of time and , and let your code groove.`,
    conText5Color: `space complexity`,
    conText6: `Use AI tools to battle coding wars`,
    bor1: `Data Types`,
    bor2: `Operators`,
    bor3: `Conditional Statements`,
    bor4: `Loops`,
    bor5: `Arrays`,
    bor6: `Sorting Algorithms`,
    bor7: `Search Algorithms`,
    bor8: `Divide & Conquer`,
    bor9: `Recursion`,
    bor10: `Time & Space Complexity Recursion`,
    bor11: `AWS Codewhispher`,
    bor12: `Google Bard ChatGPT`,
  },
  {
    id: 3,
    btnicon: BtnIcon,
    btntext: "Externship",
    title: "Sprint 15-26 :: Domain specialisation + System Design",
    icon3: DotteIcon,
    icon3text: "4 months",
    icon4: DotteIcon,
    icon4text: "Selective Admission via sponsorship",
    arrowbtn: ArrowClose,
    arrowbtn2: ArrowOpen,
    desc: "Hold on to your hats, future coding maestros! This isn't just a course; it's a thrilling 3-month journey into the heart of programming—oh, and did we mention, no tuition fees? 🎉",
    conHeading: "Why You'll Love It:",
    conCommonIcon: ContainerIcon,
    conText1: `It's not just solving problems; it's a journey through that will have you saying, "I can't believe I just did that!"`,
    conText1Color: `algorithms`,
    conText2: `are no longer a puzzle; they're your secret weapons for conquering coding challenges with flair.`,
    conText2Color: `Arrays ,Lists, Strings, Maps, Stacks and Queue`,
    conText3: `Become the maestro of . Master the art of elegant code composition and design.`,
    conText3Color: `Object-Oriented Programming (OOP)`,
    conText4: `Choose your coding crush— . It's not just learning; it's a love affair with the language of your dreams. `,
    conText4Color: `Java or TypeScript`,
    conText5: `Crafting code isn't just a task; it's an art. Understand the rhythm of time and , and let your code groove.`,
    conText5Color: `space complexity`,
    conText6: `Use AI tools to battle coding wars`,
    bor1: `Data Types`,
    bor2: `Operators`,
    bor3: `Conditional Statements`,
    bor4: `Loops`,
    bor5: `Arrays`,
    bor6: `Sorting Algorithms`,
    bor7: `Search Algorithms`,
    bor8: `Divide & Conquer`,
    bor9: `Recursion`,
    bor10: `Time & Space Complexity Recursion`,
    bor11: `AWS Codewhispher`,
    bor12: `Google Bard ChatGPT`,
  },
  {
    id: 3,
    // btnicon: BtnIcon,
    // btntext: "Externship",
    title: "Sprint 27-30 ::Career Services + Interview Preparations",
    icon3: DotteIcon,
    icon3text: "4 months",
    icon4: DotteIcon,
    icon4text: "Selective Admission via sponsorship",
    arrowbtn: ArrowClose,
    arrowbtn2: ArrowOpen,
    desc: "Hold on to your hats, future coding maestros! This isn't just a course; it's a thrilling 3-month journey into the heart of programming—oh, and did we mention, no tuition fees? 🎉",
    conHeading: "Why You'll Love It:",
    conCommonIcon: ContainerIcon,
    conText1: `It's not just solving problems; it's a journey through that will have you saying, "I can't believe I just did that!"`,
    conText1Color: `algorithms`,
    conText2: `are no longer a puzzle; they're your secret weapons for conquering coding challenges with flair.`,
    conText2Color: `Arrays ,Lists, Strings, Maps, Stacks and Queue`,
    conText3: `Become the maestro of . Master the art of elegant code composition and design.`,
    conText3Color: `Object-Oriented Programming (OOP)`,
    conText4: `Choose your coding crush— . It's not just learning; it's a love affair with the language of your dreams. `,
    conText4Color: `Java or TypeScript`,
    conText5: `Crafting code isn't just a task; it's an art. Understand the rhythm of time and , and let your code groove.`,
    conText5Color: `space complexity`,
    conText6: `Use AI tools to battle coding wars`,
    bor1: `Data Types`,
    bor2: `Operators`,
    bor3: `Conditional Statements`,
    bor4: `Loops`,
    bor5: `Arrays`,
    bor6: `Sorting Algorithms`,
    bor7: `Search Algorithms`,
    bor8: `Divide & Conquer`,
    bor9: `Recursion`,
    bor10: `Time & Space Complexity Recursion`,
    bor11: `AWS Codewhispher`,
    bor12: `Google Bard ChatGPT`,
  },
];

export default function OurPeculiarCurriculum() {
    const [isContentVisible, setContentVisible] = useState(Array(CardContent.length).fill(false));

    const toggleContent = (index: number) => {
      const newVisibility = [...isContentVisible];
      newVisibility[index] = !newVisibility[index];
      setContentVisible(newVisibility);
    };
  return (
    <div className="w-full">
      <div className="container mx-auto p-5 pt-10">
        <div className="flex flex-col gap-10">
          <div className="flex text-6xl font-semibold justify-center items-center">
            <p>
              Our peculiar <span className="text-[#764DEF]">curriculum</span>
            </p>
          </div>
          <div className="flex justify-center items-center font-medium text-xl">
            <p className="text-center w-full lg:w-6/12 text-gray-500 mb-10">
              A comprehensive end-to-end fellowship program designed to guide
              you towards becoming a top-tier tech professional .
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {CardContent.map((card, index) => (
            <div key={card.id} className="flex justify-center">
              <div className="w-full lg:w-[1400px] bg-[#141317] rounded-2xl">
                <div className="flex flex-col gap-3 p-6">
                  <div className=" bg-white flex gap-2 w-[135px] h-[28px] justify-center items-center border border-[#FFD962] bg-[#FFD962]/5 text-sm rounded-lg">
                    <div>
                      <Image src={card.btnicon} alt="icon" />
                    </div>
                    <p className="text-sm">{card.btntext}</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-2 text-white">
                      <p className="text-xl font-semibold">{card.title}</p>
                      <div className="flex items-center gap-3">
                        <div className="flex gap-2 items-center">
                          <div>
                            <Image src={card.icon3} alt="icon" />
                          </div>
                          <p className="text-sm">{card.icon3text}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <div>
                            <Image src={card.icon4} alt="icon" />
                          </div>
                          <p className="text-sm">{card.icon4text}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-[36px] h-[36px] justify-center items-center p-1 border border-[#B9D3BD]/30 rounded-lg">
                      <button
                        onClick={() => toggleContent(index)} className={!isContentVisible[index] ? "visible" : "hidden"}
                      >
                        <Image src={card.arrowbtn} alt="icon" />
                      </button>

                      <button
                        onClick={() => toggleContent(index)} className={isContentVisible[index] ? "visible" : "hidden"}
                      >
                        <Image src={card.arrowbtn2} alt="icon" />
                      </button>
                    </div>
                  </div>

                  {isContentVisible[index] && (
                    <div>
                      <div className="w-full lg:w-[1050px] text-base">
                        <p className="text-white">{card.desc}</p>
                      </div>
                      <div className="flex justify-center text-white pt-4">
                        <div
                          className="w-full lg:w-[1396px] bg-[#1F1E24] 
                      border-[#6B667A] border-solid border rounded-xl p-9"
                        >
                          <div className="flex flex-col gap-5">
                            <p>{card.conHeading}</p>
                            <div className="flex flex-col gap-7">
                              <div className="flex justify-between flex-wrap md:flex-nowrap gap-3 text-white w-full">
                                <div className="flex gap-2 w-full lg:w-6/12">
                                  <div>
                                    <Image
                                      src={ContainerIcon}
                                      alt="icon"
                                      width={37}
                                      height={37}
                                    />
                                  </div>

                                  <p>
                                    {card.conText1}
                                    <span className="text-[#FFD03F]">
                                      {card.conText1Color}
                                    </span>{" "}
                                  </p>
                                </div>
                                <div className="flex gap-2 w-full lg:w-6/12">
                                  <div>
                                    <Image
                                      src={ContainerIcon}
                                      alt="icon"
                                      width={37}
                                      height={37}
                                    />
                                  </div>
                                  <p>
                                    {card.conText2}
                                    <span className="text-[#FFD03F]">
                                      {card.conText2Color}
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="flex justify-between flex-wrap md:flex-nowrap gap-3 text-white w-full">
                                <div className="flex gap-2 w-full lg:w-6/12">
                                  <div>
                                    <Image
                                      src={ContainerIcon}
                                      alt="icon"
                                      width={37}
                                      height={37}
                                    />
                                  </div>
                                  <p>
                                    <span className="text-[#FFD03F]">
                                      {card.conText2Color}
                                    </span>{" "}
                                    {card.conText2}
                                  </p>
                                </div>
                                <div className="flex gap-2 w-full lg:w-6/12">
                                  <div>
                                    <Image
                                      src={ContainerIcon}
                                      alt="icon"
                                      width={37}
                                      height={37}
                                    />
                                  </div>
                                  <p>
                                    {card.conText3}
                                    <span className="text-[#FFD03F]">
                                      {card.conText3Color}
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="flex justify-between flex-wrap md:flex-nowrap gap-3 text-white w-full">
                                <div className="flex gap-2 w-full lg:w-6/12">
                                  <div>
                                    <Image
                                      src={ContainerIcon}
                                      alt="icon"
                                      width={37}
                                      height={37}
                                    />
                                  </div>
                                  <p>
                                    {card.conText4}
                                    <span className="text-[#FFD03F]">
                                      {" "}
                                      {card.conText4Color}
                                    </span>
                                  </p>
                                </div>
                                <div className="flex gap-2 w-full lg:w-6/12">
                                  <div>
                                    <Image
                                      src={ContainerIcon}
                                      alt="icon"
                                      width={25}
                                      height={25}
                                    />
                                  </div>
                                  <p>{card.conText6}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full text-white pt-4 flex-wrap lg:flex-nowrap">
                        <div className="flex flex-col  gap-4">
                          <div className="flex flex-wrap lg:flex-nowrap gap-2">
                            <div className="h-[28px] w-[96px] border-[#6B667A] border-solid border items-center rounded-lg flex justify-center">
                              <span className="text-xs">{card.bor1}</span>
                            </div>
                            <div className="h-[28px] w-[89px] border-[#6B667A] border-solid border items-center rounded-lg flex justify-center">
                              <span className="text-xs">{card.bor2}</span>
                            </div>
                            <div className="h-[28px] w-[178px] border-[#6B667A] border-solid border items-center rounded-lg flex justify-center">
                              <span className="text-xs"> {card.bor3}</span>
                            </div>
                            <div className="h-[28px] w-[64px] border-[#6B667A] border-solid border items-center rounded-lg flex justify-center">
                              <span className="text-xs">{card.bor4}</span>
                            </div>
                            <div className="h-[28px] w-[65px] border-[#6B667A] border-solid border items-center rounded-lg flex justify-center">
                              <span className="text-xs">{card.bor5}</span>
                            </div>
                            <div className="h-[28px] w-[145px] border-[#6B667A] border-solid border items-center rounded-lg flex justify-center">
                              <span className="text-xs">{card.bor6}</span>
                            </div>
                            <div className="h-[28px] w-[143px] border-[#6B667A] border-solid border items-center rounded-lg flex justify-center">
                              <span className="text-xs">{card.bor7}</span>
                            </div>
                            <div className="h-[28px] w-[135px] border-[#6B667A] border-solid border items-center rounded-lg flex justify-center">
                              <span className="text-xs">{card.bor8}</span>
                            </div>
                            <div className="h-[28px] w-[90px] border-[#6B667A] border-solid border items-center rounded-lg flex justify-center">
                              <span className="text-xs">{card.bor9}</span>
                            </div>
                          </div>
                          <div className="flex gap-2 flex-wrap lg:flex-nowrap">
                            <div className="h-[28px] w-[255px] border-[#6B667A] border-solid border items-center rounded-lg flex justify-center">
                              <span className="text-xs"> {card.bor10}</span>
                            </div>
                            <div className="h-[28px] w-[151px] border-[#6B667A] border-solid border items-center rounded-lg flex justify-center">
                              <span className="text-xs">{card.bor11}</span>
                            </div>
                            <div className="h-[28px] w-[164px] border-[#6B667A] border-solid border items-center rounded-lg flex justify-center">
                              <span className="text-xs">{card.bor12}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
