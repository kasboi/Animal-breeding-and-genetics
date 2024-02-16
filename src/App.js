import logo from './logo.svg';
import './App.css';
import { useRoutes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Landing from './pages/Landing';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/login';
import OTPConfirmationPage from './pages/auth/otp';
import Admin from './pages/AdminPage';

// http://localhost:2024/api/v1/admin/get

// require('dotenv').config()
function App() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [{
        path: "/",
        element: <Landing />,
      }, {
        path: "/auth/signup",
        element: <Signup />,
      }, {
        path: "/auth/login",
        element: <Login />,
      }, {
        path: "/auth/otp",
        element: <OTPConfirmationPage />,
      },
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
