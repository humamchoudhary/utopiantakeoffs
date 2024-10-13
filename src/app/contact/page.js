import React from "react";

const ContactPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="mt-[243px] flex flex-col items-center justify-center gap-6 w-min px-14">
        <div className="px-5 py-3 text-primary text-lg font-semibold leading-[normal] border border-primary rounded-xl bg-[#FAF3F2] text-nowrap">
          Affordable Estimate 30% Off
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-7xl font-bold leading-[normal] text-fg text-nowrap">
            Contact Our Friendly Team
          </h1>
          <p className="mt-3 text-center w-[800px]">
            Our expert team is here to assist you with all your construction
            estimating needs. Reach out for inquiries, quotes, or support—let's
            work together!
          </p>
        </div>
        <div className="px-6 py-3 rounded-xl bg-primary text-bg flex flex-row items-center justify-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={22}
            height={22}
            fill="none"
          >
            <path
              stroke="#fff"
              strokeWidth={1.5}
              d="M1.833 7.333A3.667 3.667 0 0 1 5.5 3.667h6.417a3.667 3.667 0 0 1 3.667 3.666v7.334a3.667 3.667 0 0 1-3.667 3.666H5.5a3.667 3.667 0 0 1-3.667-3.666V7.333Z"
            />
            <path
              stroke="#fff"
              strokeWidth={1.5}
              d="m15.584 8.556 1.412-1.507c1.137-1.213 3.17-.408 3.17 1.254v5.394c0 1.662-2.033 2.467-3.17 1.254l-1.412-1.507V8.556ZM11.917 9.167a1.833 1.833 0 1 1-3.667 0 1.833 1.833 0 0 1 3.667 0Z"
            />
          </svg>
          Book a call
        </div>
      </div>
    </main>
  );
};
export default ContactPage;
