import React from 'react';
import "./ContactUs.css";
export default function SendMessage() 
{
  return (
    <div>
        <form>
            <div class="flex flex-col lg:flex-row justify-between">
                <input type="text" class="full-name-input w-full lg:w-6/12 mx-2"></input>
                <input type="text" class="email-input w-full lg:w-6/12 mx-2"></input>
            </div>
            <textarea class="send-msg-input"></textarea>
            <div class="border-b border-border-gray mb-4"></div>
            <div class="flex justify-between">
                <div class="flex items-center">
                    <input type="checkbox" class="w-[20px] h-[20px]"></input>
                    <span class="text-xs mx-4">I accept the privacy policy</span>
                </div>  
                <button class="send-msg-button bg-primary">Send</button>
            </div>            
      </form>
    </div>
  )
}
