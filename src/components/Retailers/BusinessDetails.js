import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  PinterestShareButton,
  PinterestIcon,
} from "react-share";
import { useParams } from "react-router-dom";
import useApiRequest from "../api/useApiRequest";
function BusinessDetails() 
{
  const { industry, id } = useParams();
  const { data, error, isLoaded } = useApiRequest(`http://localhost:5000/api/companies/${industry}/${id}`);
  if (error !== null)
    return <div>Error: {error.message}</div>;
  if (!isLoaded) 
    return <div>Loading...</div>;
  return (
    <div class="gray-section w-full bg-secondary">
      <div class="business-details">
        <div class="business-heading">
          <div class="flex">
            <svg version="1.0" id="Layer_1" class="w-12 h-12 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enable-background="new 0 0 64 64" fill="#FAC300"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#FAC300" d="M60,52V4c0-2.211-1.789-4-4-4H14v51v3h42v8H10c-2.209,0-4-1.791-4-4s1.791-4,4-4h2v-3V0H8 C5.789,0,4,1.789,4,4v54c0,3.313,2.687,6,6,6h49c0.553,0,1-0.447,1-1s-0.447-1-1-1h-1v-8C59.104,54,60,53.104,60,52z M23,14h12 c0.553,0,1,0.447,1,1s-0.447,1-1,1H23c-0.553,0-1-0.447-1-1S22.447,14,23,14z M42,28H23c-0.553,0-1-0.447-1-1s0.447-1,1-1h19 c0.553,0,1,0.447,1,1S42.553,28,42,28z M49,22H23c-0.553,0-1-0.447-1-1s0.447-1,1-1h26c0.553,0,1,0.447,1,1S49.553,22,49,22z"></path> </g></svg>
            <span class="text-2xl md:text-4xl">{data[0].company_name}</span>
          </div>
          <div class="business-links mt-4">
            <a href={`http://${data[0].website}`} target="_blank" rel="noopener noreferrer">Visit Website</a>
            <a href="/">{data[0].city_name}</a>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-x-0 md:gap-x-16">
          <div class="col-span-full md:col-span-8">
            <div class="details-div-1 my-8">
              <img
                src={require("D:/KODEON/Repositories/directory_app/src/components/images/retailers_img_1.png")}
                class="w-full h-[400px] object-cover border border-borders rounded"
              ></img>
            </div>
            <div class="details-div-1 bg-white border border-borders rounded my-8">
              <div class="border-b border-borders py-4 px-8">
                <span class="block title ">Description</span>
              </div>
              <div class="p-8">
                <span class="text-[16px]">No content available</span>
              </div>
            </div>
            <div class="details-div-1 bg-white border border-borders rounded my-8">
              <div class="border-b border-borders py-4 px-8">
                <span class="block title ">Services</span>
              </div>
              <div class="p-8">
                <span class="text-[16px]">No content available</span>
              </div>
            </div>
          </div>
          <div class="col-span-full md:col-span-4">
            <div class="details-div-1 bg-white border border-borders rounded my-8">
              <div class="border-b border-borders py-4 px-8">
                <span class="block title ">Address</span>
              </div>
              <div class="p-8">
                <span class="text-[16px]">No address available</span>
              </div>
            </div>
            <div class="details-div-1 bg-white border border-borders rounded my-8">
              <div class="border-b border-borders py-4 px-8">
                <span class="block title ">Phones</span>
              </div>
              <div class="p-8">
                <span class="text-[16px]">No content available</span>
              </div>
            </div>
            <div class="details-div-1 bg-white border border-borders rounded p-8 h-fit my-8">
              <div class="">
                <div class="weekdays-section">
                  <span class="title leading-6">Monday</span>
                  <span class="font-bold text-sm">No timings available</span>
                </div>
                <div class="weekdays-section pt-2">
                  <span class="title leading-6">Tuesday</span>
                  <span class="font-bold text-sm">No timings available</span>
                </div>
                <div class="weekdays-section pt-2">
                  <span class="title leading-6">Wednesday</span>
                  <span class="font-bold text-sm">No timings available</span>
                </div>
                <div class="weekdays-section pt-2">
                  <span class="title leading-6">Thursday</span>
                  <span class="font-bold text-sm">No timings available</span>
                </div>
                <div class="weekdays-section pt-2">
                  <span class="title leading-6">Friday</span>
                  <span class="font-bold text-sm">No timings available</span>
                </div>
                <div class="weekdays-section pt-2">
                  <span class="title leading-6">Saturday</span>
                  <span class="font-bold text-sm">No timings available</span>
                </div>
                <div class="weekdays-section pt-2">
                  <span class="title leading-6">Sunday</span>
                  <span class="font-bold text-sm">No timings available</span>
                </div>
              </div>
            </div>
            <div class="details-div-1 bg-white border border-borders rounded my-8">
              <div class="border-b border-borders py-4 px-8">
                <span class="block title ">Share</span>
              </div>
              <div class="share-links p-8">
                <FacebookShareButton url={window.location.href}>
                  <FacebookIcon />
                </FacebookShareButton>
                <TwitterShareButton url={window.location.href}>
                  <TwitterIcon />
                </TwitterShareButton>
                <LinkedinShareButton url={window.location.href}>
                  <LinkedinIcon />
                </LinkedinShareButton>
                <PinterestShareButton url={window.location.href}>
                  <PinterestIcon />
                </PinterestShareButton>
              </div>
            </div>
            {/* <div class="details-div-1 bg-white border border-borders rounded p-8">
              <div>
                <div class="weekdays-section pt-2">
                  <span class="title leading-6">Website</span>
                  <span class="font-bold text-sm">
                    <a href="">Visit Website</a>
                  </span>
                </div>
                <div class="weekdays-section pt-2">
                  <span class="title leading-6">Payment Accepted</span>
                  <span class="font-bold text-sm">Credit Cards Only</span>
                </div>
                <div class="weekdays-section pt-2">
                  <span class="title leading-6">Wifi Access</span>
                  <span class="font-bold text-sm">Free Wifi</span>
                </div>
                <div class="weekdays-section pt-2">
                  <span class="title leading-6">Pets</span>
                  <span class="font-bold text-sm">No Pets Allowed</span>
                </div>
                <div class="weekdays-section pt-2">
                  <span class="title leading-6">Parking</span>
                  <span class="font-bold text-sm">Free Parking</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default BusinessDetails;