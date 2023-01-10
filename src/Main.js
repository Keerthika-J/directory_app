import Header from './components/Header/Header';
import MainGrid from './components/MainGrid/MainGrid';
import Retailers from './components/Retailers/Retailers';
import './Main.css';
import MediaQuery from 'react-responsive';
function Main() {
  return (
  <div class='main-page'>
    {/* Over 1,000 Local Business Listings. */}
    <div class='body'>
      <div class='gray-section px-4 md:px-8 lg:px-44'>
        <div class='heading-text'>
          <h1 class="text-3xl md:text-5xl">Over 1,000 Local Business Listings.</h1>
          <p class="my-2">Need someone to help? You'll find them here!</p>
        </div>
        <div class="main-grid-section">
        <MediaQuery query="(min-width: 420px)">
          <MainGrid/>
        </MediaQuery>         
        </div>
        <div class='search-button flex justify-center'>
          <button class='start-search'>Start Search
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right ml-2" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/> </svg>
          </button>        
        </div>
      </div>
      <div class='white-section px-4 md:px-8 lg:px-44'>
        {/* Review flex */}
        <div class='review-flex-container flex'>
          <div class="flex items-center">
            <div class="w-1/4">
              <img src={require('C:/Users/91950/directory_app/src/components/images/review_img.png')} class="py-2 rounded-full"></img>
            </div>
            <div class="block w-9/12 ml-4">
              <span>" Et vim graeco principes. Cu dico nullam pri stet possim quaerendum."</span>
              <div class="flex block items-center">
                <span>Jane Doe</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" fill="#fac300" class="bi bi-star-fill ml-2" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" fill="#fac300" class="bi bi-star-fill ml-2" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" fill="#fac300" class="bi bi-star-fill ml-2" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
              </div>
            </div>            
          </div>
          <MediaQuery query="(min-width: 420px)">
          <div class="flex items-center">
            <div class="w-1/4">
              <img src={require('C:/Users/91950/directory_app/src/components/images/review_img.png')} class="py-2 rounded-full"></img>
            </div>
            <div class="block w-9/12 ml-4">
              <span>" Et vim graeco principes. Cu dico nullam pri stet possim quaerendum."</span>
              <div class="flex block items-center">
                <span>Jane Doe</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" fill="#fac300" class="bi bi-star-fill ml-2" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" fill="#fac300" class="bi bi-star-fill ml-2" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" fill="#fac300" class="bi bi-star-fill ml-2" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
              </div>
            </div>            
          </div>
          <div class="flex items-center">
            <div class="w-1/4">
              <img src={require('C:/Users/91950/directory_app/src/components/images/review_img.png')} class="py-2 rounded-full"></img>
            </div>
            <div class="block w-9/12 ml-4">
              <span>" Et vim graeco principes. Cu dico nullam pri stet possim quaerendum."</span>
              <div class="flex block items-center">
                <span>Jane Doe</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" fill="#fac300" class="bi bi-star-fill ml-2" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" fill="#fac300" class="bi bi-star-fill ml-2" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" fill="#fac300" class="bi bi-star-fill ml-2" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
              </div>
            </div>            
          </div>
        </MediaQuery>            
        </div>
        {/* Popular Section */}
        <div class='popular-retailers-container'>
          <div class="flex items-center justify-between">
            <div>
              <span class="text-2xl md:text-4xl">Popular Retailers</span>
            </div>
            <div>
              <button class='view-button'>View More</button>
            </div>
          </div>
          <div class="retailers-grid">
            <Retailers/>
          </div>
          <div class="popular-locations lg:w-2/4 float-right">
            <span class="block">Popular locations</span>
            <p class="block my-2 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus eleifend risus ut congue. Pellentesque nec lacus elit. Pellentesque convallis nisi ac augue pharetra eu tristique neque consequat. Mauris ornare tempor nulla, vel sagittis diam convallis eget.<br></br><br></br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus eleifend risus ut congue. Pellentesque nec lacus elit. Pellentesque convallis nisi ac augue pharetra eu tristique neque consequat. Mauris ornare tempor nulla, vel sagittis diam convallis eget.
            </p>
        </div>
        </div>       
      </div>
    </div>
   </div>
  );
}

export default Main;
