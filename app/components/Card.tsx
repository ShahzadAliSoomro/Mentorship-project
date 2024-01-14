import React from "react";
import { SiScpfoundation } from "react-icons/si";

const card = [
  {
    id: 1,
    icon: <SiScpfoundation className="text-[#764DEF] w-8 h-8" />,
    title: "Foundation",
    text: "We place a strong emphasis on programing fundamentals, mirrorring the priorities of elite tech companies. We offer 100% free 3 month of live training from senior developers from FAANG+ companies.",
  },
  {
    id: 2,
    icon: <SiScpfoundation className="text-[#764DEF] w-8 h-8" />,
    title: "Externship",
    text: "Say goodbye to the era of making website clones! You'll have the opportunity to engage in an externship where you'll tackle a genuine tech problem presented by a partnering company.",
  },
  {
    id: 3,
    icon: <SiScpfoundation className="text-[#764DEF] w-8 h-8" />,
    title: "Elite Instructors",
    text: "All instructors are among the Top 1% senior developers working in elite tech companies like Google, Amazon, etc. The entire curriculum is designed and will be delivered by them. No last-minute surprises.",
  },
  {
    id: 4,
    icon: <SiScpfoundation className="text-[#764DEF] w-8 h-8" />,
    title: "1-1 Mentorship",
    text: "Collaborate with senior engineers to build a roadmap for your target company. Receive ongoing guidance to track your progress until course completion.",
  },
];

const card5 = [
  {
    id: 5,
    icon: <SiScpfoundation className="text-[#764DEF] w-8 h-8" />,
    title: "Career Services",
    text: "Our success is intricately tied to your success. We provide full-fledged 2 months of career service, with in-person workshops, expert guidance to build your resume, GitHub & LinkedIn profile, and many more.",
  },
];

export default function Card() {
  return (
    <div className="w-full">
      <div className="container mx-auto pt-10 lg:pt-20">
        <div className="flex flex-col gap-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 gap-8 w-full lg:w-10/12 mx-auto">
              {/* Render the first four items on the left */}
              {card.map((item) => (
                <div
                  key={item.id}
                  className="border border-[#D9D9D9] bg-[#FDFDFF] rounded-2xl p-6 lg:p-10 relative"
                >
                  <div className="absolute top-2 right-2">{item.icon}</div>
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-3 items-center">
                      <p>{item.icon}</p>
                      <p className="text-lg font-semibold">{item.title}</p>
                    </div>
                    <p className="text-gray-500 text-sm lg:text-base">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Render the fifth card separately */}
            <div className="flex justify-center mx-auto w-full lg:w-5/12">
              {card5.map((item) => (
                <div
                  key={item.id}
                  className="border border-[#D9D9D9] bg-[#FDFDFF] rounded-2xl p-6 lg:p-10 relative"
                >
                  <div className="absolute top-2 right-2">{item.icon}</div>
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-3 items-center">
                      <p>{item.icon}</p>
                      <p className="text-lg font-semibold">{item.title}</p>
                    </div>
                    <p className="text-gray-500 text-sm lg:text-base">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}


// import React from "react";
// import { SiScpfoundation } from "react-icons/si";

// const card = [
//   {
//     id: 1,
//     icon: <SiScpfoundation className="text-[#764DEF] w-8 h-8" />,
//     title: "Foundation",
//     text: "We place a strong emphasis on programing fundamentals, mirrorring the priorities of elite tech companies. We offer 100% free 3 month of live training from senior developers from FAANG+ companies.",
//   },
//   {
//     id: 2,
//     icon: <SiScpfoundation className="text-[#764DEF] w-8 h-8" />,
//     title: "Externship",
//     text: "Say goodbye to the era of making website clones! .Youll have the opportunity to engage in an externship where youll tackle a genuine tech problem presented by a partnering company.",
//   },
//   {
//     id: 3,
//     icon: <SiScpfoundation className="text-[#764DEF] w-8 h-8" />,
//     title: "Elite Intructors",
//     text: "All instructors are among the Top 1% senior developers working in the elite tech companies like google, Amazon etc.. Entire curriculum is designed and will be delivered by them. Icon No last minut surprise.",
//   },
//   {
//     id: 4,
//     icon: <SiScpfoundation className="text-[#764DEF] w-8 h-8" />,
//     title: "1-1 mentorship",
//     text: "Collaborate with senior engineers to build a roadmap for your target company. Receive ongoing guidance to track your progress until course completion.",
//   },
//   {
//     id: 5,
//     icon: <SiScpfoundation className="text-[#764DEF] w-8 h-8" />,
//     title: "Career Services",
//     text: "Our success is intricately tied to your success. We provide full fledged 2 months of career service, with in person workshops, expert guidance to build your resume, github & linkedin profile and many more..",
//   },
// ];

// export default function Card() {
   
//   return (
   
//     <div className="w-full">
//       <div className="container mx-auto pt-10 lg:pt-20">
//         <div className="flex flex-col gap-7">
//           <div className="flex justify-center">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 gap-8 w-full lg:w-10/12 mx-auto">
//               {card.map((item) => (
//                 <div
//                   key={item.id}
//                   className="border border-[#D9D9D9] bg-[#FDFDFF] rounded-2xl p-6 lg:p-10 relative"
//                 >
//                   <div className="absolute top-2 right-2">{item.icon}</div>
//                   <div className="flex flex-col gap-3">
//                     <div className="flex gap-3 items-center">
//                       <p>{item.icon}</p>
//                       <p className="text-lg font-semibold">{item.title}</p>
//                     </div>
//                     <p className="text-gray-500 text-sm lg:text-base">
//                       {item.text}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
