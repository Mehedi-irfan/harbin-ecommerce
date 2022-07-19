import React from 'react'
import Dcart from './Dcart'

function Discount() {
    return (
        <>
            <section className="Discount background newarraivales">
                <div className="container">
                    <div className="heading d-flex">
                        <div className="heading-left row f_flex">
                            <img src='https://img.icons8.com/windows/32/fa314a/gift.png' alt='' />
                            <h2>Big Discount</h2>
                        </div>
                        <div className="heading-right row">
                            <span>View all</span>
                            <i className="fa fa-caret-right"></i>
                        </div>
                    </div>
                    <Dcart />
                </div>
            </section>
        </>
    )
}

export default Discount