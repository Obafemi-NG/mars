import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from "./LandingPage.module.css";

import Navbar from "../../components/uiComponents/Navbar/Navbar";
import Line from "../../components/uiComponents/Line/Line";

import textVideo from "../../assets/video/Mars.mp4";
import videoPoster from "../../assets/images/mars_bg_image.png";
import haze from "../../assets/images/haze.png";

const pageVariant = {
  initial: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
  exit: {
    x: -1000,
    opacity: 0,
    transition: { duration: 0.7, delay: 0.4 },
  },
};

const marsVariant = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 4,
      duration: 2,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

const LandingPage: FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateCursorPosition);
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <motion.div
      variants={pageVariant}
      initial="initial"
      animate="visible"
      exit="exit"
      className={styles.pageContainer}
    >
      <div
        className={styles.pageContent}
        style={{
          backgroundPosition: `-${cursorPosition.x}px `,
        }}
      >
        <Navbar />
        <div className={styles.bodyContent}>
          <Line />
          <div className={styles.left}>
            <p className={styles.tochka}>Точка назначения:</p>
            <motion.div
              className={styles.clipContainer}
              variants={marsVariant}
              initial="initial"
              animate="visible"
            >
              <svg className={styles.videoText}>
                <defs>
                  <clipPath
                    id="clip-00"
                    clipPathUnits="objectBoundingBox"
                    transform="scale(0.00086105, 0.00163042)"
                  >
                    <path d="M27.9,87.6h106.8l47.6,292.7h1.4l47.6-292.7h106.8v408.9h-70.7V186.9h-1.4l-54.4,309.6h-62.6L94.5,186.9h-1.4v309.6H27.9V87.6z" />
                    <path d="M451.5,87.6h101.3l77.5,408.9h-74.8l-13.6-81.2v1.2h-85l-13.6,80H374L451.5,87.6z M533.1,361l-33.3-202.1h-1.4L465.8,361H533.1z" />
                    <path d="M666.4,87.6h110.2c74.8,0,111.5,35.6,111.5,101.1V229c0,65.4-36.7,101.1-111.5,101.1h-35.4v166.5h-74.8V87.6z M776.5,271.6c23.8,0,36.7-9.3,36.7-38.6v-48.5c0-29.2-12.9-38.6-36.7-38.6h-35.4v125.6H776.5z" />
                    <path d="M924.1,401.9V182.2c0-63.1,38.1-100.5,110.2-100.5c72.1,0,110.2,37.4,110.2,100.5v43.2h-70.7v-47.3c0-26.9-15-38-37.4-38s-37.4,11.1-37.4,38v228.4c0,26.9,15,37.4,37.4,37.4s37.4-10.5,37.4-37.4v-62.5h70.7v57.8c0,63.1-38.1,100.5-110.2,100.5C962.1,502.4,924.1,465,924.1,401.9z" />
                  </clipPath>
                </defs>
              </svg>
              <div className={styles["video-container"]}>
                <video
                  src={textVideo}
                  loop
                  autoPlay
                  muted
                  poster={videoPoster}
                ></video>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <img src={haze} alt="haze" className={styles.haze} />
    </motion.div>
  );
};

export default LandingPage;
