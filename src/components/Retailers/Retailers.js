import React, { useState } from 'react';
import "../Retailers/Retailers.css";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'
export default function Retailers() 
{
  return (
    <div class="retailers-grid grid grid-cols-2 md:grid-cols-4 gap-8 h-fit">
      <div class='col-span-1 retailers-grid-col'>
        <img src={require('C:/Users/91950/directory_app/src/components/images/retailers_img_1.png')} class="retailers-grid-img"></img>        
          <div class='business-text m-2'>
            <span class="text-xs">Sub category</span>
            <a href='/business-details'><span class="text-md md:text-xl block font-bold mb-2 md:mb-4">Example Business 11</span></a>
            <button class="float-right my-2">Explore</button>
          </div>
      </div>
      <div class='col-span-1 retailers-grid-col'>
        <img src={require('C:/Users/91950/directory_app/src/components/images/retailers_img_1.png')} class="retailers-grid-img"></img>        
          <div class='business-text m-2'>
            <span class="text-xs">Sub category</span>
            <span class="text-md md:text-xl block font-bold mb-2 md:mb-4">Example Business 11</span>
            <button class="float-right my-2">Explore</button>
          </div>
      </div>
      <div class='col-span-1 retailers-grid-col'>
        <img src={require('C:/Users/91950/directory_app/src/components/images/retailers_img_1.png')} class="retailers-grid-img"></img>        
          <div class='business-text m-2'>
            <span class="text-xs">Sub category</span>
            <span class="text-md md:text-xl block font-bold mb-2 md:mb-4">Example Business 11</span>
            <button class="float-right my-2">Explore</button>
          </div>
      </div>
      <div class='col-span-1 retailers-grid-col'>
        <img src={require('C:/Users/91950/directory_app/src/components/images/retailers_img_1.png')} class="retailers-grid-img"></img>        
          <div class='business-text m-2'>
            <span class="text-xs">Sub category</span>
            <span class="text-md md:text-xl block font-bold mb-2 md:mb-4">Example Business 11</span>
            <button class="float-right my-2">Explore</button>
          </div>
      </div>
      <div class='col-span-1 retailers-grid-col'>
        <img src={require('C:/Users/91950/directory_app/src/components/images/retailers_img_1.png')} class="retailers-grid-img"></img>        
          <div class='business-text m-2'>
            <span class="text-xs">Sub category</span>
            <a href='/business-details'><span class="text-md md:text-xl block font-bold mb-2 md:mb-4">Example Business 11</span></a>
            <button class="float-right my-2">Explore</button>
          </div>
      </div>
      <div class='col-span-1 retailers-grid-col'>
        <img src={require('C:/Users/91950/directory_app/src/components/images/retailers_img_1.png')} class="retailers-grid-img"></img>        
          <div class='business-text m-2'>
            <span class="text-xs">Sub category</span>
            <span class="text-md md:text-xl block font-bold mb-2 md:mb-4">Example Business 11</span>
            <button class="float-right my-2">Explore</button>
          </div>
      </div>
      <div class='col-span-1 retailers-grid-col'>
        <img src={require('C:/Users/91950/directory_app/src/components/images/retailers_img_1.png')} class="retailers-grid-img"></img>        
          <div class='business-text m-2'>
            <span class="text-xs">Sub category</span>
            <span class="text-md md:text-xl block font-bold mb-2 md:mb-4">Example Business 11</span>
            <button class="float-right my-2">Explore</button>
          </div>
      </div>
      <div class='col-span-1 retailers-grid-col'>
        <img src={require('C:/Users/91950/directory_app/src/components/images/retailers_img_1.png')} class="retailers-grid-img"></img>        
          <div class='business-text m-2'>
            <span class="text-xs">Sub category</span>
            <span class="text-md md:text-xl block font-bold mb-2 md:mb-4">Example Business 11</span>
            <button class="float-right my-2">Explore</button>
          </div>
      </div>
    </div>
  )
}
