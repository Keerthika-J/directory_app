import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Link}   
from 'react-router-dom';  
import Header from './components/Header/Header';
import BusinessDetails from './components/Retailers/BusinessDetails';
import Footer from './components/Footer/Footer';
import ContactUs from './components/ContactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs';
import HowItWorks from './components/HowItWorks/HowItWorks';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <header>
        <Header/>
      </header>
      <Routes>  
        <Route exact path='/' element={< Main />}></Route>  
        <Route exact path='/contact-us' element={< ContactUs />}></Route>
        <Route exact path='/about-us' element={< AboutUs />}></Route>
        <Route exact path='/how-it-works' element={< HowItWorks />}></Route>
        <Route exact path='/business-details' element={< BusinessDetails />}></Route>  
      </Routes> 
    </Router>
    <footer>
        <Footer/>
    </footer> 
  </React.StrictMode>
);
reportWebVitals();
