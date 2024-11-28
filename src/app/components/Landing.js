// components/Landing.js
"use client";

import React from "react";
import Hero from "./Hero";
import WelcomeBanner from "./WelcomeBanner";
import VideoCardPanel from "./VideoCardPanel";
import { ArrowBigLeft, ChevronsLeft } from "lucide-react";

const Landing = ({
  isFocused = false,
  handleVideoClick,
  handleBackAction,
  handleLandingWatchFull,
}) => {
  return (
    <div className="relative overflow-y-auto h-[calc(100vh)]">
      {/* Adjust height to allow scrolling */}

      {/* Pass isFocused to Hero */}
      {!isFocused && (
        <div
          className={`transition-opacity duration-500 ${
            isFocused ? "opacity-0" : "opacity-100"
          }`}
        >
          <WelcomeBanner />
          <button
            onClick={handleLandingWatchFull}
            className="ml-10 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Watch Full Video
          </button>

          <VideoCardPanel
            isFocused={isFocused}
            handleVideoClick={handleVideoClick}
          />
        </div>
      )}
      <Hero
        isFocused={isFocused}
        videoSrc={"./videos/Women%20Animation%20Full%20Video.mp4"}
        backgroundSrc={"./videos/screensaver.mp4"}
        overlayOpts={{
          leftSize: { height: 60, width: 100 }, // Customize left triangle size
          rightSize: { height: 30, width: 200 },
        }}
        handleBackAction={handleBackAction}
      />
      {isFocused && (
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
      )}
    </div>
  );
};

export default Landing;
