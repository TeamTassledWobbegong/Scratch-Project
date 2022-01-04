import React from 'react';

// will have header, products, contact us, about us, Cart
// Logo tbd

function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <a href='http://localhost:8080/'>
          <img
            src='../images/logo_size_invert.jpg'
            alt='http://localhost:8080/'
          ></img>
        </a>
      </div>
      <div className='productsLink'>
        <a className='headerLinks' href='http://localhost:8080/products'>
          Products
        </a>
        <a className='headerLinks' href='http://localhost:8080/about'>
          About Us
        </a>
        <a className='headerLinks' href='http://localhost:8080/contact'>
          Contact Us
        </a>
      </div>
      <div className='cart'>
        <a className='cartLinks' href='http://localhost:8080/cart'>
          Cart
        </a>
        <a className='cartLinks' href='http://localhost:8080/login'>
          Log In
        </a>
      </div>
    </div>
  );
}

export default Header;
