import React, { useEffect, useState } from 'react';
import Header from '../components/header.js';
import axios from 'axios';
import ProductCard from './productCard.js';

const Products = (props) => {
  return (
    <div>
      <Header />
      <p>Hello from the Products page Card should render here </p>
      {/* <ProductCard /> */}
    </div>
  );
};

export default Products;
