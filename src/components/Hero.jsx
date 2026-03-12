import { useState, useRef } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 3;
  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVideoClick = () => {
    setHasClicked(true);

    setCurrentIndex(upcomingVideoIndex);
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
                src={getVideoSrc(upcomingVideoIndex)}
                id="current-video"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>

          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            onLoadedData={handleVideoLoad}
          />

          <video
            src={getVideoSrc(
              currentIndex == totalVideos - 1 ? 1 : currentIndex,
            )}
            autoPlay
            loop
            muted
            className="hero-video "
            onLoadedData={handleVideoLoad}
          />
        </div>

        <h1 className="hero-heading" >
          G<b>a</b>ming
        </h1>
      </div>
    </section>
  );
};

export default Hero;
