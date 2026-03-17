import { useState, useRef } from "react";
import Button from "./Button";


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
            // autoPlay
            loop
            muted
            className="hero-video "
            onLoadedData={handleVideoLoad}
          />
        </div>

        <h1 className="hero-heading special-font absolute bottom-5 right-5 z-40 text-blue-75" >
          G<b>a</b>ming
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full " >
          <div className="mt-24 px-5 sm:px-10 " >
<h1 className="hero-heading special-font text-blue-100">redfi<b>e</b>d</h1>

<p className="mb-5 max-w-64 font-robert-regular text-blue-100">
  Enter the Metagame Layer <br /> Unleash the Play Economy
</p>

<Button id="watch-trailer  " title="Watch Trailer" leftIcon />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
