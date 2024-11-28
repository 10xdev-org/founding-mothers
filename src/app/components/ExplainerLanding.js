"use client";

import React from "react";
import Hero from "./Hero";
import { ChevronsLeft } from "lucide-react";

const ExplainerLanding = ({
  isFocused = false,
  video,
  handleBackAction,
  handleExplainerWatchFull,
}) => {
  return (
    <div className="overflow-y-auto h-[calc(100vh)]">
      <div
        className={`transition-opacity duration-500 ${
          isFocused ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="welcome-banner h-[90vh] flex flex-col items-start justify-start p-10 bg-transparent text-white overflow-y-auto">
          <h2 className="text-5xl md:text-7xl font-bold pb-10">{video.name}</h2>
          <button
            onClick={handleExplainerWatchFull}
            className="mb-10 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Watch Full Video
          </button>
          <div className="flex flex-col justify-start align-top text-lg md:text-xl italic text-gray-300 p-3 rounded bg-blue-500 bg-opacity-30">
            {video.bio.split("\n").map((line, index) => (
              <p key={index} className="mb-4">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Hero
        isFocused={isFocused}
        videoSrc={video.path}
        backgroundSrc={video.path}
        handleBackAction={handleBackAction}
        overlayOpts={{
          leftSize: { height: 0, width: 0 },
          rightSize: { height: 0, width: 0 },
        }}
      />
      <button
        onClick={handleBackAction}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/50 text-white rounded-full w-32 h-32 flex items-center justify-center hover:bg-black/70 focus:outline-none focus:ring focus:ring-white"
        style={{
          borderTopLeftRadius: "50%",
          borderBottomLeftRadius: "50%",
          width: "8vh",
          height: "16vh",
          left: "0px", // Ensures the circular part sticks out
        }}
      >
        <ChevronsLeft className="w-10 h-10 transform -translate-x-2" />
      </button>
    </div>
  );
};

export default ExplainerLanding;
