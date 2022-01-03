import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  useEffect(() => {
    fetch('/login')
      .then(data => data.json())
      .then(data => {
        console.log(data.body);
      });
  }, []);

  return (
    <div className='app'>
      <p>App ran</p>
    </div>
  );
}

export default App;