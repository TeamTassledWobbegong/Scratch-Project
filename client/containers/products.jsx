import React, { useEffect, useState } from 'react';
import Header from '../components/header.jsx';
import axios from 'axios';
import ProductCard from './productCard.jsx';

const Products = (props) => {
  return (
    <div>
      <Header />
      <p>Hello from the Products page Card should render here </p>
      <ProductCard />
    </div>
  );
};

export default Products;
