import React from 'react';
import "../MainGrid/MainGrid.css";
export default function MainGrid() {
  return (
    <div className='main-grid' class="div-outer-margin grid grid-cols-4 gap-x-8">
      <div class="main-grid-cols col-span-1 relative flex justify-center">
        <img src={require('C:/Users/91950/directory_app/src/components/images/main_grid_1.png')}></img>
        <div class="grid-img-div">
            <div className='img-text'>
                <a href="https://thoughtbot.com/blog/transitions-and-transforms#:~:text=At%20their%20most%20basic%20level%2C%20transforms%20move%20or,the%20grease%20in%20the%20wheel%20of%20CSS%20transforms.">
                <span className='img-city-span md:text-xl lg:text-3xl'>New York City</span>
                <span className='img-text-span'>The purpose of lorem ipsum</span>
                </a>
            </div>
        </div>
      </div>
      <div class="main-grid-cols col-span-1 relative flex justify-center">
        <img src={require('C:/Users/91950/directory_app/src/components/images/main_grid_2.png')}></img>
        <div class="grid-img-div">
            <div className='img-text'>
                <a href="https://thoughtbot.com/blog/transitions-and-transforms#:~:text=At%20their%20most%20basic%20level%2C%20transforms%20move%20or,the%20grease%20in%20the%20wheel%20of%20CSS%20transforms.">
                <span className='img-city-span md:text-xl lg:text-3xl'>New York City</span>
                <span className='img-text-span'>The purpose of lorem ipsum</span>
                </a>
            </div>
        </div>
      </div>
      <div class="main-grid-cols col-span-1 relative flex justify-center">
        <img src={require('C:/Users/91950/directory_app/src/components/images/main_grid_3.png')}></img>
        <div class="grid-img-div">
            <div className='img-text'>
                <a href="https://thoughtbot.com/blog/transitions-and-transforms#:~:text=At%20their%20most%20basic%20level%2C%20transforms%20move%20or,the%20grease%20in%20the%20wheel%20of%20CSS%20transforms.">
                <span className='img-city-span md:text-xl lg:text-3xl'>New York City</span>
                <span className='img-text-span'>The purpose of lorem ipsum</span>
                </a>
            </div>
        </div>
      </div>
      <div class="main-grid-cols col-span-1 relative flex justify-center">
        <img src={require('C:/Users/91950/directory_app/src/components/images/main_grid_4.png')}></img>
        <div class="grid-img-div">
            <div className='img-text'>
                <a href="https://thoughtbot.com/blog/transitions-and-transforms#:~:text=At%20their%20most%20basic%20level%2C%20transforms%20move%20or,the%20grease%20in%20the%20wheel%20of%20CSS%20transforms.">
                <span className='img-city-span md:text-xl lg:text-3xl'>New York City</span>
                <span className='img-text-span'>The purpose of lorem ipsum</span>
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}
