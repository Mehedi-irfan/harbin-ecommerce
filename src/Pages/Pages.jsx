import React from 'react'
import FlashDeals from '../Component/FlashDeals/FlashDeals'
import Home from '../Component/MainPage/Home'

function Pages({ cartItem, productItem, addToCart }) {
    return (
        <>
            <Home productItem={productItem} />
            <FlashDeals cartItem={cartItem} addToCart={addToCart} />
        </>
    )
}

export default Pages