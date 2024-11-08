"use client";
import React, { useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import {
  MoveRight,
  MoveLeft,
  MoveUpRight,
  ArrowLeft,
  ArrowRightLeft,
  ArrowRight,
} from "lucide-react";

import Image from "next/image";
const ServiceCard = ({ title, description, imagePath }) => (
  <div className="h-full min-w-[376px] max-w-[376px]  flex flex-col items-stretch keen-slider__slide">
    <Image
      src={imagePath}
      alt="Construction Estimator"
      className="rounded-3xl h-80 object-cover self-stretch"
    />

    <div className="py-4 mt-4">
      <h2 className="font-bold text-xl md:text-2xl mb-4">{title}</h2>
      <p className="text-fg leading-[24px] md:leading-8 text-sm md:text-xl">
        {description}
      </p>
    </div>
    <div className="flex items-end justify-end mt-4  ">
      <button className="flex items-center gap-2 group">
        <p className="text-fg font-semibold  md:text-xl group-hover:underline duration-150 leading-8">
          Read More
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          fill="none"
        >
          <rect
            width={32}
            height={32}
            fill="#13151B"
            rx={16}
            transform="matrix(1 0 0 -1 0 32)"
          />
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m21.497 18.31.573-7.52m0 0-7.52-.574m7.52.573L9.93 21.211"
          />
        </svg>
      </button>
    </div>
  </div>
);

const ConstructionTakeoffPage = ({ services }) => {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 3.338,
      spacing: 48,
    },
    breakpoints: {
      "(max-width: 1536px)": {
        slides: {
          perView: 3.338,
          spacing: 48,
        },
      },
      "(max-width: 640px)": {
        slides: {
          perView: 1.2,
          spacing: 48,
        },
      },
    },
    slideChanged(slider) {
      console.log(slider);
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <div className=" py-20 md:py-32 px-14 md:max-w-screen-2xl flex flex-col items-center justify-center">
      <div className="flex justify-between items-center mb-6">
        <div className="md:px-64 md:w-full w-[330px] text-center">
          <h1 className="text-xs md:text-xl font-semibold text-[#601E1A] text-center">
            Accurate Estimates, Faster Results
          </h1>
          <h1 className="text-2xl md:text-4xl font-semibold text-fg text-center">
            Construction Takeoff Services
          </h1>
          <p className="mb-12 text-[#475464] mt-4 text-xs tracking-[-0.24px] md:leading-[normal] leading-[18px] md:text-2xl text-center">
            Accurate takeoff services and estimates for contractors, architects,
            and builders, supporting bidding, budgeting, and procurement.
          </p>
        </div>
      </div>

      {loaded && instanceRef.current && (
        <div className="flex flex-row w-full bg-bg  h-min justify-end gap-[18px] mb-12">
          <button
            onClick={(e) => {
              e.stopPropagation() || instanceRef.current?.prev();
            }}
            className={`rounded-full p-3  ${instanceRef.current.track.details.minIdx === currentSlide ? "border-[#E4E4E4]" : "border-fg"}  border-2`}
          >
            <ArrowLeft
              className={`${
                instanceRef.current.track.details.minIdx === currentSlide
                  ? "text-[#E4E4E4]"
                  : "text-[#13151B]"
              } w-5 h-5 md:w-8 md:h-8`}
            />
          </button>
          <button
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
            className={` rounded-full p-3  ${instanceRef.current.track.details.maxIdx === currentSlide ? "border-[#E4E4E4]" : "border-fg"}  border-2`}
          >
            <ArrowRight
              className={`${
                instanceRef.current.track.details.maxIdx === currentSlide
                  ? "text-[#E4E4E4]"
                  : "text-[#13151B]"
              } w-5 h-5 md:w-8 md:h-8`}
            />
          </button>
        </div>
      )}
      <div className=" overflow-hidden self-start w-[335px] md:w-[1328px] relative">
        {loaded &&
          instanceRef.current.track.details.maxIdx === currentSlide && (
            <div className="z-10 left-0 top-0 absolute pointer-events-none h-full w-[100px] md:w-[583px] bg-gradient-to-l from-transparent to-bg" />
          )}
        <div ref={sliderRef} className="keen-slider w-full">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
          {loaded &&
            instanceRef.current.track.details.minIdx === currentSlide && (
              <div className="z-10 right-0 top-0 absolute pointer-events-none h-full w-[100px] md:w-[583px] bg-gradient-to-r from-transparent to-bg" />
            )}
        </div>
      </div>
    </div>
  );
};

export default ConstructionTakeoffPage;
