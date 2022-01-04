import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';

//Pages
import Home from './containers/home.jsx';
import About from './containers/about.jsx';
import Contact from './containers/contact.jsx';
import Cart from './containers/cart.jsx';
import Products from './containers/products.jsx';
import Login from './containers/login.jsx';
import Signup from './containers/signup.jsx';
import SingleProductCard from './containers/singleProduct.jsx';

function App() {
  // const cart = useSelector((state) => state.crok.cart);

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products' element={<Products />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/single' element={<SingleProductCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
