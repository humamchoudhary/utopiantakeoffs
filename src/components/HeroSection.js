import { Phone, Video } from "lucide-react";
import Link from "next/link";

export default async function HeroSection() {
  return (
    <div className="h-screen w-full 2xl:w-[1440px] bg-gradient-to-b  from-bg to-[#F8E5E3] rounded-b-[56px] flex flex-col items-center mt-12 md:mt-10 ">
      <div className="md:px-5 md:py-3 py-2 px-4  border-2 text-nowrap w-min border-[#972A20] bg-primaryhex/10 rounded-xl text-[#972A20] text-sm md:text-lg font-semibold text-center">
        Save 60% on Estimation
      </div>
      <p className=" text-[10px] md:text-lg mt-5 md:mt-6 text-center font-semibold text-[#5F6778] ">
        Material Takeoff & Construction Estimating Services
      </p>
      <h1 className="font-bold leading-[normal] md:text-8xl text-[32px] tracking-[-1.6px] md:tracking-[-4.8px] text-center">
        BID MORE WIN MORE!
      </h1>
      <div className="flex flex-row gap-2 items-center justify-center mt-6">
        <Link
          className=" text-sm md:text-base  border flex gap-[10px] items-center justify-center px-4 py-3 md:px-6 md:py-3 border-fg rounded-2xl"
          href="/contact"
        >
          <Phone className="w-5 h-5 md:w-[22px] md:h-[22px]" />
          Contact Us
        </Link>

        <Link
          className=" text-sm md:text-base border flex gap-1 items-center justify-center px-4 py-3 md:px-6 md:py-3 border-primary bg-primary text-bg rounded-2xl"
          href="/"
        >
          <Video className="w-5 h-5 md:w-[22px] md:h-[22px]" />
          Book a call
        </Link>
      </div>
    </div>
  );
}

const HeroBar = ({ h, color }) => {
  return <div className={` w-72 rounded-t-[32px] ` + h + color}></div>;
};
