import BlurBackground from "@/components/GlowGlobs";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center">
      <BlurBackground blurCount={2} />
      {/* Hero Section */}
      <div className="flex flex-col gap-5 md:gap-6 items-center justify-center mt-32 px-4">
        <div className="md:px-5 md:py-3 py-2 px-4 border-2 text-nowrap w-min border-[#89261D] bg-[#531712] rounded-full text-[#FAFAFB] text-sm md:text-lg font-semibold text-center">
          10+ Years of Construction Estimating Expertise
        </div>
        <h1 className="text-center w-full mt-5 text-[32px] md:text-7xl md:mt-6 font-bold leading-normal">
          Utopian Takeoffs Your Trusted Construction Cost Partner
        </h1>
        <p className="text-center text-xs md:text-2xl text-[#5F6778] leading-6 md:leading-10 mt-3 justify-center md:w-[981px] md:tracking-[-1.2px] px-4">
          Delivering Accurate, Efficient, and Cost-Effective Estimating
          Solutions Across North America, Africa, Caribbean, and Australia
        </p>
        <div className="flex flex-row gap-1 md:gap-3 items-center justify-center mt-5 md:mt-6">
          <Link
            href="/contact"
            className="border flex gap-1 md:gap-[10px] items-center justify-center py-[10px] hover:bg-primary duration-200 transition-all hover:border-primary  px-4 md:px-6 md:py-3 border-fg text-xl font-bold rounded-xl md:rounded-full"
          >
            Contact Us
          </Link>
          <Link
            href="/get-quote"
            className="flex gap-[10px] items-center justify-center py-[10px] px-4 md:px-6 md:py-3 bg-[#FAFAFB] text-[#0F142C] hover:bg-primary duration-200 transition-all hover:text-fg text-xl font-bold rounded-xl md:rounded-full"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Divider */}
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
              <stop stopColor="#D0CCCC" stopOpacity="0" />
              <stop offset=".486" stopColor="#C4C4C4" stopOpacity=".12" />
              <stop offset="1" stopColor="#6A6868" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* About Us Sections */}
      <div className="w-full 2xl:w-[1440px] flex flex-col items-center px-4 py-10 md:py-20 mt-14 md:mt-20 md:px-24">
        <div className="space-y-12 md:space-y-16 max-w-4xl">
          {/* Our Mission */}
          <section className="bg-[#1F212A] p-6 md:p-10 rounded-[20px] md:rounded-[24px]">
            <h2 className="text-[#AC554D] text-2xl md:text-3xl font-semibold mb-4">
              Our Mission
            </h2>
            <p className="text-[#A8A8A8] text-base md:text-xl leading-relaxed">
              Utopian Takeoffs is working with an aim to provide cost-effective
              and efficient cost estimating and consultation services to the
              real estate development and construction industry. Our expert
              team, being fully aware of the client's specific needs, strives to
              produce the most accurate and reliable estimating solutions.
            </p>
          </section>

          {/* Our Clients */}
          <section className="bg-[#1F212A] p-6 md:p-10 rounded-[20px] md:rounded-[24px]">
            <h2 className="text-[#AC554D] text-2xl md:text-3xl font-semibold mb-4">
              Our Valuable Clients
            </h2>
            <p className="text-[#A8A8A8] text-base md:text-xl leading-relaxed mb-4">
              We have successfully delivered construction cost estimates to many
              construction companies across the globe. Our clients include:
            </p>
            <ul className="text-[#A8A8A8] list-disc pl-6 text-base md:text-xl space-y-2">
              <li>General Contracting Corporations</li>
              <li>Subcontractors</li>
              <li>Architectural Firms</li>
              <li>Engineering Firms</li>
              <li>Developers and Investors</li>
            </ul>
          </section>

          {/* Our Services */}
          <section className="bg-[#1F212A] p-6 md:p-10 rounded-[20px] md:rounded-[24px]">
            <h2 className="text-[#AC554D] text-2xl md:text-3xl font-semibold mb-4">
              Our Services
            </h2>
            <ul className="text-[#A8A8A8] list-disc pl-6 text-base md:text-xl space-y-2">
              <li>Cost Estimating Services</li>
              <li>Material Takeoff Services</li>
              <li>CPM Scheduling Services</li>
              <li>Project Cost Management</li>
              <li>Value Engineering</li>
              <li>Bidding Assistance</li>
              <li>CAD Drafting Services</li>
            </ul>
          </section>
        </div>
      </div>

      {/* Call to Action */}
      <div className="w-full md:2xl:w-[1440px] gap-20">
        <div className="px-0 md:px-12 w-full 2xl:w-[1440px]">
          <div className="relative w-full flex flex-col justify-center items-center bg-primary rounded-3xl px-9 py-11 md:py-[72px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={339}
              height={143}
              fill="none"
              className="absolute right-0 md:hidden block w-[339px] h-[143px] md:w-[1119px] z-0  md:h-[342px] bottom-0 pointer-events-none"
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
              <p className=" text-sm md:text-lg  font-semibold leading-[normal] text-[#FFFFFF]">
                Save 30% of Your Estimating Expense
              </p>
            </div>
            <p className="text-[#E4E4E4] md:mx-[340px] md:w-[664px] font-semibold text-sm leading-[20px] md:leading-[normal] md:text-[32px] text-center">
              Work With Us! We Are A Global Network Of Construction Cost Expert
            </p>
            <Link
              href="/contact"
              className=" relative z-10 px-5 py-[10px] md:px-[32px] md:py-4 mt-7  bg-[#FFFFFF] rounded-full pointer-events-auto"
            >
              <p className="text-lg text-primary font-semibold text-[#601E1A] leading-[normal]">
                Get Quotes Nows
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
