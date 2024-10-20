import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './components/Products';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [ cartItems, setCartItems ] = useState([])
  const handleAddtoCart = (product) => {
    setCartItems([...cartItems, product])
  }
  const handleCheckout = () => {
    setCartItems([])
  }
  return (
    <BrowserRouter>
      <Header cartItems={cartItems}/>
      <Routes>
        <Route index element={<Product handleAddtoCart={handleAddtoCart} />}/>
        <Route path='/product-detail/:id' element={<ProductDetail handleAddtoCart={handleAddtoCart}/>}/>
        <Route path='/cart' element={<Cart cartItems={cartItems} handleCheckout={handleCheckout}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
