import logo from './logo.svg';
import './App.css';
import { Navigate, Outlet, useNavigate, useRoutes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Landing from './pages/Landing';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/login';
import OTPConfirmationPage from './pages/auth/otp';
import Admin from './pages/AdminPage';
import { useEffect, useState } from 'react';
import ProtectOtp from './protected-route/ProtectOtp';

function App() {
  const [active, setActive] = useState(false)
  const navigate = useNavigate();

  const updateStatus = () => {
    setActive(true);
    navigate("/auth/otp");
  };
  useEffect(() => {
    // Set initial value of active to false
    setActive(false);
  }, []);
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [{
        path: "/",
        element: <Landing />,
      }, {
        path: "*",
        element: <Navigate to='/' />
      },
      {
        path: "/auth/signup",
        element: <Signup setActive={setActive} updateStatus={updateStatus} />,
      }, {
        path: "/auth/login",
        element: <Login />,
      },
    {
        path: "/auth/otp",
        element: <OTPConfirmationPage />,
      },
      //  {
      //   path: "/auth/otp",
      //   element: <ProtectOtp active={active}>
      //     <OTPConfirmationPage />
      //   </ProtectOtp>,
      // },
      {
        path: "/admin",
        element: <Admin />
      }

      ]
    }
  ]

  );
}

export default App;


  