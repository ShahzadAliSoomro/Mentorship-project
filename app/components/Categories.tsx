import React from "react";
import { PiUsersThreeLight } from "react-icons/pi";

const boxes = [
  {
    id: 1,
    icon: <PiUsersThreeLight className="text-[#764DEF] w-7 h-7" />,
    text: "Entire curriculum crafted/ taught by global FAANG+ senior developers.",
  },
  {
    id: 2,
    icon: <PiUsersThreeLight className="text-[#764DEF] w-7 h-7" />,
    text: "1-no-1 mentorship, coaching and personalised career services.",
  },
  {
    id: 3,
    icon: <PiUsersThreeLight className="text-[#764DEF] w-7 h-7" />,
    text: "Learn to code faster and efficiently with AI powered tools.",
  },
  {
    id: 4,
    icon: <PiUsersThreeLight className="text-[#764DEF] w-7 h-7" />,
    text: "Recieve 110% refund within 7 days if you don't secure employment.",
  },
];

export default function Categories() {
  return (
    <div className="w-full">
      <div className="container mx-auto p-8">
        <div className="flex pt-10 justify-center">
          <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:w-10/12">
            {boxes.map((box) => (
              <div className="border border-[#D9D9D9] rounded-2xl h-52 overflow-auto relative flex flex-col justify-center">
                <div className="p-4 flex justify-center items-center">
                  <div className="flex flex-col gap-3 items-center">
                    <div className="flex justify-center items-center w-20 border rounded-lg p-2 border-[#764DEF]">
                      <span>{box.icon}</span>
                    </div>
                    <p className="text-sm lg:text-base font-medium w-full text-center">
                      {box.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
