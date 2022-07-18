import React from 'react'
import FlashCard from './FlashCard'

function FlashDeals({ cartItem }) {
    return (
        <>
            <section className="flash background">
                <div className="container">
                    <div className="heading f_flex">
                        <i className="fa fa-bolt"></i>
                        <h1>Flash Deals</h1>
                    </div>
                    <FlashCard cartItem={cartItem} />
                </div>
            </section>
        </>
    )
}

export default FlashDeals