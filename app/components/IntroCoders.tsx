import React from "react";
import Card from "./Card";

export default function IntroCoders() {
  return (
    <div className="w-full">
      <div className="container mx-auto p-4 pt-10">
        <div className="flex flex-col gap-10">
          <div className="flex lg:text-6xl text-center text-5xl font-semibold justify-center items-center">
            <p>
              Introducing <span className="text-[#764DEF]">Coders Class</span>
            </p>
          </div>
          <div className="flex justify-center items-center font-medium text-xl">
            <p className="text-center w-full lg:w-6/12 text-gray-500">
              A comprehensive end-to-end fellowship program designed to guide
              you towards becoming a top-tier tech professional.
            </p>
          </div>
        </div>
      </div>
      <Card />
    </div>
  );
}
