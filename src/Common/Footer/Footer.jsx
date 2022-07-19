import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <>
            <footer>
                <div className="container grid2">
                    <div className="box">
                        <h1>Harbin</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque temporibus, eveniet vel voluptas blanditiis illum?</p>
                        <div className="icon d-flex">
                            <div className="img d-flex">
                                <i className="fa-brands fa-google-play"></i>
                                <span>Google Play</span>
                            </div>
                            <div className="img d-flex">
                                <i className="fa-brands fa-app-store-ios"></i>
                                <span>App Store</span>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <h2>About Us</h2>
                        <ul>
                            <li>Carrers</li>
                            <li>Our Stores</li>
                            <li>Our Cares</li>
                            <li>Term & Condition</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                    <div className="box">
                        <h2>Customar Care</h2>
                        <ul>
                            <li>Help Center</li>
                            <li>How to Buy</li>
                            <li>Track your order</li>
                            <li>Corporate & Bulk Purchesing</li>
                            <li>Returns & Refunds</li>
                        </ul>
                    </div>

                    <div className="box">
                        <h2>Contact Us</h2>
                        <ul>
                            <li>70 Washington Squre South, New York, NY 10012, Uniated Stats</li>
                            <li>Email : mehediirfan99@gmail.com</li>
                            <li>Phone : +880 1892 054 369</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer