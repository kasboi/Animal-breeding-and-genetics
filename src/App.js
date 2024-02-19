import logo from './logo.svg';
import './App.css';
import PageRouter from './router';
import Auth from './components/context-api/Auth';

function App() {
  return (
   <Auth>
     <PageRouter />
   </Auth>
  );
}
export default App;