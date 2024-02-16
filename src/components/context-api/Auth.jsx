import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const Authcontext = createContext();
export default function Auth({ children }) {
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();
  const handleVerifyOTP = () => {
    setVerified(true);
    navigate('/auth/otp');
  };
  const value = { verified, handleVerifyOTP};
  return <Authcontext.Provider value={value}>{children}</Authcontext.Provider>;
}

export const CreateAuth = () => {
    const userAuthContext = useContext(Authcontext);
  if (!userAuthContext) {
    throw new Error("data is not inside the useContext");
  }
  return userAuthContext;
};
