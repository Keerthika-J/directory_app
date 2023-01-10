import React from 'react'
import "./HowItWorks.css";
//test git
export default function HowItWorks() {
  return (
    <div class="how-it-works">
        <div class="py-8 bg-[#fafafb]">
            <div class="how-it-works-heading px-4 md:px-8 lg:px-44">
                <span class="text-2xl md:text-4xl">How It Works</span>
            </div>
            <div class="how-it-works-grid grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-8 lg:gap-y-28 px-4 md:px-8 lg:px-44">
               <img src={require("C:/Users/91950/directory_app/src/components/images/how-it-works-img.png")} class="w-full h-full object-cover"></img> 
               <div class="w-full text-center lg:text-left flex flex-col justify-evenly float-right my-8">
                    <span class="block text-3xl md:text-4xl font-bold my-6">Quick to install and setup - get started today!</span>
                    <span class="block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus eleifend risus ut congue. Pellentesque nec lacus elit.</span>
                    <div class="lg:flex my-6">
                    <button class="w-full  add-business-button">Add Business</button>
                    <button class="w-full  start-search-button mt-6 lg:mt-0 lg:mx-8">Start Search</button>
                    </div>
                </div>
                <div class="">
                    <span class="block text-3xl md:text-4xl font-bold my-6">We love building WordPress themes that save you money.</span>
                    <span class="about-us-subheading my-6">Lorem ipsum dolor sit amet</span>
                    <span class="">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</span>
                    <button class="w-full md:w-[200px] get-started-now-button my-6">Add Business</button>
                </div>
                <div class="white-cards">
                    <div class="card-1 w-full h-3/4 md:h-1/4">
                       <div class="numbers-circle-1-2-3">
                            <span class="text-xl inline">01</span>
                       </div>
                        <div class="">
                            <span class="block font-bold text-lg inline">Create your free account</span>
                            <span class="block text-sm md:text-base">Nulla vitae elit libero pharetra augue dapibus.</span>
                        </div>
                    </div>
                    <div class="card-1 w-full lg:w-10/12 h-3/4 md:h-1/4 my-4">
                        <div class="numbers-circle-1-2-3">
                            <span class="text-xl inline">02</span>
                       </div>
                        <div class="">
                            <span class="block font-bold text-lg inline">Complete your details</span>
                            <span class="block text-sm md:text-base">Vivamus sagittis lacus vel augue laoreet.</span>
                        </div>
                    </div>
                    <div class="card-1 w-full h-3/4 md:h-1/4">
                       <div class="numbers-circle-1-2-3">
                            <span class="text-xl inline">03</span>
                       </div>
                        <div class="">
                            <span class="block font-bold text-lg inline">Connect with users</span>
                            <span class="block text-sm md:text-base">Cras mattis consectetur purus sit amet.</span>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
        <div class="subscription-payment-grid bg-white grid grid-cols-1 md:grid-cols-2 gap-20 px-4 md:px-8 lg:px-44">
            <div class="grid-col-1">
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline" fill='#fac300' width="24" height="24" viewBox="0 0 512 512"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg>
                    <span class="text-xl font-bold m-4">Can I cancel my subscription?</span>
                </div>
                <span class="block ml-8">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas.</span>
            </div>
            <div class="grid-col-2">
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline" fill='#fac300' width="24" height="24" viewBox="0 0 512 512"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg>
                    <span class="text-xl font-bold m-4">Can I cancel my subscription?</span>
                </div>
                <span class="block ml-8">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas.</span>
            </div>
            <div class="grid-col-3">
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline" fill='#fac300' width="24" height="24" viewBox="0 0 512 512"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg>
                    <span class="text-xl font-bold m-4">Can I cancel my subscription?</span>
                </div>
                <span class="block ml-8">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas.</span>
            </div>
            <div class="grid-col-4">
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline" fill='#fac300' width="24" height="24" viewBox="0 0 512 512"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg>
                    <span class="text-xl font-bold m-4">Can I cancel my subscription?</span>
                </div>
                <span class="block ml-8">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas.</span>
            </div>
        </div>
    </div>
  )
}
