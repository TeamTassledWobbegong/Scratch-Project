import React from 'react';
import Header from '../components/header.jsx';

function Home() {
  return (
    <div>
      <Header />
      <div className='home'>
        <h2 className='hello'>
          Welcome to Croks, the finest establishment of Croc accessories! Take a
          look at our happy customers!
        </h2>
        <img
          src='../images/home.png'
          alt='Happy Customers'
          width='500'
          height='500'
        ></img>
      </div>
    </div>
  );
}

export default Home;
