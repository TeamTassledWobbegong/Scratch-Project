import React from 'react';
import Header from '../components/header.js';
// import '../style/test.css';
import '../style/main.css';

function Home() {
  return (
    <div>
      <Header/>
      <h1 className="font-bold">Hello from the Home page </h1>
    </div>
  );
}

export default Home;