import React, { useState } from 'react';
import Header from '../components/header.jsx';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';

function verifyUser(info) {
  try {
    return fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    }).then((data) => data.json());
  } catch (err) {
    alert('Username or password credentials is incorrect.');
    throw new Error('Log in failed.');
  }
}

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const cartID = await verifyUser({ username, password });
    console.log(cartID);
    if (typeof cartID !== 'number') alert('Log in failed!');
    if (typeof cartID == 'number') navigate('/products');
  }

  return (
    <div>
      <Header />
      <p className='welcome'>
        Please log in to browse through and order from the finest collection of
        Croc Accessories. If you have not signed up yet, consider becoming the
        newest member of the Crok community below!
        <Link className='pad' to='/signup'>
          Sign Up
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
            Log In
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
