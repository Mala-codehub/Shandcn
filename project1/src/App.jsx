import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './header';

function App() {
  const [content, setContent] = useState('');

  return (
    <div className="flex bg-gray-200">
      <Sidebar onSelect={setContent} />
      <div className="py-4 "><Header /></div> 
    </div>
  );
}

export default App;
