import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "../../pages/LandingPage/LandingPage";
import TicketBooking from "../../pages/TicketBooking/TicketBooking";
import { FC } from "react";
import { AnimatePresence } from "framer-motion";

const RouteWithAnimation: FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/buy-ticket" element={<TicketBooking />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RouteWithAnimation;
