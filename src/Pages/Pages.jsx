import React from 'react'
import FlashDeals from '../Component/FlashDeals/FlashDeals'
import Home from '../Component/MainPage/Home'

function Pages({ cartItem }) {
    return (
        <>
            <Home />
            <FlashDeals cartItem={cartItem} />
        </>
    )
}

export default Pages