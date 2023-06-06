import React from 'react';
import "../Header/Header.css";
import { NavLink } from 'react-router-dom';  
import MediaQuery from "react-responsive";
export default function Header() 
{
  const open =() =>
  {
    document.getElementById("mob-ham").style.display="block";
    document.getElementById("mob-ham").style.width="100%";
  }
  const close =() =>
  {
    document.getElementById("mob-ham").style.display="none";
  }
  return (
    <div class='header-section'>
      <nav class="mob-ham bg-secondary" id="mob-ham">
        <button onClick={close} class="float-right"><img src={require("D:/KODEON/Repositories/directory_app/src/components/images/close.png")} alt="close.png" class="w-4 h-4 m-8 cursor-pointer"></img></button>
        <ul onClick={close}>
          <NavLink activeClassName="active"to="/"><li>Home</li></NavLink>
          <NavLink activeClassName="active"to="/search"><li>Search</li></NavLink>
          <NavLink activeClassName="active"to="/about-us"><li>About Us</li></NavLink>
          <NavLink activeClassName="active"to="/how-it-works"><li>How it Works</li></NavLink>
          <NavLink activeClassName="active"to="/contact-us"><li>Contact Us</li></NavLink>
        </ul>
      </nav>
      <nav class='header-nav py-4 bg-white border border-borders'>
        <div class="nav-div">
        <div class='logo-div'>        
          <button class='logo-button text-[25px] md:text-[35px] font-bold'>
          <NavLink to="/"><span class="">Directory</span><span class="text-primary mx-2">App</span></NavLink>
          </button>
        </div>
        <MediaQuery query="(max-width: 768px)">
        <div class="visible md:invisible">
          <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer" onClick={open} width='20px' height='20px' fill='black' viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
       </div>
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
          <div class='header-lists text-xs md:text-base none md:block'>
        <ul>
          <NavLink activeClassName="active"to="/"><li>Home</li></NavLink>
          <NavLink activeClassName="active"to="/search"><li>Search</li></NavLink>
          <NavLink activeClassName="active"to="/about-us"><li>About Us</li></NavLink>
          <NavLink activeClassName="active"to="/how-it-works"><li>How it Works</li></NavLink>
          <NavLink activeClassName="active"to="/contact-us"><li>Contact Us</li></NavLink>
        </ul>
       </div>
        </MediaQuery>
        </div>
      </nav>
    </div>
  )
}
