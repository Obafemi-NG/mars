import { FC } from "react";
import { motion } from "framer-motion";

import styles from "./Line.module.css";

const pathVariant = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 1,
      duration: 4,
      ease: "easeInOut",
    },
  },
};

const circleVariant = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 5,
    },
  },
};

const Line: FC = () => {
  return (
    <svg
      width="10"
      height="100%"
      viewBox="0 0 10 605"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={pathVariant}
        initial="initial"
        animate="visible"
        d="M 5 3 L 5 600"
        className={styles.line}
      />
      <circle cx="5" cy="3" r="3" fill="#D9D9D9" />
      <motion.circle
        variants={circleVariant}
        initial="initial"
        animate="visible"
        cx="5"
        cy="600"
        r="5"
        fill="#D9D9D9"
      />
    </svg>
  );
};

export default Line;
