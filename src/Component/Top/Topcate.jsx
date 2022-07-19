import React from 'react'
import TopCart from './TopCart'
import './Style.css'

function Topcate() {
    return (
        <>
            <section className="topCate background">
                <div className="container">
                    <div className="heading d-flex">
                        <div className="heading-left row f_flex">
                            <i className="fa fa-border-all"></i>
                            <h2>Top Category</h2>
                        </div>
                        <div className="heading-right row">
                            <span>View all</span>
                            <i className="fa fa-caret-right"></i>
                        </div>
                    </div>
                    <TopCart />
                </div>
            </section>
        </>
    )
}

export default Topcate