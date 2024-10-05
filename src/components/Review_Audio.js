"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Image from "next/image";
const ServiceCard = ({ name, image, currentIdx, index }) => (
  <div
    className={`  min-w-[376px] max-w-[376px] justify-center flex flex-col items-stretch keen-slider__slide  `}
    style={{
      minWidth: 350,
      maxWidth: 350,
    }}
  >
    {index != 0 && (
      <div
        className={`bg-fg w-full flex flex-col justify-end rounded-[24px] px-6 py-8 ${currentIdx == index ? "h-full" : "h-2/3"} duration-150 `}
      >
        <div>
          <p className="text-bg">{name}</p>
        </div>
      </div>
    )}
  </div>
);
const ReviewSlider = ({ reviews }) => {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef2, instanceRef2] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 40,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  console.log(currentSlide);
  return (
    <div className="py-32 px-14 max-w-screen-2xl flex flex-col items-center justify-center">
      <div className="flex justify-between items-center mb-6">
        <div className="px-64">
          <h1 className="text-xl font-semibold text-[#601E1A] text-center">
            Accurate Estimates, Faster Results
          </h1>
          <h1 className="text-4xl font-semibold text-fg text-center">
            Construction Takeoff Services
          </h1>
          <p className="mb-12 text-[#475464] mt-4 text-2xl text-center">
            Accurate takeoff services and estimates for contractors, architects,
            and builders, supporting bidding, budgeting, and procurement.
          </p>
        </div>
      </div>

      {loaded && instanceRef2.current && (
        <div className="flex flex-row w-full bg-bg  h-min justify-end gap-[18px] mb-12">
          <button
            onClick={(e) => {
              e.stopPropagation() || instanceRef2.current?.prev();
            }}
            className={`rounded-full p-3  ${instanceRef2.current.track.details.minIdx === currentSlide ? "border-[#E4E4E4]" : "border-fg"}  border-2`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="none"
            >
              <path
                stroke={
                  instanceRef2.current.track.details.minIdx === currentSlide
                    ? "#E4E4E4"
                    : "#13151B"
                }
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="m13.402 10.805-6 6m0 0 6 6m-6-6h18"
              />
            </svg>
          </button>
          <button
            onClick={(e) => e.stopPropagation() || instanceRef2.current?.next()}
            className={` rounded-full p-3  ${instanceRef2.current.track.details.maxIdx === currentSlide ? "border-[#E4E4E4]" : "border-fg"}  border-2`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="none"
            >
              <path
                stroke={
                  instanceRef2.current.track.details.maxIdx === currentSlide
                    ? "#E4E4E4"
                    : "#13151B"
                }
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="m19 22.402 6-6m0 0-6-6m6 6H7"
              />
            </svg>
          </button>
        </div>
      )}
      <div className=" overflow-hidden self-start w-[1328px] relative">
        {loaded &&
          instanceRef2.current.track.details.minIdx != currentSlide && (
            <div className="z-10 left-0 top-0 absolute  h-full w-[450px] bg-gradient-to-l from-transparent to-bg" />
          )}
        <div ref={sliderRef2} className="keen-slider w-full h-[500px]">
          {reviews.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              currentIdx={currentSlide + 1}
              index={index}
            />
          ))}
          {loaded &&
            instanceRef2.current.track.details.maxIdx != currentSlide && (
              <div className="z-10 right-0 top-0 absolute  h-full w-[450px] bg-gradient-to-r from-transparent to-bg" />
            )}
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
