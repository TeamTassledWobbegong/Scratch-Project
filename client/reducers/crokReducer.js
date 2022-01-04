import * as types from '../actions/actionTypes.js';

const initialState = {
  username: '',
  cartID: '',
  cart: {},
  products: [],
  singleProduct: {},
};

const crokReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      const newCart = state.cart;
      if (newCart[action.itemName])
        newCart[action.itemName] += action.itemQuantity;
      return {
        ...state,
        cart: newCart,
      };

    case types.GET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };

    case types.SINGLE_ITEM:
      console.log(action.payload);
      return {
        ...state,
        singleProduct: action.payload,
      };

    case types.GET_CARTID:
      return {
        ...state,
        cartID: action.payload,
      };

    // case types.LOGIN:
    //   return {
    //     ...state,
    //     username: action.payload,
    //   };

    // case types.DELETE_ITEM

    default:
      return {
        ...state,
      };
  }
};

export default crokReducer;
