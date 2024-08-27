import React, { useState } from 'react';
import { Button } from './ui/button';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(''); 
  
  const renderContent = () => {
    switch (selectedItem) {
      case 'Text':
        return <div>Details about Text edit...</div>;
      case 'Button':
        return <div>Details about Button edit...</div>;
      case 'Space':
        return <div>Details about Space edit...</div>;
      case 'About':
        return <div>Details about About edit...</div>;
      case 'Image':
        return <div>Details about Image edit...</div>;
      case 'Video':
        return <div>Details about Video edit...</div>;
      default:
        return <div>Select an item to view details</div>;
    }
  };

  return (
    <div className="flex h-screen">
    <div className="flex flex-col bg-gray-200 w-60">
      <div className="flex items-center gap-4 bg-red-500 p-2 mt-4">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="white" 
          className="w-6 h-6"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" 
          />
        </svg>
        <h3 className="italic text-white font-bold">elementor</h3>
      </div>
      
      {/* Centered Grid Container */}
      <div className="flex-grow flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <ul>
              <li className="rounded-sm">
                <button
                  onClick={() => setSelectedItem('Text')}
                  className="flex items-center px-8 py-6 rounded-md m-2 text-black font-bold bg-white hover:bg-red-300"
                >
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                    Text
                  </span>
                </button>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <ul>
              <li className="rounded-sm">
                <button
                  onClick={() => setSelectedItem('Button')}
                  className="flex items-center p-5 rounded-md m-2 text-black font-bold bg-white hover:bg-red-300"
                >
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
                    </svg>
                    Button
                  </span>
                </button>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <ul>
              <li className="rounded-sm">
                <button
                  onClick={() => setSelectedItem('Space')}
                  className="flex items-center p-6 rounded-md m-2 text-black font-bold bg-white hover:bg-red-300"
                >
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    Space
                  </span>
                </button>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <ul>
              <li className="rounded-sm">
                <button
                  onClick={() => setSelectedItem('About')}
                  className="flex items-center p-6 rounded-md m-2 text-black font-bold bg-white hover:bg-red-300"
                >
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h17.25" />
                    </svg>
                    About
                  </span>
                </button>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <ul>
              <li className="rounded-sm">
                <button
                  onClick={() => setSelectedItem('Image')}
                  className="flex items-center p-6 rounded-md m-2 text-black font-bold bg-white hover:bg-red-300"
                >
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a.375.375 0 1 0 0-.75.375.375 0 0 0 0 .75ZM2.625 4.875C2.625 3.839 3.464 3 4.5 3h15c1.036 0 1.875.839 1.875 1.875v14.25c0 1.036-.839 1.875-1.875 1.875h-15c-1.036 0-1.875-.839-1.875-1.875V4.875Zm4.874 7.313-2.625 3.4a.375.375 0 0 0 .3.612h14.252a.375.375 0 0 0 .299-.612l-4.875-6.3a.375.375 0 0 0-.598 0l-3.375 4.35-.927-1.237a.375.375 0 0 0-.598 0l-1.953 2.487a.375.375 0 0 1-.6 0Z" />
                    </svg>
                    Image
                  </span>
                </button>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <ul>
              <li className="rounded-sm">
                <button
                  onClick={() => setSelectedItem('Video')}
                  className="flex items-center p-6 rounded-md m-2 text-black font-bold bg-white hover:bg-red-300"
                >
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.572c0-.955-1.074-1.526-1.855-.995l-9.015 5.678c-.713.449-.713 1.541 0 1.99l9.015 5.678c.781.531 1.855-.04 1.855-.994V15m0-6v6m0-6L21 5.25m-5.25 9 5.25 3.75M12 18.938a4.5 4.5 0 1 1-6-6.79" />
                    </svg>
                    Video
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
      <div className="flex-grow flex items-center justify-center p-6 font-bold bg-white">
        {renderContent()}
      </div>
    </div>
    
  );
};

export default Sidebar;