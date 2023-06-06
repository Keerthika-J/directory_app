import React from 'react';
import "./Footer.css";
export default function Footer() 
{
  return (
<div class="outer-footer-div border-t-4 border-primary bg-secondary">
  <div class="footer-section w-full grid grid-cols-1 lg:grid-cols-3 gap-8 ">
      <div class="logo-col">
        <div class='logo-div'>
          <button class='logo-button text-xl md:text-3xl font-bold'>
            <span class="">Directory</span><span class="text-yellow mx-2">App</span>
          </button>
        </div>
        <div class="mt-8">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus eleifend risus ut congue.</span>
        </div>
      </div>
      <div class="useful-and-quick-links justify-between md:justify-around">
      <div class="useful-links">
        <h1>Useful Links</h1>
        <ul class="mt-8">
            <li><a href="https://dt10.premiummod.com">Home</a></li>
            <li><a href="https://dt10.premiummod.com/about-us/">About Us</a></li>
            <li><a href="https://dt10.premiummod.com/how-it-works/">How it works</a></li>
            <li><a href="https://dt10.premiummod.com/blog/">Blog</a></li>
        </ul>
      </div>
      <div class="quick-search">
        <h1>Quick Search</h1>
        <ul class="mt-8">
            <li><a href="https://dt10.premiummod.com/?s=">Search</a></li>
            <li><a href="https://dt10.premiummod.com/?s=&amp;sort=pop">Popular</a></li>
            <li><a href="https://dt10.premiummod.com/?s=&amp;sort=id">Newly Added</a></li>
            <li><a href="https://dt10.premiummod.com/?s=">Most Relevant</a></li>
        </ul>
      </div>
      </div>
      <div class="w-full join-news-letter">
        <h1>Join our newsletter</h1>
        <span class="mt-8">We write rarely, but only the best content.</span>
        <div class="">
            <input type="text" class="border my-4 w-3/5" placeholder="Email Address Here.."></input>
            <button class="join-button bg-primary">Join</button>
        </div>
        <span>We'll never share your details. See our Privacy Policy</span>
      </div>
      <div class="col-span-full border border-border-gray my-2"></div>
      <div class="">
        <span class="">© 2022 All rights reserved.</span>
      </div>
    </div>
    
</div>
  )
}
