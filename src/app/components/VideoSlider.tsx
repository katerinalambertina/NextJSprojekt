// app/components/VideoSlider.tsx

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function VideoSlider() {
  const videos = [
    "/Video/Product1.mp4",
    "/Video/Product2.mp4",
    "/Video/Product3.mp4", // Nahraďte správnými cestami k videím produktů
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-12 bg-gray-900">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full"
      >
        {videos.map((videoSrc, index) => (
          <SwiperSlide key={index}>
            <video
              className="w-full h-full object-cover"
              src={videoSrc}
              autoPlay
              loop
              muted
            ></video>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
