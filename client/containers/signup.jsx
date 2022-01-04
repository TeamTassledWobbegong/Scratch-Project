import React, { useState } from 'react';
import Header from '../components/header.jsx';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function registerUser(info) {
  try {
    return fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    }).then((data) => data.json());
  } catch (err) {
    throw new Error('Sign up failed.');
  }
}

function Signup() {
  // const dispatch = useDispatch();

  // async function handleSubmit(event) {
  //   event.preventDefault();

  //   const cartID = await verifyUser({ username, password });

  //   if (cartID){
  //     dispatch(actions.loginActionCreator(username));
  //     navigate('/login');
  //   }
  //   else {
  //     alert('Sign up failed!');
  //   }
  // }
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const cartID = await registerUser({ username, password });

    if (cartID) navigate('/login');
    else {
      alert('Sign up failed!');
    }
  }

  return (
    <div>
      <Header />
      <p className='welcome'>
        Sign up below to become Crok's newest member and have the coolest crocs
        on the blocks! Signed up? Then
        <Link className='pad' to='/signup'>
          log in!
        </Link>
      </p>
      <div className='signup'>
        <Form className='Form'>
          <Form.Group size='lg' controlId='username'>
            <Form.Label>Username: </Form.Label>
            <Form.Control
              autoFocus
              type='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group size='lg' controlId='password'>
            <Form.Label>Password: </Form.Label>
            <Form.Control
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button
            block
            size='lg'
            type='button'
            onClick={handleSubmit}
            disabled={!validateForm()}
          >
            Sign Up
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Signup;
