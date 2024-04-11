import logo from './logo.svg';
import './App.css';
import {Outlet} from 'react-router-dom'
import Header from './Components/Header';
import { useEffect } from 'react';
import Footer from './Components/Footer';
function App() {

  useEffect(() => {
    const disableBackButton = () => {
      window.history.pushState(null, null, window.location.pathname);
      window.addEventListener('popstate', disableBackButton);
    };

    disableBackButton();

    return () => {
      window.removeEventListener('popstate', disableBackButton);
    };
  }, []);
  

  return (
    <>
    <Header/>
   <main>
    <Outlet/>
   </main>
   
    </>
  );
}

export default App;
