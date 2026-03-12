import { useState, useRef } from "react";
// import Video from "./Video";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const handleMiniVideoClick = () => {
    setHasClicked(true);

    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const getVideoSrc = (index) => `/videos/hero-${index}.mp4`;

  return (
    <section id="hero">
      <div id="video-frame">
        <div>
          <div className="video-mask  ">
            <div onClick={handleMiniVideoClick} className="mini-video">
              <video
                loop
                muted
                ref={nextVideoRef}
                src={getVideoSrc(currentIndex + 1)}
                id="current-video"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
