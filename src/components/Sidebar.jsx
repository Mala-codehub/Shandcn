import React, { useState } from 'react';
import TextareaDemo from '@/TextareaDemo';
import InputDemo from '@/InputDemo';
import SelectDemo from '@/SelectDemo';
import InputDemo1 from '@/InputDemo1'; // Make sure this import is correct
import SeparatorDemo from '@/SeparatorDemo';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('content');

  return (
    <div className="flex h-screen">
      {/* Sidebar Container */}
      <div className="flex flex-col bg-gray-200 w-60">
        {/* Header */}
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
        
        {/* Tabs and Content Container */}
        <div className="flex flex-col bg-white border-r shadow-md p-4">
          {/* Tab Headers */}
          <div className="flex justify-around border-b mb-4">
            <button 
              className={`p-2 ${activeTab === 'content' ? 'border-b-2 border-red-500' : ''}`}
              onClick={() => setActiveTab('content')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.892.596l-2.047.848a.75.75 0 0 1-.98-.98l.848-2.047a2.75 2.75 0 0 1 .596-.892l7.262-7.261Z" clipRule="evenodd" />
              </svg>
              Content
            </button>
            <button 
              className={`p-2 ${activeTab === 'style' ? 'border-b-2 border-red-500' : ''}`}
              onClick={() => setActiveTab('style')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5.5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
              </svg>
              Style
            </button>
            <button 
              className={`p-2 ${activeTab === 'advanced' ? 'border-b-2 border-red-500' : ''}`}
              onClick={() => setActiveTab('advanced')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M6.455 1.45A.5.5 0 0 1 6.952 1h2.096a.5.5 0 0 1 .497.45l.186 1.858a4.996 4.996 0 0 1 1.466.848l1.703-.769a.5.5 0 0 1 .639.206l1.047 1.814a.5.5 0 0 1-.14.656l-1.517 1.09a5.026 5.026 0 0 1 0 1.694l1.516 1.09a.5.5 0 0 1 .141.656l-1.047 1.814a.5.5 0 0 1-.639.206l-1.703-.768c-.433.36-.928.649-1.466.847l-.186 1.858a.5.5 0 0 1-.497.45H6.952a.5.5 0 0 1-.497-.45l-.186-1.858a4.993 4.993 0 0 1-1.466-.848l-1.703.769a.5.5 0 0 1-.639-.206l-1.047-1.814a.5.5 0 0 1 .14-.656l1.517-1.09a5.033 5.033 0 0 1 0-1.694l-1.516-1.09a.5.5 0 0 1-.141-.656L2.46 3.593a.5.5 0 0 1 .639-.206l1.703.769c.433-.36.928-.65 1.466-.848l.186-1.858Zm-.177 7.567-.022-.037a2 2 0 0 1 3.466-1.997l.022.037a2 2 0 0 1-3.466 1.997Z" clipRule="evenodd" />
              </svg>
              Advanced
            </button>
          </div>
          
          {/* Tab Content */}
          {activeTab === 'content' && (
            <div>
              <h3 className="font-bold mb-2">Title</h3>
              <TextareaDemo />
              
              {/* Additional content for 'Content' tab */}
              <div className="flex flex-col space-y-2">
                <h3>Links</h3>
                <InputDemo />
                <div className="flex flex-row gap-2">
                  <h3>Size</h3>
                  <select className="border p-2 w-32">
                    <option>Default</option>
                    {/* Other options */}
                  </select>
                </div>
                <div className="flex flex-row gap-2">
                  <h3>HTML Tag</h3>
                  <select className="border p-2 w-32">
                    <option>H2</option>
                    {/* Other options */}
                  </select>
                </div>
              </div>
              {/* Adding InputDemo1 to the sidebar */}
          <div className="flex flex-row mt-4 items-center">
            <h3 className="mr-1">Alignment</h3>
            <InputDemo1 />
          </div>
            </div>
          )}
          {activeTab === 'style' && (
            <div>
              {/* Content for the 'Style' tab */}
              <h3 className="font-bold">Style Options</h3>
              {/* Add style settings here */}
            </div>
          )}
          {activeTab === 'advanced' && (
            <div>
              {/* Content for the 'Advanced' tab */}
              <h3 className="font-bold">Advanced Settings</h3>
              {/* Add advanced settings here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
