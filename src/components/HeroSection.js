import { Phone, Video } from "lucide-react";
import Link from "next/link";

export default async function HeroSection() {
  return (
    
    <div className="h-screen w-full 2xl:w-[1440px] rounded-b-[56px] flex flex-col items-center mt-12 md:mt-10 ">
      <div className="absolute inset-0 w-full h-full">
        <svg width="100%" height="100%" viewBox="0 0 1440 806" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <path d="M505.264-16 98.724 806M530.527-16 187.814 806M555.789-16 269.771 806M581.053-16 346.395 806M606.316-16 419.02 806M631.58-16 488.678 806M656.844-16 556.198 806M682.105-16l-59.831 822m85.095-822-19.904 821.999M732.633-16l19.904 821.999M757.895-16l59.831 822M783.16-16l100.646 822M808.42-16l142.902 822M833.686-16l187.294 822M858.947-16 1093.6 806M884.213-16l286.017 822M909.473-16l342.717 822M934.738-16l406.542 822M470.682-.042H969.32M467.965 4.612h504.072M464.633 10.32h510.739m-514.794 6.942h518.847m-523.737 8.374h528.625M449.836 35.659h540.332M442.877 47.577h554.25M434.656 61.654h570.694M425.002 78.186H1015M413.729 97.491h612.541M400.631 119.92h638.739m-653.882 25.933h669.022M368.061 175.7h703.879m-723.856 34.207h743.836m-766.635 39.047h789.435m-815.365 44.402h841.295M269.975 343.67h900.055m-933.233 56.821h966.413M199.443 464.453H1240.56M157.527 536.237H1282.48M110.617 616.566H1329.38M58.27 706.215h1323.46M0 806h1440" stroke="#B3B3B3" strokeOpacity=".08"/>
          <path d="M480-16 0 806M960-16l480 822" stroke="#14161F"/>
        </svg>
      </div>
      
      <div className="md:px-6 md:py-3 py-2 px-4  border-2 text-nowrap w-min border-[#89261D] bg-[#531712] rounded-full text-[#FAFAFB] text-sm md:text-lg font-semibold text-center">
        Save 60% of Your Estimating Expense
      </div>
      <div className="m-5 z-10">
        <div className="relative flex flex-row items-center justify-center">
          <h1 className="font-normal md:text-[120px] text-[60px] text-white tracking-[-2px] md:tracking-[-5%] text-center leading-[144px]">
            Bid
          </h1>
          <div className="relative">
            <svg width="394" height="144" viewBox="0 0 394 144" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M390 110.303C322.653 50.9415 297.659 26.0884 225.105 9.53394C152.551 -7.02051 -22.6636 11.3256 7.44372 95.1776C37.551 179.03 248.774 123.8 379.238 100.727" stroke="#972A20" strokeWidth="7" strokeLinecap="round"/>
            </svg>
            <span className="absolute text-white ml-2 font-normal md:text-[120px] text-[60px] tracking-[-2px] md:tracking-[-4px] top-1/2 left-[40%] transform -translate-x-1/2 -translate-y-1/2">
              More
            </span>
          </div>
        </div>
      </div>
      
      <h1 className="font-bold leading-[216px] md:text-[180px] text-[32px] tracking-[-1.6px] md:tracking-[-4.8px] text-center">
        
        WIN MORE!
      </h1>

      <div className="flex flex-row gap-4 justify-center items-center mt-6 md:mt-0">
          <Link
            className="text-white text-sm md:text-base border-2 flex gap-2 items-center justify-center px-4 py-3 md:px-6 border-white rounded-full"
            href="/contact"
          >
            <Phone className="w-5 h-5" />
            Contact Us
          </Link>

          <Link
            className="text-sm md:text-base border-2 flex gap-2 items-center justify-center px-4 py-3 md:px-6 bg-white text-black rounded-full"
            href="/"
          >
            Book a Call
          </Link>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between w-full px-8 md:px-16 lg:px-24 ">
        <div className="text-white text-xl md:text-[32px] font-medium leading-9 tracking-[-5%]">
          <p>Material Takeoff &</p>
          <p>Construction Estimating</p>
          <p>Services</p>
        </div>

      </div>
    </div>
  );
}

const HeroBar = ({ h, color }) => {
  return <div className={` w-72 rounded-t-[32px] ` + h + color}></div>;
};
