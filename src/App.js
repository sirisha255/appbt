import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Admin from './Pages/Admin';
import User from './Pages/User';
import Home from './Pages/Home';
import './Styles.css';

function App() {
  let component
   switch (window.location.pathname) {
    case "/":
      component = <Home />
      break;
    case "/admin" :
      component = <Admin />
      break;
    case "/user" :
      component = <User />
      break;    
   
    default:
      break;
   }
  return (

   <> <Navbar/>
   <div className='container'>
   {component}

   </div>
   </>
  )
}

export default App;
