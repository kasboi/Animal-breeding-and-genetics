import logo from './logo.svg';
import './App.css';
import { useRoutes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Landing from './pages/Landing';
// require('dotenv').config()
function App() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [{
        path: "/",
        element: <Landing/>,
      }]
    }
  ]

  );
}

export default App;
