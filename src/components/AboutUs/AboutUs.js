import React from 'react';
import "./AboutUs.css";
export default function AboutUs() 
{
  return (
    <div class="about-us-page">
        <div class="py-8 gray-section bg-secondary">
            <div class="pb-8 border-b border-borders">
                <div class="about-heading">
                    <span class="text-2xl md:text-4xl">About Us</span>
                </div>
            </div>
            <div class="about-us-grid grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-8 lg:gap-y-28 ">
                <img src={require("D:/KODEON/Repositories/directory_app/src/components/images/contact-img.jpg")} alt="contact-img.jpg" class="about-us-img w-full h-full object-cover"></img>
                <div class="">
                    <span class="block text-3xl md:text-4xl font-bold my-6">We love building WordPress themes that save you money.</span>
                    <span class="about-us-subheading my-6">Lorem ipsum dolor sit amet</span>
                    <span class="">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</span>
                    <div class="my-6 flex justify-between">
                        <div class="">
                            <span class="block text-3xl font-bold text-primary">50,000</span>
                            <span class="">Customers Worldwide</span>
                        </div>
                        <div class="">
                            <span class="block text-3xl font-bold text-primary">50,000</span>
                            <span class="">Customers Worldwide</span>
                        </div>
                        <div class="">
                            <span class="block text-3xl font-bold text-primary">50,000</span>
                            <span class="">Customers Worldwide</span>
                        </div>
                    </div>
                </div>
                {/* Row-2 */}
                <div class="">
                    <span class="block text-3xl md:text-4xl font-bold my-6">Build powerful websites quickly with PremiumPress themes.</span>
                    <span class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus eleifend risus ut congue. Pellentesque nec lacus elit. Pellentesque convallis nisi ac augue pharetra eu tristique.</span>
                    <div class="my-6">
                        <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" class="inline" width="48" height="48" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                            <div class="ml-4">
                                <span class="block font-bold text-lg inline">Quick and easy to setup.</span>
                                <span class="block">Lorem ipsum dolorsit amet consectetur.</span>
                            </div>
                        </div>
                        <div class="my-6 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" class="inline" width="48" height="48" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                            <div class="ml-4">
                                <span class="block font-bold text-lg inline">Quick and easy to setup.</span>
                                <span class="block">Lorem ipsum dolorsit amet consectetur.</span>
                            </div>
                        </div>
                        <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" class="inline" width="48" height="48" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                            <div class="ml-4">
                                <span class="block font-bold text-lg inline">Quick and easy to setup.</span>
                                <span class="block">Lorem ipsum dolorsit amet consectetur.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={require("D:/KODEON/Repositories/directory_app/src/components/images/about-us-row-2-img.png")} alt="about-us-row-2-img.png" class="about-us-img w-full h-full object-cover"></img>
            </div>
        </div>
        <div class="quick-to-install flex flex-col md:flex-row justify-between ">
            <img src={require("D:/KODEON/Repositories/directory_app/src/components/images/quick-to-install-img.png")} alt="quick-to-install-img.png" class="quick-to-install-img w-full md:w-2/5 h-2/4 object-cover"></img>
            <div class="lg:w-2/5 text-center lg:text-left flex flex-col justify-evenly items-center float-right">
                <span class="block text-3xl md:text-4xl font-bold my-6">Quick to install and setup - get started today!</span>
                <span class="block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus eleifend risus ut congue. Pellentesque nec lacus elit.</span>
                <button class="w-full md:w-[300px] get-started-now-button bg-primary my-6">Get Started Now!</button>
            </div>
        </div>
    </div>
  )
}
