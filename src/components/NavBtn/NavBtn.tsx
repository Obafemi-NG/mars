import { FC } from "react";
import styles from "./NavBtn.module.css";
import { useNavigate } from "react-router-dom";

const NavBtn: FC = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/buy-ticket");
  };
  return (
    <button className={styles.navBtn} onClick={handleNavigation}>
      купить билеты
    </button>
  );
};

export default NavBtn;
