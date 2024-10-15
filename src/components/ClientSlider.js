"use client";
import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 20000, easing: (t) => t };

export default function CleintSlider({ clients }) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 5,
      spacing: 48, // This corresponds to mx-8 in Tailwind
    },
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <section className="w-full py-16">
      <div className="container mx-auto text-center">
        <h2 className="text font-bold mb-2">We Worked With</h2>
        <h3 className="text-[40px] font-bold mb-12">Meet Our Clients</h3>
        <div className="overflow-hidden mx-auto w-[1200px] relative">
          <div
            ref={sliderRef}
            className="flex items-center justify-center keen-slider"
          >
            {clients.map((client, index) => (
              <div
                key={index}
                className="keen-slider__slide"
                style={{ width: 200 }}
              >
                {client.logo}
              </div>
            ))}
          </div>
          <div className="fade"></div>
        </div>
      </div>
    </section>
  );
}
