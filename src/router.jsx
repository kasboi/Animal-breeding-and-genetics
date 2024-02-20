import React, { useEffect, useState } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/LoginPage";
import Otp from "./pages/auth/OtpPage";
import Admin from "./pages/AdminPage";
import Landing from "./pages/Landing";
import Layout from "./layouts/Layout";
import ProtectedRoute from "./protected-route/ProtectedRoute";

export default function PageRouter() {
  // const token = localStorage.getItem("token");
  const [isUserLoggin, setIsUserLoggin] = useState(false);
  //   console.log(isUserLoggin);
  const userLogin = () => {
    setIsUserLoggin(true);
  };

  let token = null
  useEffect(() => {
    token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      setIsUserLoggin(true);
    }
    console.log(token)
  }, []);
  const userLogOut = (cb) => {
    setIsUserLoggin(false);
    setTimeout(cb, 200);
  };
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "*",
          element: <Navigate to="/" />,
        },
        {
          path: "/auth/signup",
          element: <Signup />,
        },
        {
          path: "/auth/login",
          element: (token ?
            <Navigate to="/admin" /> :
            <Login
              isUserLoggin={isUserLoggin}
              setIsUserLoggin={setIsUserLoggin}
            />
          ),
        },
        {
          path: "/auth/otp",
          element: <Otp />,
        },
        {
          path: "/admin",
          element: (
            <ProtectedRoute isUserLoggin={isUserLoggin}>
              <Admin />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);
}
