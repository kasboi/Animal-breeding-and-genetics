// import React, { useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// import { Navigate, useNavigate } from "react-router-dom";
// import Login from "../pages/auth/login";
// import Signup from "../pages/auth/Signup";

// export default function ProtectOtp({ children, active }) {
//   const navigate = useNavigate();
//   return active ? children : <Signup />;
// }

import React from "react";
import { useNavigate } from "react-router-dom";
import Signup from "../pages/auth/Signup";
import OTPConfirmationPage from "../pages/auth/OtpPage";

const ProtectOtp = ({ active }) => {
  const navigate = useNavigate();

  if (active) {
    return <OTPConfirmationPage />;
  } else {
    navigate("/auth/signup");
    return <Signup />;
  }
};

export default ProtectOtp;
