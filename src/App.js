import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css';
import Header from './Component/Header/Header';
import Pages from "./Pages/Pages";

import { useEffect, useState } from "react";

function App() {
  const [cartItem, setCartItem] = useState([])

  useEffect(() => {
    fetch('./FlashCard.JSON')
      .then(res => res.json())
      .then(data => setCartItem(data))
  }, [])
  console.log(cartItem)
  return (
    <BrowserRouter>
      <Header />
      {/* <Route path="/" element={<Header />}></Route> */}
      <Routes>
        <Route path="/" element={<Pages cartItem={cartItem} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
