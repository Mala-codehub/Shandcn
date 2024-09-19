import React, { useState } from 'react';
import Header from './header';

function App() {
  const [content, setContent] = useState('');

  return (
      <div><Header /></div> 
  );
}

export default App;
