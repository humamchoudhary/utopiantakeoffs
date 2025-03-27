import Link from "next/link";
import { CirclePlus, Download } from "lucide-react";
import Faq from "./faq";
import BlurBackground from "@/components/GlowGlobs";

export default async function Sample() {
  const info = [
    {
      title: "Water Proofing",
      desc: "Here are the samples which you can download of our work on water proofing.",
      pdf: "https://drive.google.com/file/d/1G-sh_x0yyFcq5Jtkk4ry_GC6N20TLso4/view?usp=drive_link",
      xlsx: "https://docs.google.com/spreadsheets/d/190_D-MfArSAsS3s6cQUdRXNuvfo5Sa9i/edit?usp=drive_link&ouid=113272403915799871398&rtpof=true&sd=true",
    },
    {
      title: "Roofing",
      desc: "Here are the samples which you can download of our work on water proofing.",
      xlsx: "https://docs.google.com/spreadsheets/d/1_2CQXGJvBk4GpUkJ34EObu8i4J-Cjfwb/edit?usp=drive_link&ouid=113272403915799871398&rtpof=true&sd=true",
      pdf: "https://drive.google.com/file/d/1_nX3lcYZsLFHdZ8QCR1R50KMJd4t4QGA/view?usp=drive_link",
    },
    {
      title: "Residential GC",
      desc: "Here are the samples which you can download of our work on water proofing.",
      xlsx: "https://docs.google.com/spreadsheets/d/1NRAawu4gtAVKfxGlEWJYhvzlG5b7Saiw/edit?usp=drive_link&ouid=113272403915799871398&rtpof=true&sd=true",
      pdf: "https://drive.google.com/file/d/1_Iozq4RpNQenGuN5Zlf5EeoAWms_YWFn/view?usp=drive_link",
    },

    {
      title: "Paint",
      desc: "Here are the samples which you can download of our work on water proofing",
      xlsx: "https://docs.google.com/spreadsheets/d/1fdApk46SXbTl0rEHsujsSHXXv2ngEfMo/edit?usp=drive_link&ouid=113272403915799871398&rtpof=true&sd=true",
      pdf: "https://drive.google.com/file/d/1kuBm5GkSy_nBcJtJUN_EQnfeYhBcVo_X/view?usp=drive_link",
    },
    {
      title: "Masoanry",
      desc: "Here are the samples which you can download of our work on water proofing",
      xlsx: "https://docs.google.com/spreadsheets/d/1Nbd1Nb-JC037-lWpIRDarQyfXpO_0-W6/edit?usp=drive_link&ouid=113272403915799871398&rtpof=true&sd=true",
      pdf: "https://drive.google.com/file/d/1a5VCV5DtHSpXgAlz5SSq-ocAoxnFjaIq/view?usp=drive_link",
    },
    {
      title: "Lumber/Carpentary",
      desc: "Here are the samples which you can download of our work on water proofing.",
      xlsx: "https://docs.google.com/spreadsheets/d/1h7DR8_AR4hlDvJLEgvZ4YfeWKpRiaBzQ/edit?usp=drive_link&ouid=113272403915799871398&rtpof=true&sd=true",
      pdf: "https://drive.google.com/file/d/1KsnI66WLu0TGlvpuU4v1FHnlRlGauqmy/view?usp=drive_link",
    },
    {
      title: "Grading, Excavation & Dirt ",
      desc: "Here are the samples which you can download of our work on water proofing.",
      xlsx: "https://docs.google.com/spreadsheets/d/1bhnhsfkgilk-MGjVcIdCvIRwTnXQAxNq/edit?usp=drive_link&ouid=113272403915799871398&rtpof=true&sd=true",
      pdf: "https://drive.google.com/file/d/1HPdd8eNGYHII0ZrOuncPa35Ak-m8gyaG/view?usp=drive_link",
    },
    {
      title: "GC-General Contractor",
      desc: "Here are the samples which you can download of our work on water proofing.",
      xlsx: "https://docs.google.com/spreadsheets/d/17BHztXcPAHTfNnBNSDrZiJ4MbIM6kMhd/edit?usp=drive_link&ouid=113272403915799871398&rtpof=true&sd=true",
      pdf: "https://drive.google.com/file/d/1Ho1Uz-OJu3c_jmq8vXYleRfqYjljXttf/view?usp=drive_link",
    },
    {
      title: "Finishes",
      desc: "Here are the samples which you can download of our work on water proofing.",
      pdf: "https://drive.google.com/file/d/1dW5wUPKeMsL6SoFuMDOJvScdQgb5QG2w/view?usp=drive_link",
      xlsx: "https://docs.google.com/spreadsheets/d/1ZFsYHGRPo0TL-3RIquqU49pf5sRE0uyo/edit?usp=drive_link&ouid=113272403915799871398&rtpof=true&sd=true",
    },
    {
      title: "Electrical",
      desc: "Here are the samples which you can download of our work on water proofing.",
      xlsx: "https://docs.google.com/spreadsheets/d/1hRDGZQ0EPptBQidWoU7qNY5LE1z56pcu/edit?usp=drive_link&ouid=113272403915799871398&rtpof=true&sd=true",
      pdf: "https://drive.google.com/file/d/1wMTFCdg5zjdCLVDJ8WSXfhJFfqGSCfxq/view?usp=drive_link",
    },
    {
      title: "Drywall Framing",
      desc: "Here are the samples which you can download of our work on water proofing.",
      pdf: "https://drive.google.com/file/d/1sYusBWzHV-DyE_8as6rrwASSrWgD0GLD/view?usp=drive_link",
      xlsx: "https://docs.google.com/spreadsheets/d/162xF7WiDkwi2UtHNxsBkePZhYHw2NA9v/edit?usp=drive_link&ouid=113272403915799871398&rtpof=true&sd=true",
    },
    {
      title: "Demo",
      desc: "Here are the samples which you can download of our work on water proofing.",
      pdf: "https://drive.google.com/file/d/1dZbehyBLp-A2XsaScOMwc-U_sji5PWAs/view?usp=drive_link",
      xlsx: "https://docs.google.com/spreadsheets/d/1mcsWnANcdXfJeB-SEq1h4z2fzhDh1qQ_/edit?usp=drive_link&ouid=113272403915799871398&rtpof=true&sd=true",
    },
  ];

  const faq = [
    {
      q: "What types of estimates do we provide?",
      a: "We are specialists in residential, commercial & industrial projects performing estimating services for new construction, remodeling, renovation, skyscrapers, multifamily, retail, wastewater treatment plants, cogeneration plants, warehouses, and highways & Bridges.",
    },

    {
      q: "Which trades are we dealing in?",
      a: "We are specialists in residential, commercial & industrial projects performing estimating services for new construction, remodeling, renovation, skyscrapers, multifamily, retail, wastewater treatment plants, cogeneration plants, warehouses, and highways & Bridges.",
    },

    {
      q: "How do we price out the projects?",
      a: "We are specialists in residential, commercial & industrial projects performing estimating services for new construction, remodeling, renovation, skyscrapers, multifamily, retail, wastewater treatment plants, cogeneration plants, warehouses, and highways & Bridges.",
    },

    {
      q: "Would you ever provide the same estimate to other clients?",
      a: "We are specialists in residential, commercial & industrial projects performing estimating services for new construction, remodeling, renovation, skyscrapers, multifamily, retail, wastewater treatment plants, cogeneration plants, warehouses, and highways & Bridges.",
    },

    {
      q: "What if you don’t have plans for the project?",
      a: "We are specialists in residential, commercial & industrial projects performing estimating services for new construction, remodeling, renovation, skyscrapers, multifamily, retail, wastewater treatment plants, cogeneration plants, warehouses, and highways & Bridges.",
    },

    {
      q: "How do we do estimates if the drawings are not completed?",
      a: "We are specialists in residential, commercial & industrial projects performing estimating services for new construction, remodeling, renovation, skyscrapers, multifamily, retail, wastewater treatment plants, cogeneration plants, warehouses, and highways & Bridges.",
    },

    {
      q: "How much accurate we are in our estimation?",
      a: "We are specialists in residential, commercial & industrial projects performing estimating services for new construction, remodeling, renovation, skyscrapers, multifamily, retail, wastewater treatment plants, cogeneration plants, warehouses, and highways & Bridges.",
    },
  ];

  return (
    <div className="flex flex-col items-center ">
      <BlurBackground blurCount={3} />
      <div className="flex flex-col gap-5 md:[gap-6 mt-32] items-center justify-center mt-32">
        <div className="md:px-5 md:py-3 py-2 px-4  border-2 text-nowrap w-min border-[#89261D] bg-[#531712] rounded-full text-[#FAFAFB] text-sm md:text-lg font-semibold text-center">
          Save 60% of Your Estimating Expense
        </div>
        <h1 className="text-center w-[365px] mt-5 text-[32px] md:text-7xl md:mt-6 md:w-[1440px] font-bold  leading-normal">
          Quantity Takeoff Samples
        </h1>
        <p className="text-center text-xs md:text-2xl text-[#5F6778] leading-6 md:leading-10 mt-3 justify-center md:w-[981px]  md:tracking-[-1.2px] px-4 ">
          All Quantity Takeoffs and Estimates are Provided with Mark Up Plans.
          We price out estimates with vendor-quoted zip code-based separate
          material and labor unit pricing.
        </p>
        <div className="flex flex-row gap-1 md:gap-3 items-center justify-center mt-5 md:mt-6">
          <Link
            className="border flex gap-1 md:gap-[10px] items-center justify-center py-[10px] px-4 md:px-6 md:py-3 border-fg text-xl font-bold rounded-xl md:rounded-full"
            href="/contact"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              fill="none"
            >
              <path
                stroke="#FAFAFB"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19.25 17.417v-1.51c0-.749-.456-1.423-1.152-1.701l-1.865-.746a1.833 1.833 0 0 0-2.32.882l-.163.325s-2.292-.459-4.125-2.292C7.792 10.542 7.333 8.25 7.333 8.25l.325-.162a1.833 1.833 0 0 0 .882-2.32l-.746-1.866A1.833 1.833 0 0 0 6.092 2.75H4.583c-1.012 0-1.833.82-1.833 1.833 0 8.1 6.566 14.667 14.667 14.667 1.012 0 1.833-.82 1.833-1.833Z"
              />
            </svg>
            Contact Us
          </Link>

          <Link
            className=" flex gap-[10px] items-center justify-center py-[10px] px-4 md:px-6 md:py-3  bg-[#FAFAFB] text-[#0F142C] text-xl font-bold rounded-xl md:rounded-full"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              fill="none"
            >
              <path
                stroke="#0F142C"
                strokeWidth={1.5}
                d="M1.833 7.333A3.667 3.667 0 0 1 5.5 3.667h6.417a3.667 3.667 0 0 1 3.666 3.666v7.334a3.667 3.667 0 0 1-3.666 3.666H5.5a3.667 3.667 0 0 1-3.667-3.666V7.333Z"
              />
              <path
                stroke="#0F142C"
                strokeWidth={1.5}
                d="m15.583 8.556 1.413-1.507c1.137-1.213 3.17-.408 3.17 1.254v5.394c0 1.662-2.034 2.467-3.17 1.254l-1.413-1.507V8.556ZM11.917 9.167a1.833 1.833 0 1 1-3.667 0 1.833 1.833 0 0 1 3.667 0Z"
              />
            </svg>
            Book a call
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center mt-14 mx-3 md:mx-11 md:mt-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1348"
          height="2"
          viewBox="0 0 1348 2"
          fill="none"
        >
          <path d="M-.007 1H1348.01" stroke="url(#a)" />
          <defs>
            <linearGradient
              id="a"
              x1="-.007"
              y1="1.5"
              x2="1348.01"
              y2="1.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D0CCCC" stop-opacity="0" />
              <stop offset=".486" stop-color="#C4C4C4" stop-opacity=".12" />
              <stop offset="1" stop-color="#6A6868" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="w-full gap-20 2xl:w-[1440px] flex flex-col items-center px-4 py-10 md:py-20 mt-14 md:mt-20 md:px-24 ">
        <h3 className="text-2xl md:text-2xl  text-[#AC554D] font-semibold text-center">
          Utopian Samples
        </h3>

        <div className="relative">
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6 gap-4">
            {info.map((item, index) => (
              <div
                key={index}
                className="flex p-[18px] md:p-7 flex-col bg-[#1F212A] gap-4 border-[#4E4E4E] border rounded-[20px] md:rounded-[24px]"
              >
                <div className="">
                  <p className=" text-base md:text-[28px] text-[#fff] font-semibold">
                    {item.title}
                  </p>

                  <p className="leading-5 mt-2 md:leading-8 text-sm md:text-2xl text-[#A8A8A8] font-medium">
                    {item.desc}
                  </p>
                </div>
                <div className="flex justify-end space-x-2">
                  <Link
                    target="_blank"
                    href={item.pdf}
                    className="flex items-center text-xl font-semibold bg-[#1F212A] hover:bg-gray-500 border border-[#fff] text-white py-[10px] px-6 rounded-full"
                  >
                    <Download size={20} className="mr-1" />
                    .pdf
                  </Link>
                  <Link
                    target="_blank"
                    href={item.xlsx}
                    className="flex items-center text-xl font-semibold bg-[#531712] text-white py-[10px] px-6 rounded-full"
                  >
                    <Download size={20} className="mr-1" />
                    .xsl
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-[120px] items-center">
        <h1 className=" md:w-100% text-2xl md:text-2xl  text-[#AC554D] font-semibold leading-normal">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="flex flex-col gap-6 md:gap-10 md:w-[1440px] w-[311px] my-14 md:my-20 md:px-[220px] ">
        {faq.map((item, index) => {
          return <Faq item={item} key={index} />;
        })}
      </div>

      <div className=" w-full md:2xl:w-[1440px] gap-20">
        <div className="px-0 md:px-12 w-full 2xl:w-[1440px]">
          <div className="relative w-full flex flex-col justify-center items-center bg-primary rounded-3xl px-9 py-11 md:py-[72px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={339}
              height={143}
              fill="none"
              className="absolute right-0 md:hidden block w-[339px] h-[143px] md:w-[1119px]  md:h-[342px] bottom-0"
            >
              <path
                fill="#fff"
                fillOpacity={0.04}
                d="M90.05 61.206C7.148 59.895 0 143 0 143h339V0s-22.632 80.11-85.524 97.33c-62.893 17.22-80.522-34.814-163.425-36.124Z"
              />
            </svg>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 hidden md:block w-[339px] h-[143px] md:w-[1119px]  md:h-[342px] bottom-0"
              viewBox="0 0 1119 342"
              fill="none"
            >
              <path
                d="M302.559 146.38C24.0127 143.246 0 342 0 342H1139V0C1139 0 1062.96 191.592 851.649 232.775C640.337 273.958 581.106 149.513 302.559 146.38Z"
                fill="white"
                fill-opacity="0.04"
                className="absolute right-0 w-[339px] h-[143px] md:w-[1119px]  md:h-[342px] bottom-0"
              />
            </svg>
            <div className="px-4 py-2 md:px-5 md:py-3 mb-5 border  rounded-full bg-[#FAF3F21A]">
              <p className="text-lg  font-semibold leading-[normal] text-[#FFFFFF]">
                Save 60% of Your Estimating Expense
              </p>
            </div>
            <p className="text-[#E4E4E4] md:mx-[340px] md:w-[664px] font-semibold text-sm leading-[20px] md:leading-[normal] md:text-[32px] text-center">
              Work With Us! We Are A Global Network Of Construction Cost Expert
            </p>
            <div className="px-5 py-[10px] md:px-[32px] md:py-4 mt-7  bg-[#FFFFFF] rounded-full">
              <p className="text-lg text-primary font-semibold text-[#601E1A] leading-[normal]">
                Get Quotes Now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
