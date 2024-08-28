import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TextareaDemo from './TextareaDemo';

function App() {
  const [content, setContent] = useState('');

  return (
    <div className="flex">
      <Sidebar onSelect={setContent} />
      <div className="flex flex-grow items-center justify-center font-bold border-white m-6">
        <TextareaDemo content={content} />
      </div>
    </div>
  );
}

export default App;
