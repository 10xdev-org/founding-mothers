"use client";
import VideoCard from "./VideoCard";
import foundingMothersData from "/public/foundingMothers.json";

export default function VideoCardPanel({ handleVideoClick }) {
  return (
    <div className="video-gallery grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-5 p-5">
      {foundingMothersData.map((video, index) => (
        <VideoCard
          key={index}
          vid={video}
          openVid={() => handleVideoClick(video)}
        />
      ))}
    </div>
  );
}
