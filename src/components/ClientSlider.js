"use client";
import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 10000, easing: (t) => t };

export default function CleintSlider({ clients }) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 5,
      spacing: 32, // This corresponds to mx-8 in Tailwind
    },
    created(s) {
      s.moveToIdx(clients.length * 2 - 1, true, animation);
    },
    updated(s) {
      console.log("update");
      s.moveToIdx(
        s.track.details.abs + clients.length * 2 - 1,
        true,
        animation,
      );
    },

    animationEnded(s) {
      console.log("end");
      s.moveToIdx(
        s.track.details.abs + clients.length * 2 - 1,
        true,
        animation,
      );
    },
  });

  return (
    <section className="w-full py-16">
      <div className="container mx-auto text-center">
        <h2 className="text font-bold mb-2">We Worked With</h2>
        <h3 className="text-[40px] font-bold mb-12">Meet Our Clients</h3>
        <div className="overflow-hidden relative">
          <div ref={sliderRef} className=" flex items-center keen-slider">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="keen-slider__slide">
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
