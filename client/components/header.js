import React from 'react';
// import './header.css';

// will have header, products, contact us, about us, Cart 
// Logo tbd

function Header() {
  return (
    <div className="header">
      <ul>
        <img src="TBD" alt="http://localhost:8080/"></img> 
        <a href="http://localhost:8080/">CompanyName</a>
        <a href="http://localhost:8080/products">Products</a>
        <a href="http://localhost:8080/contacts">Contact Us!</a>
      </ul>
    </div>
  );
}
  
export default Header;