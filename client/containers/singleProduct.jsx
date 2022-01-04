import React, { useEffect, useState } from 'react';
import { Link } from 'react-redux';
import axios from 'axios';

const SingleProductCard = (props) => {
  const { price, quantity, cart_id, item_name, description, primary_picture } = props;
console.log('inSingleProduct')

  // //function to add product to cart - Need to confirm that the api path is correct and props match
  // const addToCart = () =>{
  //   const payload ={
  //     id:_id,
  //     item_name:item_name,
  //     Cart_Id:cart_id,
  //     quantity:quantity
  //   };
  //   //this section makes the put request to the backend then refreshes the inventory
  //   axios.put('/api/checkoutpathing',payload).then(r=>(r.data));
  // };

  return (
    <article className='card'>
      <img
        // src='../images/dual croc spoilers.jpg'
        src={primary_picture}
        width='150px'
        height='150px'
      ></img>
      <li key={item_name} className='productDetail'>
        {description}
      </li>
      <li className='productDetail'> Price:$ {price}</li>
      <li className='productDetail'> In Stock : {quantity}</li>
      <button className='addButton' onClick={'add to cart'}>
        add to cart
      </button>
      <button className='removeButton' onClick={'add to cart'}>
        remove
      </button>
    </article>
  );
};

export default SingleProductCard;