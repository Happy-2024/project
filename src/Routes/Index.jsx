import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "../Home/Home";
import Product from "../Product/Index";
import Condition from "../Conditions/Index";
import { CartProvider } from "../Home/Cartcontext";
import LoginPage from "../LOGIN/LoginPage";
import OtpPage from "../LOGIN/OTP";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppRouter = () => {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hairconditioners" element={<Condition />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/otp" element={<OtpPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default AppRouter;
