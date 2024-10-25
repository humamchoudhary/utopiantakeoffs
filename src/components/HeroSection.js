import Link from "next/link";

export default async function HeroSection() {
  return (
    <div className="h-screen w-full 2xl:w-[1440px] bg-gradient-to-b  from-bg to-[#F8E5E3] rounded-b-[56px] flex flex-col items-center mt-10 ">
      <div className="px-5 py-3 border-2 text-nowrap w-min border-[#972A20] bg-primaryhex/10 rounded-xl text-[#972A20] text-lg font-semibold ">
        Save 60% on Estimation
      </div>
      <p className="text-lg mt-6">
        Material Takeoff & Construction Estimating Services
      </p>
      <h1 className="font-bold text-8xl">BID MORE WIN MORE!</h1>
      <div className="flex flex-row gap-2 items-center justify-center mt-6">
        <Link
          className="border flex gap-[10px] items-center justify-center px-6 py-3 border-fg rounded-2xl"
          href="/contact"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={22}
            height={22}
            fill="none"
          >
            <path
              stroke="#13151B"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19.25 17.417v-1.51c0-.749-.456-1.423-1.152-1.701l-1.865-.746a1.833 1.833 0 0 0-2.32.882l-.163.325s-2.292-.459-4.125-2.292C7.792 10.542 7.333 8.25 7.333 8.25l.325-.162a1.833 1.833 0 0 0 .882-2.32l-.746-1.866A1.833 1.833 0 0 0 6.092 2.75H4.583c-1.012 0-1.833.82-1.833 1.833 0 8.1 6.566 14.667 14.667 14.667 1.012 0 1.833-.82 1.833-1.833Z"
            />
          </svg>
          Contact Us
        </Link>

        <Link
          className="border flex gap-1 items-center justify-center px-6 py-3 border-primary bg-primary text-bg rounded-2xl"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={22}
            height={22}
            fill="none"
          >
            <path
              stroke="#fff"
              strokeWidth={1.5}
              d="M1.833 7.333A3.667 3.667 0 0 1 5.5 3.667h6.417a3.667 3.667 0 0 1 3.666 3.666v7.334a3.667 3.667 0 0 1-3.666 3.666H5.5a3.667 3.667 0 0 1-3.667-3.666V7.333Z"
            />
            <path
              stroke="#fff"
              strokeWidth={1.5}
              d="m15.583 8.556 1.413-1.507c1.137-1.213 3.17-.408 3.17 1.254v5.394c0 1.662-2.034 2.467-3.17 1.254l-1.413-1.507V8.556ZM11.917 9.167a1.833 1.833 0 1 1-3.667 0 1.833 1.833 0 0 1 3.667 0Z"
            />
          </svg>
          Book a call
        </Link>
      </div>
    </div>
  );
}

const HeroBar = ({ h, color }) => {
  return <div className={` w-72 rounded-t-[32px] ` + h + color}></div>;
};
