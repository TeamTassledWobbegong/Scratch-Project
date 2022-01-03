import React from 'react';
import Header from '../components/header.js';
import '../style/test.css';
// import '../style/main.css';

function Home() {
  return (
    <div>
      <Header />
      <p className='hello'>Hello from the Home page </p>
    </div>
  );
}

export default Home;
