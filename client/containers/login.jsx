import React from 'react';
import Header from '../components/header.jsx';

// function sendLoginInfo (Username,Password) = {

// }
function Login() {
  return (
    <div>
      <Header />
      <p className='hello'>
        Please Login or create a new Username and Password
      </p>
      <input
        className='userName'
        placeholder='example@email.com'
        value={'userName'}
        // onChange={(e) => setUserName(e.target.value)}
      ></input>
      <input
        className='userPass'
        placeholder='********'
        value={'userPassword'}
        // onChange={(e) => setUserPassword(e.target.value)}
      ></input>
      <button onClick={'sendLoginInfo'}>Login</button>
    </div>
  );
}

export default Login;
