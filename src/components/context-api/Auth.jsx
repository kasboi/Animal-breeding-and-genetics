import React, { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const Authcontext = createContext();
export default function Auth({ children }) {
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();
  const handleVerifyOTP = () => {
    setVerified(true);
    navigate("/auth/otp");
  };
 
  const value = {
    verified,
    // isUserLoggin,
    // userLogOut,
    // userLogin,
    // setIsUserLoggin,
    // handleVerifyOTP,
  };
  return <Authcontext.Provider value={value}>{children}</Authcontext.Provider>;
}

export const CreateAuth = () => {
  const userAuthContext = useContext(Authcontext);

  return userAuthContext;
};
