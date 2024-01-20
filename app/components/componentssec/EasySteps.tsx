import React from 'react'
import EasyCard from './EasyCard'

export default function EasySteps() {
  return (
    <div className="w-full">
      <div className="container mx-auto p-4 pt-10">
        <div className="flex flex-col gap-10 pt-6">
          <div className="flex lg:text-5xl pt-5 text-5xl text-center font-semibold justify-center items-center">
            <p>
            Get started in <span className="text-[#764DEF]">3 easy steps</span>
            </p>
          </div>
          <div className="flex justify-center items-center font-medium text-xl">
            <p className="text-center w-full lg:w-6/12 text-gray-500">
            A comprehensive end-to-end fellowship program designed 
            to guide you towards becoming a top-tier tech professional .
            </p>
            
          </div>
          <p className="text-center font-bold text-2xl">Panding the UI</p>
        </div>
      </div>
      <EasyCard />
    </div>
  )
}
