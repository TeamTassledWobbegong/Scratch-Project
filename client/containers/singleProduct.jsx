import React, { useEffect, useState } from 'react';
import Header from '../components/header.jsx';
import { useSelector } from 'react-redux';
import axios from 'axios';
import * as actions from '../actions/actions.js';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const SingleProductCard = () => {
  const item = useSelector((state) => state.crok.singleProduct);
  const { price, quantity, cart_id, name, description, primary_picture } = item;

  console.log('inSingleProduct');
  console.log('item: ', item);
  let newNum = 0;
  const [amount, setAmount] = useState(0);

  function addToCart(itemObject) {
    const value = amount;
    const navigate = useNavigate();
    try {
      return fetch('http://localhost:3000/api/add', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          itemName: name,
          cartID: 1,
          quantity: amount,
        }),
      })
        .then((data) => data.json())
        .then((res) => {
          newNum = quantity + res;
          navigate('/products');
        });
    } catch (err) {
      alert('Please login before adding to cart');
      throw new Error('Log in failed.');
    }
  }

  return (
    <div>
      <Header />
      <article className='Singlecard'>
        <img src={primary_picture} width='150px' height='150px'></img>
        <li key={name} className='itemDescription'>
          {description}
        </li>
        <li className='pricingDetail'> Price: ${price}</li>
        <li className='inventoryDetail'> In Stock : {quantity}</li>
        <Form className='quantity'>
          <Form.Group size='lg' controlId='amount'>
            <Form.Label>Amount: </Form.Label>
            <Form.Control
              autoFocus
              type='amount'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Form.Group>
          <button className='addButton' onClick={addToCart}>
            Add
          </button>
          <button className='removeButton' onClick={'add to cart'}>
            remove
          </button>
        </Form>
      </article>
    </div>
  );
};

export default SingleProductCard;
