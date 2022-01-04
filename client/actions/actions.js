// import axios from 'axios';
import * as types from './actionTypes.js';

// Add to Cart
//Delete from Cart
//Add Quantity
//Reduce Quantity
//isLoggedIn
//Load page,

export const addCartActionCreator = (itemName, itemQuantity) => ({
  type: types.ADD_ITEM,
  itemName,
  itemQuantity,
});

export const loginActionCreator = (cartID) => ({
  type: types.GET_CARTID,
  cartID,
});

export const productsActionCreator = (products) => ({
  type: types.GET_PRODUCTS,
  products,
});

export const singleItemActionCreator = (object) => ({
  type: types.SINGLE_ITEM,
  payload: object,
});
