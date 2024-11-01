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
          perView: 1.1,
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
      className={`  md:w-[1200px] flex flex-row justify-center items-center keen-slider absolute `}
    >
      {[...services, ...services].map((item, index) => (
        <div
          key={index}
          className="keen-slider__slide   flex items-center justify-center flex-shrink-0 h-32 w-72 px-11 py-8 rounded-2xl"
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
