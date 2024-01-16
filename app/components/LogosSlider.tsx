"use client";
import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const logos = [
  {
    id: 1,
    title: "Tier 1 Companies",
    text: "Fresher Salary Range: 12 - 40 LPA",
    image1: "/slider/image 1.png",
    image2: "/slider/image 2.png",
    image3: "/slider/image 3.png",
    image4: "/slider/image 4.png",
    image5: "/slider/image 5.png",
  },
  {
    id: 2,
    title: "Tier 2 Companies",
    text: "Fresher Salary Range: 6 - 12 LPA",
    image1: "/slider/image 6.png",
    image2: "/slider/image 7.png",
    image3: "/slider/image 8.png",
    image4: "/slider/image 9.png",
    image5: "/slider/image 10.png",
  },
  {
    id: 3,
    title: "Tier 3 Companies",
    text: "Fresher Salary Range: 3 - 6 LPA",
    image1: "/slider/image 11.png",
    image2: "/slider/image 12.png",
    image3: "/slider/image 13.png",
    image4: "/slider/image 14.png",
    image5: "/slider/image 15.png",
  },
];
const LogosSlider = () => {
  // Define Splide options
  const splideOptions = {
    perPage: 5,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 4 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };

  return (
    <div className="w-full bg-[#FBF7FF]">
      <div className="container mx-auto p-10">
        <div className="w-full p-4">
          <div className="flex flex-col gap-7">
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="flex flex-col md:flex-row w-full border rounded-2xl"
              >
                <div className="w-full md:w-[387px] h-[156px] bg-[#FFD03F] text-[#141317] md:rounded-l-2xl">
                  <div className="flex flex-col gap-3 p-8 mt-2">
                    <div>
                      <p className="text-2xl font-bold">{logo.title}</p>
                    </div>
                    <p>{logo.text}</p>
                  </div>
                </div>
                <div className="w-full md:w-9/12 bg-[#FFF] rounded-r-2xl flex justify-center items-center px-5">
                  <div className="w-full flex justify-center items-center m-10">
                    <Splide options={splideOptions}>
                    {/* Use SplideSlide for each slide */}
                    <SplideSlide>
                      <div className="flex justify-center items-center">
                        <Image
                          src={logo.image1}
                          alt=""
                          width={100}
                          height={100}
                        />
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div className="flex justify-center items-center">
                        <Image
                          src={logo.image2}
                          alt=""
                          width={100}
                          height={100}
                        />
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div className="flex justify-center items-center">
                        <Image
                          src={logo.image3}
                          alt=""
                          width={100}
                          height={100}
                        />
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div className="flex justify-center items-center">
                        <Image
                          src={logo.image4}
                          alt=""
                          width={100}
                          height={100}
                        />
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div className="flex justify-center items-center">
                        <Image
                          src={logo.image5}
                          alt=""
                          width={100}
                          height={100}
                        />
                      </div>
                    </SplideSlide>
                    {/* Add more slides as needed */}
                  </Splide>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogosSlider;
