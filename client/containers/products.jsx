import React, { useEffect, useState } from 'react';
import Header from '../components/header.jsx';
import axios from 'axios';
import ProductCard from './productCard.jsx';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/actions.js';

const Products = () => {
  const dispatch = useDispatch();
  const [products,setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then((r) => r.json())
      .then((products) => {
        dispatch(actions.productsActionCreator(products));
        setProducts(products);
      });
  }, []);

   

  return (
    <div>
      <Header />
      {products.map((el, idx) => {
        return(
          <div key={el._id} className ={'productSheets'}>
            <ProductCard {...el}/>
          </div>
        );
      })
      }      



      
    </div>
  );
};

export default Products;
