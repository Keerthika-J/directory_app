import React from 'react';
import Header from '../Header/Header';

export default function BusinessDetails() 
{
  return (
   <>
    <div class="bg-gray business-details">
      <div class='business-heading'>
        <span class="text-2xl md:text-4xl">Example Business 11</span>
      </div>
      <div class="details-div-1 w-full md:w-6/12">        
        <div class="bg-white rounded-xl p-8">
          <div class="relative">
            <img src={require('C:/Users/91950/directory_app/src/components/images/map.png')} class="w-full block mx-auto"></img>
            <button class="absolute-buttons">View Map</button>
          </div>            
          <div class="my-4">
            <span class="font-bold text-base">63-39 83rd Pl, Flushing, NY 11379, USA</span>
          </div>
          <div class="w-full border flex justify-evenly p-2">
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" class="inline-block mx-2" height='20px' width='20px' viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
              <span class="text-lg mx-2">123 *** ****</span>
            </a>
          </div>
          <div class="mt-4">
            <div class="weekdays-section">
              <span class="font-bold ">Monday</span>
              <span class="font-bold text-sm">09:00 AM - 18:00 PM</span>
            </div>
            <div class="weekdays-section pt-2">
              <span class="font-bold ">Tuesday</span>
              <span class="font-bold text-sm">09:00 AM - 18:00 PM</span>
            </div>
            <div class="weekdays-section pt-2">
              <span class="font-bold ">Wednesday</span>
              <span class="font-bold text-sm">09:00 AM - 18:00 PM</span>
            </div>
            <div class="weekdays-section pt-2">
              <span class="font-bold ">Thursday</span>
              <span class="font-bold text-sm">09:00 AM - 18:00 PM</span>
            </div>
            <div class="weekdays-section pt-2">
              <span class="font-bold ">Friday</span>
              <span class="font-bold text-sm">09:00 AM - 18:00 PM</span>
            </div>
            <div class="weekdays-section pt-2">
              <span class="font-bold ">Saturday</span>
              <span class="font-bold text-sm">09:00 AM - 18:00 PM</span>
            </div>
            <div class="weekdays-section pt-2">
              <span class="font-bold ">Sunday</span>
              <span class="font-bold text-sm">09:00 AM - 18:00 PM</span>
            </div>
          </div>
        </div>
      </div>
      <div class="details-div-1 w-full md:w-6/12 h-44 bg-white">
test
      </div>
    </div>
   </>
  )
}
