import Link from "next/link";

export default async function HeroSection() {
  return (
    <div className="h-screen w-full bg-gradient-to-b  from-bg to-[#F8E5E3] rounded-b-[56px] flex flex-col items-center mt-10 ">
      <div className="px-5 py-3 border-2 border-primary bg-primaryhex/10 rounded-xl ">
        Save 60% on Estimation
      </div>
      <p className="text-lg mt-6">
        Material Takeoff & Construction Estimating Services
      </p>
      <h1 className="font-bold text-8xl">BID MORE WIN MORE!</h1>
      <div className="flex lfex-row gap-2 items-center justify-center mt-6">
        <Link className="border px-6 py-3 border-fg rounded-2xl" href="/">
          Contact Us
        </Link>

        <Link
          className="border px-6 py-3 border-primary bg-primary text-bg rounded-2xl"
          href="/"
        >
          Get Estimation
        </Link>
      </div>

      <div className="flex items-end flex-row mt-16 gap-6">
        <HeroBar h="h-[360px]" color=" bg-primary" />
        <HeroBar h="h-[170px]" color=" bg-bg" />
        <HeroBar h="h-[270px]" color=" bg-bg" />
        <HeroBar h="h-[360px]" color=" bg-fg" />
      </div>
    </div>
  );
}

const HeroBar = ({ h, color }) => {
  return <div className={` w-72 rounded-t-[32px] ` + h + color}></div>;
};
