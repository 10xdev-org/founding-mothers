"use client";

import { useState } from "react";
import Landing from "./components/Landing";
import ExplainerLanding from "./components/ExplainerLanding";
import ActionBar from "./components/ActionBar";
import { useScreensaverContext } from "./ScreensaverContext";

export default function Home() {
  // const { disableScreensaver, enableScreensaver } = useScreensaver();
  const { screensaverDisabled, setScreensaverDisabled } =
    useScreensaverContext();
  const [isLandingFocused, setIsLandingFocused] = useState(false);
  const [isExplainerFocused, setIsExplainerFocused] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setIsLandingFocused(false);
    setIsExplainerFocused(false);
  };

  const handleBackAction = () => {
    setSelectedVideo(null);
    setIsLandingFocused(false);
    setIsExplainerFocused(false);
    setScreensaverDisabled(false);
  };

  const handleLandingWatchFull = () => {
    setScreensaverDisabled(true);
    setIsLandingFocused(true);
  };

  const handleExplainerWatchFull = () => {
    setIsExplainerFocused(true);
    setScreensaverDisabled(true);
  };

  return (
    <>
      {selectedVideo ? (
        <ExplainerLanding
          video={selectedVideo}
          isFocused={isExplainerFocused}
          handleBackAction={handleBackAction}
          handleExplainerWatchFull={handleExplainerWatchFull}
        />
      ) : (
        <Landing
          isFocused={isLandingFocused}
          handleVideoClick={handleVideoClick}
          handleBackAction={handleBackAction}
          handleLandingWatchFull={handleLandingWatchFull}
        />
      )}
      {/* <ActionBar
        isLandingFocused={isLandingFocused}
        isExplainerFocused={isExplainerFocused}
        selectedVideo={selectedVideo}
        handleLandingWatchFull={handleLandingWatchFull}
        handleExplainerWatchFull={handleExplainerWatchFull}
        handleBackAction={handleBackAction}
      /> */}
      {/* I want to add another overlay here */}
    </>
  );
}
