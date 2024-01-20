import React from 'react'
import Arrow from '../../../public/second/arrowright.svg'
import Arrow2 from '../../../public/second/arrow2.svg'
import Image from 'next/image'

export default function EasyCard() {
  return (
    <div className='w-full'>
        <div className='container mx-auto p-5'>
            <div className='flex justify-between items-center flex-wrap lg:flex-nowrap gap-7 lg:gap-0'>
            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'> */}
                
                <div className='flex flex-col gap-7 justify-center'>
                    <div className='flex gap-4'>
                        <div className='w-[124px] h-[124px] flex justify-center items-center bg-white shadow-xl rounded-xl'>
                            <span className='text-[#764DEF] text-[40px]'>01</span>
                        </div>
                        <div>
                            <Image src={Arrow} alt='arrow' width={293} height={90.297} />
                        </div>
                    </div>
                    <p className='text-[#141317] w-full lg:w-[335px] font-semibold text-[24px]'>
                    Register with us to setup/revamp a free coding club at your campus.
                    </p>
                    <div className='flex gap-2 items-center'>
                        <p className='text-[#5B5766] text-[18px] font-medium underline'>Register with us</p>
                        <Image src={Arrow2} alt='arrow' width={24} height={24} />
                    </div>
                </div>
                <div className='flex flex-col gap-7 justify-center'>
                    <div className='flex gap-4'>
                        <div className='w-[124px] h-[124px] flex justify-center items-center bg-white shadow-xl rounded-xl'>
                            <span className='text-[#764DEF] text-[40px]'>02</span>
                        </div>
                        <div>
                            <Image src={Arrow} alt='arrow' width={293} height={90.297} />
                        </div>
                    </div>
                    <p className='text-[#141317] w-full lg:w-[335px] font-semibold text-[24px]'>
                    Benefit from our guidance to revamp and run your Coders Class under our mentorship.
                    </p>
                    <div className='flex gap-2 items-center'>
                        <p className='text-[#5B5766] text-[18px] font-medium underline'>Get free group mentorship</p>
                        <Image src={Arrow2} alt='arrow' width={24} height={24} />
                    </div>
                </div>
                <div className='flex flex-col gap-7 justify-center'>
                    <div className='flex gap-4'>
                        <div className='w-[124px] h-[124px] flex justify-center items-center bg-white shadow-xl rounded-xl'>
                            <span className='text-[#764DEF] text-[40px]'>03</span>
                        </div>
                      
                    </div>
                    <p className='text-[#141317] w-full lg:w-[335px] font-semibold text-[24px]'>
                    Elevate your Coders Class success, brand yourself and your college, fostering innovation, and securing PPOs.
                    </p>
                    <div className='flex gap-2 items-center'>
                        <p className='text-[#5B5766] text-[18px] font-medium underline'>Become coders class ambassador</p>
                        <Image src={Arrow2} alt='arrow' width={24} height={24} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
