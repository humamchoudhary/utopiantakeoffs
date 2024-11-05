"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import WrittenReviewTile from "./WrittenReviewTile";
import { MoveRight, MoveLeft } from "lucide-react";

const ReviewCard = ({ name, image, currentIdx, index }) => {
  return (
    <div
      className={`  min-w-[376px] max-w-[376px] justify-center flex flex-col items-center keen-slider__slide  `}
      style={{
        minWidth: 350,
        maxWidth: 350,
      }}
    >
      {name && (
        <div
          className={`bg-fg w-full flex flex-col justify-end rounded-[24px] px-6 py-8 ${currentIdx == index ? "h-full" : "h-2/3"} duration-150 `}
        >
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-bg text-xs ">Review From</p>
              <p className="text-bg text-lg">{name}</p>
            </div>
            {currentIdx == index ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
              >
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07M11 5 6 9H2v6h4l5 4V5Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
              >
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="m23 9-6 6m0-6 6 6M11 5 6 9H2v6h4l5 4V5Z"
                />
              </svg>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const animation = { duration: 12000, easing: (t) => t };
const ReviewScoller = ({ data, rev, className }) => {
  const [sliderRef] = useKeenSlider({
    loop: true,

    slides: {
      perView: 3.8,
      spacing: 12,
    },

    breakpoints: {
      "(max-width: 640px)": {
        slides: {
          perView: 5,
          spacing: 16,
        },
      },
    },
    vertical: true,

    loop: true,
    renderMode: "performance",
    created(s) {
      s.moveToIdx(rev ? -5 : 5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + (rev ? -5 : 5), true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + (rev ? -5 : 5), true, animation);
    },
  });

  return (
    <div
      className={
        "relative overflow-hidden h-[1000px] md:h-[752px] " + className
      }
    >
      <div ref={sliderRef} className="keen-slider" style={{ height: "100%" }}>
        {data.map((item, index) => (
          <div className="keen-slider__slide" style={{ height: "min-content" }}>
            <WrittenReviewTile key={index} {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

const ReviewSection = ({ a_reviews, w_reviews }) => {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const offset = window.innerWidth <= 600 ? 0 : 1;
  console.log(window.innerWidth);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 3.2,
      origin: "center",
      spacing: 40,
    },
    breakpoints: {
      "(max-width: 640px)": {
        slides: {
          origin: "center",
          perView: 1.2,
          spacing: 24,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="w-full  py-8 md:py-32 md:px-14 md:max-w-screen-2xl flex flex-col items-center justify-center">
      <div className="flex justify-between items-center mb-6 w-full">
        <div className="w-full px-4 md:px-64">
          <h1 className="text-xs md:text-xl font-semibold text-[#601E1A] text-center">
            Accurate Estimates, Faster Results
          </h1>
          <h1 className="text-xl md:text-4xl font-semibold text-fg text-center mt-2">
            Construction Takeoff Reviews
          </h1>
          <p className="mb-8 md:mb-12 text-[#475464] mt-4 leading-[18px] md:leading-[normal] text-xs md:text-2xl text-center">
            Accurate takeoff services and estimates for contractors, architects,
            and builders, supporting bidding, budgeting, and procurement.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center overflow-hidden w-full md:w-[1328px] relative md:px-4">
        {loaded && instanceRef.current && (
          <button
            onClick={(e) => {
              e.stopPropagation() || instanceRef.current?.prev();
            }}
            className={`rounded-full p-2 absolute md:p-3 left-5 md:right-auto md:relative z-50 ${
              instanceRef.current.track.details.minIdx === currentSlide
                ? "bg-white"
                : "bg-primary"
            } border-primary border-2`}
          >
            <MoveLeft
              className={`w-6 h-6  ${
                instanceRef.current.track.details.minIdx === currentSlide
                  ? "text-primary"
                  : "text-white"
              }`}
            />
          </button>
        )}
        <div className="overflow-hidden self-start w-full relative">
          {loaded &&
            instanceRef.current.track.details.minIdx !== currentSlide && (
              <div className="z-10 left-0 top-0 absolute pointer-events-none h-full w-[20px] md:w-[450px] bg-gradient-to-l from-transparent to-bg" />
            )}
          <div
            ref={sliderRef}
            className="keen-slider w-full h-[380px] md:h-[500px]"
          >
            {a_reviews
              .slice(window.innerWidth <= 600 ? 1 : 0)
              .map((service, index) => (
                <ReviewCard
                  key={index}
                  {...service}
                  currentIdx={currentSlide + offset}
                  index={index}
                />
              ))}
          </div>
          {loaded &&
            instanceRef.current.track.details.maxIdx !== currentSlide && (
              <div className="z-10 right-0 top-0 absolute pointer-events-none h-full w-[10px] md:w-[450px] bg-gradient-to-r from-transparent to-bg" />
            )}
        </div>
        {loaded && instanceRef.current && (
          <button
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
            className={`rounded-full p-2 md:p-3 absolute right-5 md:right-auto md:relative z-50 ${
              instanceRef.current.track.details.maxIdx === currentSlide
                ? "bg-white"
                : "bg-primary"
            } border-primary border-2`}
          >
            <MoveRight
              className={`w-6 h-6  ${
                instanceRef.current.track.details.maxIdx === currentSlide
                  ? "text-primary"
                  : "text-white"
              }`}
            />
          </button>
        )}
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-16 md:mt-32 w-full px-4">
        <ReviewScoller rev={false} data={w_reviews} />
        <ReviewScoller
          rev={true}
          data={w_reviews}
          className="hidden md:block"
        />
        <ReviewScoller
          rev={false}
          data={w_reviews}
          className="hidden md:block"
        />
        <div className="absolute h-full w-full pointer-events-none bg-gradient-to-t from-bg to-bg via-transparent top-0 left-0" />
      </div>
    </div>
  );
};

export default ReviewSection;
