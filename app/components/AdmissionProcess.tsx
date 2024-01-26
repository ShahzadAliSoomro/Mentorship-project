import React from "react";
import FlowChart from "./Flowchart";
import Professional from "./Professional";

export default function AdmissionProcess() {
  return (
    <div className="w-full">
      <div className="container mx-auto p-4 pt-10">
        <div className="flex flex-col gap-10">
          <div className="flex lg:text-6xl text-5xl text-center font-semibold justify-center items-center">
            <p>
              Admission <span className="text-[#764DEF]">Process</span>
            </p>
          </div>
          <div className="flex justify-center items-center font-medium text-xl">
            <p className="text-center w-full lg:w-6/12 text-gray-500">
              A comprehensive end-to-end fellowship program designed to guide
              you towards becoming a top-tier tech professional .
            </p>
          </div>
          {/* <p className="text-center font-bold text-2xl">Panding the UI</p> */}
        </div>
      </div>
      {/* <FlowChart /> */}
      <Professional />
    </div>
  );
}
