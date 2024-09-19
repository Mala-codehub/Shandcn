import React, { useState, useEffect } from 'react';
import { BsBoxes } from 'react-icons/bs';
import CollapsibleDemo from '@/CollapsibleDemo';
import CollapsibleDemo1 from '@/collapsibleDemo1';
import CollapsibleDemo2 from '@/collapsibleDemo2';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('content');
  const [isSidebarDisable, setIsSidebarDisable] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:768px)');
    const handleResize = () => setIsSidebarDisable(mediaQuery.matches);
    mediaQuery.addListener(handleResize);

    // Set the initial value
    setIsSidebarDisable(mediaQuery.matches);

    // Cleanup listener on component unmount
    return () => mediaQuery.removeListener(handleResize);
  }, []);

  if (isSidebarDisable) {
    return null;
  }

  return (
    <div className="flex flex-col h-screen w-80 bg-white m-4 rounded mb-4 p-6">
      <div className="flex items-center mb-4">
        <BsBoxes className="text-xl mr-2" />
        <h3 className="font-bold">Material Tailwind Pro</h3>
      </div>
      <div className="flex flex-row mb-4 mt-4">
        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <img
            className="w-10 h-10 rounded-full"
            src="src/assets/emoji.png" // Adjusted path
            alt="Rounded avatar"
          />
        </div>
        <CollapsibleDemo />
      </div>
      <hr className="mt-4 mb-4" />
      <CollapsibleDemo1 />
      <hr className="mt-4 mb-4" />
      <CollapsibleDemo2 />
    </div>
  );
};

export default Sidebar;
