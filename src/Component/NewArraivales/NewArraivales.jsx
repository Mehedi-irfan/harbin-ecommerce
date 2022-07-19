import React from 'react'
import Cart from './Cart'
import './Style.css'

function NewArraivales() {
    return (
        <>
            <section className="newarraivales background">
                <div className="container">
                    <div className="heading d-flex">
                        <div className="heading-left row f_flex">
                            <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' alt='' />
                            <h2>New Arrivales</h2>
                        </div>
                        <div className="heading-right row">
                            <span>View all</span>
                            <i className="fa fa-caret-right"></i>
                        </div>
                    </div>
                    <Cart />
                </div>
            </section>
        </>
    )
}

export default NewArraivales