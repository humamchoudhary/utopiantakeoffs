"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import WrittenReviewTile from "./WrittenReviewTile";

const ReviewCard = ({ name, image, currentIdx, index }) => (
  <div
    className={`  min-w-[376px] max-w-[376px] justify-center flex flex-col items-stretch keen-slider__slide  `}
    style={{
      minWidth: 350,
      maxWidth: 350,
    }}
  >
    {index != 0 && name && (
      <div
        className={`bg-fg w-full flex flex-col justify-end rounded-[24px] px-6 py-8 ${currentIdx == index ? "h-full" : "h-2/3"} duration-150 `}
      >
        <div className="flex flex-row justify-between">
          <p className="text-bg">{name}</p>
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

const animation = { duration: 12000, easing: (t) => t };
const ReviewScoller = ({ data, rev }) => {
  const [sliderRef] = useKeenSlider({
    loop: true,

    slides: {
      perView: 3.8,
      spacing: 12,
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
    <div style={{ height: 752 }} className="relative overflow-hidden">
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
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 3.2,
      spacing: 40,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="py-32 px-14 max-w-screen-2xl flex flex-col items-center justify-center">
      <div className="flex justify-between items-center mb-6">
        <div className="px-64">
          <h1 className="text-xl font-semibold text-[#601E1A] text-center">
            Accurate Estimates, Faster Results
          </h1>
          <h1 className="text-4xl font-semibold text-fg text-center">
            Construction Takeoff Reviews
          </h1>
          <p className="mb-12 text-[#475464] mt-4 text-2xl text-center">
            Accurate takeoff services and estimates for contractors, architects,
            and builders, supporting bidding, budgeting, and procurement.
          </p>
        </div>
      </div>

      <div className="flex flex-row items-center overflow-hidden self-start w-[1328px] relative">
        {loaded && instanceRef.current && (
          <button
            onClick={(e) => {
              e.stopPropagation() || instanceRef.current?.prev();
            }}
            className={`rounded-full p-3 z-50 ${instanceRef.current.track.details.minIdx === currentSlide ? "bg-transparent" : "bg-primary"} border-primary  border-2`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="none"
            >
              <path
                stroke={
                  instanceRef.current.track.details.minIdx === currentSlide
                    ? "#601E1A"
                    : "#FFF"
                }
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="m13.402 10.805-6 6m0 0 6 6m-6-6h18"
              />
            </svg>
          </button>
        )}
        <div className="overflow-hidden self-start w-full relative">
          {loaded &&
            instanceRef.current.track.details.minIdx != currentSlide && (
              <div className="z-10 left-0 top-0 absolute  pointer-events-none h-full w-[450px] bg-gradient-to-l from-transparent to-bg" />
            )}
          <div ref={sliderRef} className="keen-slider w-full h-[500px]">
            {a_reviews.map((service, index) => (
              <ReviewCard
                key={index}
                {...service}
                currentIdx={currentSlide + 1}
                index={index}
              />
            ))}
            {loaded &&
              instanceRef.current.track.details.maxIdx != currentSlide && (
                <div className="z-10 right-0 top-0 absolute   pointer-events-none h-full w-[450px] bg-gradient-to-r from-transparent to-bg" />
              )}
          </div>
        </div>
        {loaded && instanceRef.current && (
          <button
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
            className={` rounded-full p-3 z-50  ${instanceRef.current.track.details.maxIdx === currentSlide ? "bg-transparent" : "bg-primary"} border-primary border-2`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="none"
            >
              <path
                stroke={
                  instanceRef.current.track.details.maxIdx === currentSlide
                    ? "#601E1A"
                    : "#FFF"
                }
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="m19 22.402 6-6m0 0-6-6m6 6H7"
              />
            </svg>
          </button>
        )}
      </div>

      <div className="relative grid grid-cols-3 gap-6 mt-32">
        <ReviewScoller rev={false} data={w_reviews} />
        <ReviewScoller rev={true} data={w_reviews} />
        <ReviewScoller rev={false} data={w_reviews} />
        <div className=" absolute h-full w-full pointer-events-none bg-gradient-to-t from-bg to-bg via-transparent top-0 left-0" />
      </div>
    </div>
  );
};

export default ReviewSection;