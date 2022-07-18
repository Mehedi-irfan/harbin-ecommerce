import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css';
import Header from './Component/Header/Header';
import Pages from "./Pages/Pages";

import { useEffect, useState } from "react";
import Cart from "./Common/Cart/Cart";

function App() {
  const [cartItem, setCartItem] = useState([])
  const [productItem, setProductItem] = useState([])

  useEffect(() => {
    fetch('./FlashCard.JSON')
      .then(res => res.json())
      .then(data => setCartItem(data))
  }, [cartItem]);


  const addToCart = (product) => {
    const productExit = productItem?.find((item) => item?.id === product?.id)

    if (productExit) {
      setProductItem(productItem?.map((item) => item?.id === product?.id ? { ...productExit, qty: productExit?.qty + 1 } : item))
    }
    else {
      setProductItem([...productItem, { ...product, qty: 1 }])
    }
  }

  return (
    <BrowserRouter>
      <Header productItem={productItem} />
      {/* <Route path="/" element={<Header />}></Route> */}
      <Routes>
        <Route path="/" element={<Pages cartItem={cartItem} addToCart={addToCart} productItem={productItem} />} />
        <Route path="/cart" element={<Cart productItem={productItem} addToCart={addToCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
