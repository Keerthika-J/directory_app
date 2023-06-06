import React from 'react';
import "./ContactUs.css";
import SendMessage from './SendMessage';
export default function ContactUs() 
{
  return (
    <div class="contact-us-page bg-secondary">
        <div class="">
            <div class="py-4 border-b border-[#e0e0e0] ">
                <div class="contact-heading">
                    <span class="text-2xl md:text-4xl">Contact</span>
                </div>
            </div>
            <div class="lets-talk-section flex flex-col lg:flex-row ">
                <img src={require("D:/KODEON/Repositories/directory_app/src/components/images/contact-img.jpg")} alt="contact-img.jpg" class="lets-talk-img w-full lg:w-7/12"></img>
                <div class="lg:ml-12">
                    <span class="block text-sm font-bold text-primary mt-8 mb-4">LET'S TALK</span>
                    <span class="block text-3xl md:text-4xl font-bold my-4">Got any questions? Don't hesitate to get in touch.</span>
                    <span class="lets-talk-subheading my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    <div class="address-phone-email">
                        <div class="small-flex-div">
                            <svg xmlns="http://www.w3.org/2000/svg" class="inline" width="16" height="16" fill="#fac300" viewBox="0 0 384 512"><path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"/></svg>
                            <span class="block font-bold text-lg inline mx-2">Address</span>
                        </div>
                        <span class="mx-6">Buckingham Palace, London.</span>
                    </div>
                    <div class="address-phone-email">
                        <div class="small-flex-div">
                            <svg xmlns="http://www.w3.org/2000/svg"class="inline" width="16" height="16" fill="#fac300" viewBox="0 0 384 512"><path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"/></svg>
                            <span class="block font-bold text-lg inline mx-2">Phone</span>
                        </div>
                        <span class="mx-6">+44 (123) 456 78 90</span>
                    </div>
                    <div class="address-phone-email">
                        <div class="small-flex-div">
                            <svg xmlns="http://www.w3.org/2000/svg"class="inline" width="16" height="16" fill="#fac300" viewBox="0 0 384 512"><path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"/></svg>
                            <span class="block font-bold text-lg inline mx-2">Email</span>
                        </div>
                        <span class="mx-6">email@mywebsite.com</span>
                    </div>
                </div>
            </div>
            <div class="send-mail-outer-div ">
                <div class="send-mail-section bg-white border-border-gray px-8 flex flex-col lg:flex-row">
                    <div class="w-full lg:w-6/12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fac300" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                        <span class="block text-4xl md:text-4xl font-bold my-8">If you like what you see, let's work together.</span>
                        <span class="text-xl font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus eleifend risus ut congue. Pellentesque nec lacus elit. Pellentesque convallis nisi ac augue pharetra eu tristique.</span>
                    </div>
                    <div class="w-full lg:w-6/12 mt-8 lg:mt-0">
                      <SendMessage/>
                    </div>                    
                </div>
            </div>
        </div>               
    </div>
  )
}
