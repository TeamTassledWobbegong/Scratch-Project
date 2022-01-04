import React, { useEffect, useState } from 'react';
import { Link } from 'react-redux';
import axios from 'axios';

const ProductCard = (props) => {
  const { price, quantity, cart_id, name, description, primary_picture } = props.el;
  //takes the clicked product image and generated the full product card 
  const getProductCard = (clickedImage) => {
    console.log(clickedImage.alt)
    if (props.el.hasOwnProperty(clickedImage.alt)) console.log('true') 
    return(
      // <div key={clickedImage.alt} className ={'productSheets'}>
      //         <SingleProductCard el={el}/>
      //       </div>
      <article className='card'>
        <img
          src={primary_picture}
          width='150px'
          height='150px'
        ></img>
        <li key={name} className='productDetail'>
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


  

  return (
    <article className='card'>

      <img
        alt={name}
        src={primary_picture}
        width='150px'
        height='150px'
        onClick = {(e)=>  getProductCard(e.target)}
      ></img>
      
    </article>
  );
};

export default ProductCard;

//NOTES
// CREATE TABLE public.carts (
//   "_id" serial NOT NULL,
//   "item_name" varchar NOT NULL,
//   "quantity" integer NOT NUll,
//   "cart_id" integer NOT NULL,
//   CONSTRAINT "cart_pk" PRIMARY KEY ("_id")
// ) WITH (
//   OIDS=FALSE
// );
// INSERT INTO public.carts VALUES (1, 'dual croc spoilers', 4, 1);
