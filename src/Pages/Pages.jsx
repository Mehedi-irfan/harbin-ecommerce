import React from 'react'
import Announcement from '../Component/Announcement/Announcement'
import Discount from '../Component/Discount/Discount'
import FlashDeals from '../Component/FlashDeals/FlashDeals'
import Home from '../Component/MainPage/Home'
import NewArraivales from '../Component/NewArraivales/NewArraivales'
import Shop from '../Component/Shop/Shop'
import Topcate from '../Component/Top/Topcate'
import Wrrapper from '../Component/Wrrapper/Wrrapper'

function Pages({ cartItem, productItem, addToCart, shopItems }) {
    return (
        <>
            <Home productItem={productItem} />
            <FlashDeals cartItem={cartItem} addToCart={addToCart} />
            <Topcate />
            <NewArraivales />
            <Discount />
            <Shop shopItems={shopItems} addToCart={addToCart} />
            <Announcement />
            <Wrrapper />
        </>
    )
}

export default Pages