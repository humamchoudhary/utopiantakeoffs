"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const ServiceCard = ({ name, description, imagePath, link }) => (
  <div className="flex flex-col items-stretch bg-[#13151B] rounded-3xl overflow-hidden h-full transition-all duration-300 hover:ring-2 hover:ring-[#972A20] group">
    <div className="relative h-80">
      <Image
        src={imagePath}
        alt={name}
        className="h-80 object-cover w-full p-6 rounded-xl"
        width={380}
        height={300}
      />
    </div>

    <div className="p-6 flex flex-col h-full">
      <h2 className="font-bold text-[28px] text-[#FAFAFB] mb-2">{name}</h2>
      <p className="text-[#B5B6BE] text-xl font-medium leading-7 flex-grow">
        {description}
      </p>
      <div className="flex justify-end mt-4">
        <Link
          href={link ? link : "/"}
          className="flex items-center gap-2 group/btn"
        >
          <p className="text-[#AC554D] font-semibold text-xl ">Read More</p>
          <svg
            width="15"
            height="13"
            viewBox="0 0 15 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9531 9.31003L13.5263 1.78937M13.5263 1.78937L6.00561 1.21617M13.5263 1.78937L1.38548 12.2106"
              stroke="#AC554D"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  </div>
);

const ConstructionTakeoffPage = ({ services }) => {
  return (
    <div className="bg-black py-20 px-4 md:px-14 md:max-w-screen-2xl mx-auto z-0 -translate-y-5 rounded-md">
      <div className="mb-12">
        <h1 className="text-center text-[#AC554D] text-sm md:text-2xl font-semibold uppercase tracking-wider">
          Construction Estimator, Material Takeoffs
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {services.slice(0, 6).map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ConstructionTakeoffPage;
