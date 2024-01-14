import React from "react";
import { PiUsersThreeLight } from "react-icons/pi";

const boxes = [
  {
    id: 1,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M9.70508 9.12415C9.70508 7.56726 8.43829 6.30005 6.88141 6.30005C5.32452 6.30005 4.05817 7.56726 4.05817 9.12415C4.05817 10.681 5.32452 11.9474 6.88141 11.9474C8.43829 11.9474 9.70508 10.681 9.70508 9.12415ZM6.88141 8.05005C7.47357 8.05005 7.95508 8.53198 7.95508 9.12415C7.95508 9.71631 7.47357 10.1974 6.88141 10.1974C6.28967 10.1974 5.80817 9.71631 5.80817 9.12415C5.80817 8.53198 6.28967 8.05005 6.88141 8.05005ZM2.9751 18.9414C3.45831 18.9414 3.8501 18.55 3.8501 18.0664C3.8501 17.8565 3.87381 17.6504 3.91568 17.4492C4.03435 16.8791 4.31483 16.3534 4.73834 15.9302C5.31171 15.3568 6.07391 15.0415 6.88483 15.0415C7.09135 15.0415 7.29509 15.0629 7.49109 15.1033C7.69125 15.1447 7.88335 15.206 8.06146 15.2876C8.49854 15.4833 9.01892 15.2944 9.22058 14.8544C9.42139 14.4152 9.22742 13.8956 8.78778 13.6948C8.20929 13.4308 7.55133 13.2915 6.88483 13.2915C5.60651 13.2915 4.40466 13.7888 3.50104 14.6929C2.59741 15.5961 2.1001 16.7941 2.1001 18.0664C2.1001 18.55 2.49188 18.9414 2.9751 18.9414ZM18.9951 9.12415C18.9951 10.681 20.2619 11.9474 21.8188 11.9474C23.3757 11.9474 24.642 10.681 24.642 9.12415C24.642 7.56726 23.3757 6.30005 21.8188 6.30005C20.2619 6.30005 18.9951 7.56726 18.9951 9.12415ZM21.8188 10.1974C21.2266 10.1974 20.7451 9.71631 20.7451 9.12415C20.7451 8.53198 21.2266 8.05005 21.8188 8.05005C22.4105 8.05005 22.892 8.53198 22.892 9.12415C22.892 9.71631 22.4105 10.1974 21.8188 10.1974ZM21.8154 13.2915C21.1489 13.2915 20.4909 13.4308 19.9124 13.6948C19.4728 13.8956 19.2788 14.4152 19.4796 14.8544C19.6804 15.2944 20.2008 15.4841 20.6387 15.2876C20.8168 15.206 21.0089 15.1447 21.2091 15.1033C21.4051 15.0629 21.6088 15.0415 21.8154 15.0415C22.6263 15.0415 23.3885 15.3568 23.9619 15.9302C24.3854 16.3534 24.6658 16.8791 24.7845 17.4492C24.8264 17.6504 24.8501 17.8565 24.8501 18.0664C24.8501 18.55 25.2419 18.9414 25.7251 18.9414C26.2083 18.9414 26.6001 18.55 26.6001 18.0664C26.6001 16.7941 26.1028 15.5961 25.1992 14.6929C24.2955 13.7888 23.0937 13.2915 21.8154 13.2915ZM17.6741 10.2196C17.6741 8.38672 16.183 6.89563 14.3501 6.89563C12.5172 6.89563 11.0261 8.38672 11.0261 10.2196C11.0261 12.0525 12.5172 13.5436 14.3501 13.5436C16.183 13.5436 17.6741 12.0525 17.6741 10.2196ZM14.3501 8.64563C15.2178 8.64563 15.9241 9.35144 15.9241 10.2196C15.9241 11.0878 15.2178 11.7936 14.3501 11.7936C13.4824 11.7936 12.7761 11.0878 12.7761 10.2196C12.7761 9.35144 13.4824 8.64563 14.3501 8.64563ZM9.44104 22.0757C9.9241 22.0757 10.3157 21.6836 10.3159 21.2003C10.3159 21.2001 10.3159 21.2004 10.3159 21.2003C10.3159 18.976 12.1259 17.1658 14.3501 17.1658C16.5743 17.1658 18.3842 18.9756 18.3842 21.1998C18.3842 21.1997 18.3842 21.2 18.3842 21.1998C18.3844 21.6832 18.7761 22.0748 19.2592 22.0748C19.7424 22.0748 20.1342 21.6835 20.1342 21.1998C20.1342 18.0109 17.5395 15.4158 14.3501 15.4158C11.1607 15.4158 8.56604 18.0109 8.56604 21.2007C8.56604 21.6843 8.95782 22.0757 9.44104 22.0757Z" fill="#764DEF"/>
  </svg>,
    text: "Entire curriculum crafted/ taught by global FAANG+ senior developers.",
  },
  {
    id: 2,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.4661 23.6124C23.9214 21.8541 22.3178 20.6726 20.4749 20.6726H20.474C18.6314 20.6726 17.0277 21.8541 16.4835 23.6124C16.4151 23.832 16.4498 24.0367 16.5862 24.2212C16.7223 24.4064 16.9078 24.4999 17.1375 24.4999H23.8116C24.0413 24.4999 24.2268 24.4064 24.3629 24.2212C24.4993 24.0367 24.534 23.832 24.4661 23.6124ZM20.4741 19.9724H20.4749C21.5442 19.972 22.414 19.1023 22.414 18.0332C22.414 16.9639 21.5438 16.0943 20.4747 16.0943C19.4054 16.0943 18.5357 16.9639 18.5357 18.0332C18.5356 19.1023 19.405 19.972 20.4741 19.9724ZM24.9264 24.6369C24.6587 24.9999 24.2626 25.1999 23.8116 25.1999H17.1375C16.6866 25.1999 16.2905 24.9999 16.0228 24.6369C15.7551 24.2739 15.6812 23.8363 15.8146 23.4053C16.1161 22.4316 16.7338 21.5575 17.5536 20.9433C17.9906 20.6159 18.4708 20.3689 18.9788 20.2056C18.289 19.7293 17.8358 18.9335 17.8358 18.0332C17.8358 16.5781 19.0196 15.3942 20.4747 15.3942C21.93 15.3942 23.1138 16.5781 23.1138 18.0332C23.1138 18.9335 22.6606 19.7293 21.9708 20.2056C22.4834 20.3708 22.9648 20.6201 23.3955 20.9433C24.2156 21.5575 24.8333 22.4316 25.1346 23.4053C25.2679 23.8363 25.1941 24.2739 24.9264 24.6369ZM11.5169 23.6124C10.9722 21.8541 9.36837 20.6726 7.52572 20.6726H7.52489C5.68225 20.6726 4.07855 21.8541 3.53389 23.6124C3.46599 23.832 3.50069 24.0367 3.63709 24.2212C3.7731 24.4064 3.95864 24.4999 4.18835 24.4999H10.8624C11.0922 24.4999 11.2775 24.4064 11.4137 24.2212C11.5501 24.0367 11.5846 23.832 11.5169 23.6124ZM7.52485 19.9724H7.52568C8.595 19.972 9.46475 19.1023 9.46475 18.0332C9.46475 16.9639 8.59461 16.0943 7.52529 16.0943C6.45618 16.0943 5.58644 16.9639 5.58644 18.0332C5.58644 19.1023 6.45575 19.972 7.52485 19.9724ZM12.1854 23.4054C12.3188 23.8363 12.2449 24.2739 11.9772 24.6369C11.7093 25 11.3134 25.2 10.8624 25.2H4.18831C3.73714 25.2 3.34127 25 3.07358 24.6369C2.80589 24.2739 2.732 23.8363 2.86534 23.4054C3.16667 22.4316 3.78439 21.5576 4.60417 20.9433C5.0413 20.616 5.52161 20.369 6.02951 20.2057C5.33975 19.7293 4.88652 18.9335 4.88652 18.0332C4.88652 16.5781 6.07016 15.3943 7.52524 15.3943C8.98072 15.3943 10.1646 16.5781 10.1646 18.0332C10.1646 18.9335 9.71135 19.7294 9.02137 20.2057C9.53396 20.3708 10.0155 20.6201 10.4463 20.9433C11.2661 21.5575 11.8839 22.4316 12.1854 23.4054ZM12.4085 6.07794H16.1064C16.1983 6.07648 16.2859 6.03897 16.3504 5.97348C16.4148 5.908 16.4509 5.8198 16.4509 5.72791C16.4509 5.63603 16.4148 5.54783 16.3504 5.48234C16.2859 5.41686 16.1983 5.37934 16.1064 5.37789H12.4085C12.3166 5.37934 12.229 5.41686 12.1645 5.48234C12.1001 5.54783 12.0639 5.63603 12.0639 5.72791C12.0639 5.8198 12.1001 5.908 12.1645 5.97348C12.229 6.03897 12.3166 6.07648 12.4085 6.07794ZM7.92111 6.07794H10.5889C10.6818 6.07791 10.7708 6.04103 10.8364 5.97539C10.902 5.90975 10.9389 5.82074 10.939 5.72791C10.939 5.68194 10.9299 5.63642 10.9123 5.59395C10.8947 5.55148 10.869 5.51289 10.8365 5.48038C10.804 5.44788 10.7654 5.42209 10.7229 5.40451C10.6804 5.38692 10.6349 5.37788 10.5889 5.37789H7.92111C7.87516 5.3779 7.82966 5.38696 7.78721 5.40456C7.74475 5.42216 7.70618 5.44794 7.6737 5.48044C7.64121 5.51295 7.61545 5.55153 7.59787 5.59399C7.58029 5.63645 7.57125 5.68196 7.57127 5.72791C7.57131 5.9211 7.72793 6.07794 7.92111 6.07794ZM5.80168 9.75995V4.20099C5.80168 3.81505 6.11578 3.50112 6.50155 3.50112H17.526C17.9119 3.50112 18.2261 3.81505 18.2261 4.20099V7.25479C18.2261 7.64073 17.912 7.95488 17.526 7.95488H7.36819C7.31473 7.95496 7.26199 7.96723 7.21399 7.99076C7.16599 8.01429 7.12399 8.04846 7.09118 8.09067L5.80168 9.75995ZM17.526 8.65476H10.5615V11.5265C10.5615 11.9124 10.8756 12.2263 11.2614 12.2263H21.4192C21.4726 12.2264 21.5254 12.2387 21.5734 12.2623C21.6214 12.2859 21.6634 12.3201 21.6961 12.3624L22.9857 14.0317V8.4725C22.9857 8.08656 22.6716 7.77263 22.2858 7.77263H18.8262C18.6197 8.28881 18.1148 8.65476 17.526 8.65476ZM5.1018 10.7853C5.10185 10.8583 5.12472 10.9295 5.1672 10.9889C5.20968 11.0483 5.26965 11.0929 5.33874 11.1166C5.3751 11.1289 5.41325 11.1352 5.45165 11.1352C5.50512 11.1352 5.55789 11.1229 5.6059 11.0994C5.65391 11.0759 5.69589 11.0416 5.72862 10.9994L7.54012 8.65476H9.86141V11.5265C9.86141 12.2984 10.4897 12.9264 11.2614 12.9264H21.2472L23.0587 15.2708C23.0914 15.3132 23.1334 15.3475 23.1814 15.3712C23.2294 15.3948 23.2822 15.4071 23.3357 15.4071C23.3733 15.4071 23.4119 15.4008 23.4487 15.3881C23.5178 15.3645 23.5778 15.3199 23.6204 15.2605C23.6629 15.2011 23.6858 15.1299 23.6858 15.0568V8.4725C23.6858 7.70062 23.0576 7.07276 22.2858 7.07276H18.9259V4.20099C18.9259 3.42911 18.2977 2.80103 17.526 2.80103H6.50155C5.72984 2.80103 5.1018 3.42907 5.1018 4.20099V10.7853ZM16.3789 9.64953H12.6809C12.635 9.64953 12.5895 9.65858 12.547 9.67617C12.5045 9.69376 12.466 9.71954 12.4335 9.75205C12.401 9.78455 12.3752 9.82314 12.3577 9.86561C12.3401 9.90808 12.3311 9.9536 12.3311 9.99956C12.3311 10.0455 12.3401 10.091 12.3577 10.1335C12.3753 10.1759 12.401 10.2145 12.4335 10.247C12.466 10.2794 12.5046 10.3052 12.547 10.3228C12.5895 10.3404 12.635 10.3494 12.6809 10.3494H16.3789C16.4717 10.3494 16.5607 10.3125 16.6263 10.2469C16.6919 10.1813 16.7288 10.0923 16.7288 9.99947C16.7288 9.90666 16.6919 9.81765 16.6263 9.75203C16.5607 9.6864 16.4717 9.64953 16.3789 9.64953ZM17.8484 9.9996C17.8484 10.0456 17.8574 10.0911 17.875 10.1335C17.8926 10.176 17.9184 10.2145 17.9509 10.247C17.9834 10.2795 18.022 10.3053 18.0645 10.3228C18.1069 10.3404 18.1524 10.3495 18.1984 10.3494H20.866C20.912 10.3495 20.9575 10.3405 21 10.3229C21.0424 10.3053 21.081 10.2796 21.1135 10.2471C21.146 10.2146 21.1718 10.176 21.1894 10.1335C21.207 10.0911 21.2161 10.0456 21.216 9.9996C21.2161 9.95363 21.207 9.9081 21.1895 9.86562C21.1719 9.82314 21.1461 9.78454 21.1136 9.75203C21.0811 9.71952 21.0425 9.69374 21 9.67616C20.9575 9.65858 20.912 9.64955 20.866 9.64957H18.1984C18.1524 9.64955 18.1069 9.65859 18.0644 9.67617C18.022 9.69375 17.9834 9.71953 17.9509 9.75204C17.9183 9.78455 17.8926 9.82314 17.875 9.86562C17.8574 9.9081 17.8483 9.95362 17.8484 9.9996Z" fill="#764DEF" stroke="#764DEF" stroke-width="0.7"/>
  </svg>,
    text: "1-no-1 mentorship, coaching and personalised career services.",
  },
  {
    id: 3,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M13.0658 25.5478C12.944 25.5477 12.8232 25.5264 12.7088 25.4849C12.4881 25.404 12.3009 25.2515 12.1772 25.0516C12.0534 24.8518 12.0004 24.6162 12.0265 24.3826L12.8348 16.9395H6.65148C6.46076 16.9398 6.27357 16.8881 6.11001 16.79C5.94645 16.6919 5.81269 16.5512 5.72311 16.3828C5.63353 16.2144 5.59151 16.0248 5.60156 15.8344C5.6116 15.6439 5.67335 15.4598 5.78015 15.3018L14.0631 2.91416C14.1941 2.7203 14.3861 2.57576 14.6086 2.50349C14.8311 2.43122 15.0714 2.43535 15.2913 2.51524C15.5027 2.59372 15.6833 2.7382 15.8062 2.92727C15.9291 3.11635 15.9878 3.33997 15.9737 3.56504L15.1654 11.0606H21.3487C21.5394 11.0603 21.7266 11.112 21.8901 11.2101C22.0537 11.3082 22.1875 11.4489 22.277 11.6173C22.3666 11.7857 22.4086 11.9753 22.3986 12.1657C22.3885 12.3562 22.3268 12.5403 22.22 12.6983L13.9371 25.0859C13.8408 25.2284 13.711 25.345 13.559 25.4256C13.4071 25.5061 13.2377 25.5481 13.0658 25.5478ZM8.61461 14.8399H14.0001C14.1466 14.8402 14.2914 14.8712 14.4252 14.9309C14.559 14.9906 14.6788 15.0776 14.7769 15.1863C14.876 15.2965 14.9506 15.4265 14.9958 15.5676C15.0411 15.7088 15.0559 15.8579 15.0394 16.0052L14.567 20.3618L19.3855 13.1602H14.0001C13.8519 13.1611 13.7053 13.1306 13.5698 13.0708C13.4342 13.011 13.3129 12.9232 13.2137 12.8131C13.1146 12.703 13.0398 12.5732 12.9944 12.4322C12.949 12.2912 12.934 12.1422 12.9503 11.9949L13.4227 7.63826L8.61461 14.8399Z" fill="#764DEF"/>
  </svg>,
    text: "Learn to code faster and efficiently with AI powered tools.",
  },
  {
    id: 4,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M24.1384 14.0001C24.1384 19.6292 19.5592 24.2084 13.9301 24.2084C8.78624 24.2084 4.42991 20.3677 3.79874 15.2752C3.73924 14.7946 4.07991 14.3582 4.55941 14.2987C5.04007 14.2404 5.47641 14.5787 5.53474 15.0594C6.05857 19.2781 9.66707 22.4584 13.9301 22.4584C18.5944 22.4584 22.3884 18.6644 22.3884 14.0001C22.3884 9.33575 18.5944 5.54175 13.9301 5.54175C12.0016 5.54175 10.1746 6.18691 8.70341 7.35008H9.80474C10.2877 7.35008 10.6797 7.74208 10.6797 8.22508C10.6797 8.70808 10.2877 9.10008 9.80474 9.10008H6.50541C6.02241 9.10008 5.63041 8.70808 5.63041 8.22508V4.92458C5.63041 4.44158 6.02241 4.04958 6.50541 4.04958C6.98841 4.04958 7.38041 4.44158 7.38041 4.92458V6.18341C9.19691 4.65158 11.4941 3.79175 13.9301 3.79175C19.5592 3.79175 24.1384 8.37091 24.1384 14.0001ZM14.0001 8.45841C13.5171 8.45841 13.1251 8.85041 13.1251 9.33341V9.65658C11.7286 9.81408 10.6564 11.0566 10.8057 12.5242C10.9446 13.8904 12.1987 14.8751 13.5719 14.8751H14.5834C15.0664 14.8751 15.4584 15.2682 15.4584 15.7501C15.4584 16.2319 15.0664 16.6251 14.5834 16.6251H12.5429C12.0599 16.6251 11.6679 17.0171 11.6679 17.5001C11.6679 17.9831 12.0599 18.3751 12.5429 18.3751H13.1251V18.6667C13.1251 19.1497 13.5171 19.5417 14.0001 19.5417C14.4831 19.5417 14.8751 19.1497 14.8751 18.6667V18.3354C16.0627 18.1487 17.0707 17.2399 17.1944 16.0242C17.3542 14.4539 16.1211 13.1251 14.5834 13.1251H13.4167C12.9337 13.1251 12.5417 12.7331 12.5417 12.2501C12.5417 11.7671 12.9337 11.3751 13.4167 11.3751H15.4631C15.9461 11.3751 16.3381 10.9831 16.3381 10.5001C16.3381 10.0171 15.9461 9.62508 15.4631 9.62508H14.8751V9.33341C14.8751 8.85041 14.4831 8.45841 14.0001 8.45841Z" fill="#764DEF"/>
  </svg>,
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
              <div className="border border-[#D9D9D9] rounded-2xl w-[269px] h-[200px] overflow-auto relative flex flex-col justify-center">
                <div className="p-4 flex justify-center items-center">
                  <div className="flex flex-col gap-3 items-center">
                    <div className="flex justify-center items-center w-[48px] h-[48px] border rounded-lg p-2 border-[#764DEF]">
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
