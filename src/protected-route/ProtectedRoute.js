import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, isUserLoggin }) {
  return isUserLoggin ? <div>{children}</div> : <Navigate to="/auth/login" />;
}
