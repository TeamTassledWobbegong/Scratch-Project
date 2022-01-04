import React from 'react';
import Header from '../components/header.jsx';

function About() {
  //a little about us page to truly connect the users and Crok team
  return (
    <div>
      <Header />
      <div className='aboutCon'>
        <div className='about'>
          <h2>About Us:</h2>
          <p>
            Here at Crok we strive to give our customers the best experience
            possible for getting croc accessories. Customizing your crocs and
            making them yours is no easy task and we understand that here! The
            folk at Crok want you to be your most confident and accesorized self
            while wearing your crocs. We truly believe after you are done
            shopping with us, you will have the coolest crocs on the blocks!
          </p>
          <p>- The Crok Team</p>
        </div>
      </div>
    </div>
  );
}

export default About;
