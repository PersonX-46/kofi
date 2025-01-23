"use client";
import { useState } from "react";

export const TikTokVideoGallery = () => {
  // List of TikTok video URLs
  const tiktokVideos = [
    "https://www.tiktok.com/@mrkofi/video/7462682334790307080", // Replace with your actual TikTok URLs
    "https://www.tiktok.com/@mrkofi/video/7462217821066480914",
    "https://www.tiktok.com/@mrkofi/video/7461999057259580679",
  ];

  // Optional: If you want to track selected videos
  const [activeVideo, setActiveVideo] = useState(0);

  return (
    <div className="bg-gradient-radial from-[#1d130d] to-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">
              Explore MrKofi&apos;s TikTok Journey
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            Discover engaging content and creative videos that showcase the essence of MrKofi.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiktokVideos.map((videoUrl, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
            >
              <iframe
                src={`https://www.tiktok.com/embed/v2/${videoUrl.split("/").pop()}`}
                title={`MrKofi TikTok Video ${index + 1}`}
                className="w-full h-[400px]"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
