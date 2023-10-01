import { FC } from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import { navlinks } from "../../constants";
import { NavLink } from "react-router-dom";
import NavBtn from "../NavBtn/NavBtn";

import { motion } from "framer-motion";

const navbarVariant = {
  initial: { y: -1000, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.9,
      stiffness: 70,
      mass: 0.8,
      type: "spring",
      ease: "easeInOut",
    },
  },
  exit: {
    y: -1000,
    opacity: 0,
    transition: {
      duration: 1.3,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const Navbar: FC = () => {
  return (
    <motion.div
      variants={navbarVariant}
      initial="initial"
      animate="visible"
      exit="exit"
      className={styles.navbarContainer}
    >
      <Logo />
      <div className={styles.navlinksContainer}>
        <ul className={styles.navlinks}>
          {navlinks.map((link) => {
            return (
              <NavLink to="" key={link.id}>
                {({ isActive }) => (
                  <li
                    className={` ${isActive ? styles.isActive : ""} ${
                      styles.navLink
                    } ${styles.responsiveNavLink} `}
                  >
                    {link.name}
                  </li>
                )}
              </NavLink>
            );
          })}
        </ul>
        <NavBtn />
      </div>
    </motion.div>
  );
};

export default Navbar;
