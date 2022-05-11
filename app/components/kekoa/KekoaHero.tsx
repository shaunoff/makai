import React, { useEffect, useRef } from "react";

const KekoaHero = () => {
  const videoPlayer = useRef<HTMLVideoElement>(null);

  const setPlayBack = () => {
    if (videoPlayer.current) {
      videoPlayer.current.playbackRate = 0.5;
    }
  };
  return (
    <div>
      <div className="w-full opacity-90">
        <video
          ref={videoPlayer}
          autoPlay
          loop
          playsInline
          muted
          className="min-w-ful absolute z-0"
          onCanPlay={() => setPlayBack()}
          //className="absolute z-0 min-w-full"
          // src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
          // alt=""
        >
          <source src="https://res.cloudinary.com/hutches/video/upload/v1652226686/makai/production_ID_3916038.mp4" />
        </video>
        {/* <div className="absolute top-0 z-10 h-[720px] w-full bg-blue-500 bg-opacity-40"></div> */}
      </div>
      <div className="relative z-20 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-4">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
              <div className="lg:my-40">
                <div className="mt-4 mb-2 font-extrabold sm:mt-5 sm:text-2xl lg:mt-6 xl:text-6xl">
                  <p className="block text-white [text-shadow:0_4px_8px_rgba(0,0,0,0.5)] sm:text-6xl xl:text-6xl">
                    ‘A’ohe hana nui
                  </p>
                  <p className="block text-white [text-shadow:0_4px_8px_rgba(0,0,0,0.5)] sm:text-6xl xl:text-6xl">
                    ke alu ‘ia
                  </p>
                </div>
                <p className="block text-5xl font-extrabold text-[#F1B159] [text-shadow:0_4px_8px_rgba(0,0,0,0.5)]">
                  No task is too big when
                </p>
                <p className="block text-5xl font-extrabold text-[#F1B159] [text-shadow:0_4px_8px_rgba(0,0,0,0.5)]">
                  done together by all
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[200px]  bg-gradient-to-b from-transparent to-white"></div>
      </div>
    </div>
  );
};

export default KekoaHero;
