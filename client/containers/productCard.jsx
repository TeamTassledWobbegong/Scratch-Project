import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductCard = (props) => {
  const { _id, price, name, inventory, cart_id, item_name } = props;

  // const [products, setProducts] = useState([]);

  // const refreshProducts = () => {
  //   axios.get('/api/products').then(r=> r.data).then(products=>{
  //     console.log(products);
  //     setProducts(products);
  //   }
  //   );
  // };

  // //function to add product to cart - Need to confirm that the api path is correct and props match
  // const addToCart = () =>{
  //   const payload ={
  //     id:_id,
  //     item_name:item_name,
  //     cart_id:cart_id,
  //     inventory:inventory-1,
  //   };
  //   //this section makes the put request to the backend then refreshes the inventory
  //   axios.put('/api/checkoutpathing',payload).then(r=>(r.data));
  // };

  return (
    <article className='card'>
      <img
        src='../images/dual croc spoilers.jpg'
        width='200px'
        height='200px'
      ></img>
      <li key={'_id'} className='productDetail'>
        {' '}
        Description: {'name'}
      </li>
      <li className='productDetail'> Price: {'price'}</li>
      <li className='productDetail'> Inventory: {'quantity'}</li>
      <button className='addButton' onClick={'add to cart'}>
        +
      </button>
      <button className='addButton' onClick={'add to cart'}>
        -
      </button>
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
