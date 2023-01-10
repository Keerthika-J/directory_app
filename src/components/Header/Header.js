import React from 'react';
import "../Header/Header.css";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';  
import MediaQuery from "react-responsive";
export default function Header() {
  return (
    <div class='header-section'>
      <nav class='header-nav p-4'>
        <div class='logo-div'>
          <button class='logo-button text-xl md:text-3xl font-bold'>
            <span class="">Directory</span><span class="text-yellow mx-2">App</span>
          </button>
        </div>
        <MediaQuery query="(max-width: 420px)">
        <div class="visible md:invisible">
          <svg xmlns="http://www.w3.org/2000/svg" width='20px' height='20px' fill='black' viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
       </div>
        </MediaQuery>
        <MediaQuery query="(min-width: 420px)">
        <div class='header-lists text-xs md:text-base invisible md:visible'>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about-us"><li>About Us</li></Link>
          <Link to="/how-it-works"><li>How it Works</li></Link>
          <Link to="/contact-us"><li>Contact Us</li></Link>
        </ul>
       </div>
        </MediaQuery>
        
       
       
      </nav>
    </div>
  )
}
