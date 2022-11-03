import React, { useRef } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
    transition: {
      delay: 5.5,
    },
  },
  show: {
    opacity: 1,
  },
};

const Intro = ({ setShowIntro }: { setShowIntro: (arg: boolean) => void }) => {
  const videoPlayer = useRef<HTMLVideoElement>(null);

  const setPlayBack = () => {
    if (videoPlayer.current) {
      videoPlayer.current.playbackRate = 1.6;
    }
  };
  return (
    <div
      // variants={container}
      // initial="show"
      // animate="hidden"
      className={`item-center absolute top-0 z-50 flex h-screen w-screen justify-center bg-white`}
    >
      <video
        ref={videoPlayer}
        autoPlay
        playsInline
        muted
        className="w-full md:w-1/2"
        onCanPlay={() => setPlayBack()}
        onEnded={() => setShowIntro(false)}
      >
        <source src="https://res.cloudinary.com/hutches/video/upload/v1651933812/makai/makai.mp4" />
      </video>
    </div>
  );
};

export default Intro;
