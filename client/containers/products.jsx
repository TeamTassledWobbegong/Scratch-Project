import React, { useEffect, useState } from 'react';
import Header from '../components/header.jsx';
import axios from 'axios';
import ProductCard from './productCard.jsx';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/actions.js';

const Products = () => {
  const dispatch = useDispatch();
  //const productsForSale = [];

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then((r) => r.json())
      .then((products) => {
        dispatch(actions.productsActionCreator(products));
        // productsForSale.push(products);
        console.log(products);
      });
  }, []);

  // console.log(productsForSale);

  return (
    <div>
      <Header />
      <ProductCard />
      <p>Hello from the Products page Card should render here </p>
    </div>
  );
};

export default Products;
