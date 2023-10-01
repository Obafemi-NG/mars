import { FC, useRef } from "react";

// imported dependencies
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// imported styles
import styles from "./TicketBooking.module.css";

// imported component
import CustomInput from "../../components/uiComponents/CustomInput/CustomInput";
import closeBtn from "../../assets/icons/Vectorclose.svg";

const pageVariant = {
  initial: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
  exit: {
    x: 1000,
    opacity: 0,
    transition: { duration: 0.7, delay: 0.4 },
  },
};

const formVariant = {
  initial: {
    opacity: 0,
    y: 1000,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.7,
    },
  },
  exit: {
    y: 1000,
    opacity: 0,
    transition: {
      duration: 1,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const TicketBooking: FC = () => {
  const arrivalDateRef = useRef<HTMLInputElement | null>(null);
  const departureDateRef = useRef<HTMLInputElement | null>(null);
  const numberOfPeopleRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };

  return (
    <motion.section
      variants={pageVariant}
      initial="initial"
      animate="visible"
      exit="exit"
      className={styles.pageContainer}
    >
      <div className={styles.pageContent}>
        <div className={styles.top}>
          <h1 className={styles.pageHeading}>Бронирование билетов</h1>
          <img
            src={closeBtn}
            alt="close_btn"
            className={styles.closeBtn}
            onClick={handleClose}
          />
        </div>
        <motion.form variants={formVariant} className={styles.form}>
          <div className={styles.inputsContainer}>
            <CustomInput
              inputLabel="Дата заезда"
              inputName="arrival"
              inputType="text"
              requiredValue={true}
              inputRef={arrivalDateRef}
              pattern="/^(([0-9.]?)*)+$/"
              placeholder="13.05.2022"
            />
            <CustomInput
              inputLabel="Дата выезда"
              inputName="departure"
              inputType="text"
              requiredValue={true}
              inputRef={departureDateRef}
              pattern="/^[0-9]*\.?[0-9]*$/"
              placeholder="13.05.2032"
            />
            <CustomInput
              inputLabel="Количество"
              inputName="client"
              inputType="text"
              requiredValue={true}
              inputRef={numberOfPeopleRef}
              placeholder="1 человек"
            />
          </div>
          <div className={styles.btnContainer}>
            <button className={styles.formBtn}> Купить билеты </button>
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default TicketBooking;
