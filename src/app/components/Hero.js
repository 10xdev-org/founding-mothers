"use client";

import { useEffect, useRef } from "react";
import Overlay from "./Overlay";

const Hero = ({
  videoSrc,
  backgroundSrc,
  isFocused,
  handleBackAction,
  overlayOpts = {},
}) => {
  const videoRef = useRef(null); // Define the ref for the video element

  useEffect(() => {
    if (isFocused && videoRef.current) {
      videoRef.current.currentTime = 0; // Restart the video
      videoRef.current.play(); // Ensure the video plays
    }
  }, [isFocused]); // Trigger when isFocused changes

  return (
    <section className="hero-section fixed inset-0 h-screen overflow-hidden">
      <video
        ref={videoRef} // Assign the ref to the video element
        className={`w-full h-full ${
          isFocused ? "object-contain bg-black" : "object-cover"
        }`}
        src={isFocused ? videoSrc : backgroundSrc} // Use videoSrc or backgroundSrc based on isFocused
        autoPlay
        loop={!isFocused} // Loop only if not focused
        muted={!isFocused} // Mute only if not focused
        playsInline
        controls={isFocused} // Show controls only when focused
        controlsList={isFocused ? "nodownload noremoteplayback" : undefined} // Apply controlsList only when focused
        onEnded={isFocused ? handleBackAction : undefined} // Trigger handleBackAction only when focused
      />
      <Overlay
        animateIn={!isFocused} // Set animateIn to false if isFocused is true
        animateOut={isFocused} // Set animateOut to true if isFocused is true
        animationDuration={1}
        mainOpacity={0.2} // Use a fixed opacity for the overlay
        {...overlayOpts}
      />
    </section>
  );
};

export default Hero;
