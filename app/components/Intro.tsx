import React, { useEffect, useRef, useState } from "react";
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

const Intro = () => {
  const [show, setShow] = useState(true);
  return (
    <motion.div
      variants={container}
      initial="show"
      animate="hidden"
      className={`item-center absolute top-0 z-50 flex h-screen w-screen justify-center bg-white ${
        show ? "block" : "hidden"
      }`}
    >
      <video
        autoPlay
        playsInline
        muted
        className="w-1/2"
        onEnded={() => setShow(false)}
        // src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
        // alt=""
      >
        <source src="https://res.cloudinary.com/hutches/video/upload/v1651933812/makai/makai.mp4" />
      </video>
    </motion.div>
  );
};

export default Intro;
