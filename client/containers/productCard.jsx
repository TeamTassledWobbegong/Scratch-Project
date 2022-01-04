import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as actions from '../actions/actions.js';

const ProductCard = (props) => {
  const { price, quantity, cart_id, name, description, primary_picture } =
    props.el;

  const altText = JSON.stringify(props.el);
  //takes the clicked product image and redirects to the full product card
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getProductCard = (clickedImage) => {
    console.log('props.el is: ', props.el);

    dispatch(actions.singleItemActionCreator(props.el));
    navigate('/single');

    //redirect to singleProduct
    //in singleProduct, populate fields based on which picture was clicked
  };

  return (
    <article className='card'>
      <img
        alt={altText}
        src={primary_picture}
        width='175px'
        height='175px'
        onClick={(e) => getProductCard(e.target)}
      ></img>
    </article>
  );
};

export default ProductCard;
