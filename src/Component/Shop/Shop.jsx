import React from 'react'
import Catg from './Catg'
import ShopCart from './ShopCart'
import './Style.css'

function Shop({ shopItems, addToCart }) {
    return (
        <>
            <section className="shop background">
                <div className="container d-flex">
                    <Catg />
                    <div className="contentWidth">
                        <div className="heading d-flex">
                            <div className="heading-left row f_flex">
                                <h2>Mobile Phones</h2>
                            </div>
                            <div className="heading-right row">
                                <span>View all</span>
                                <i className="fa fa-caret-right"></i>
                            </div>
                        </div>

                        <div className="product-content grid1">
                            <ShopCart shopItems={shopItems} addToCart={addToCart} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Shop