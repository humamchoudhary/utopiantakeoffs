"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 20000, easing: (t) => t };

export default function ServiceSlider({ services, rtl = false }) {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(max-width: 640px)": {
        slides: {
          perView: 1.3,
          spacing: 48,
        },
      },
    },
    slides: {
      perView: 4,
      spacing: 16,
    },
    rtl: true,
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(rtl ? 6 : -6, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + (rtl ? 6 : -6), true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + (rtl ? 6 : -6), true, animation);
    },
  });

  return (
    <div
      ref={sliderRef}
      className={` w-full md:w-[1200px] keen-slider absolute `}
    >
      {services.map((item, index) => (
        <div
          key={index}
          className="keen-slider__slide   flex items-center justify-center flex-shrink-0 w-32 h-28 md:h-36 md:w-72 px-8 py-6 md:px-11 md:py-8 rounded-2xl"
          style={{
            backgroundColor: item.color,
            width: 200,
            minWidth: 218,
            maxWidth: 218,
          }}
        >
          <p
            className="text-xl text-bg text-center font-semibold"
            style={{ color: item.text && item.text }}
          >
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
}
