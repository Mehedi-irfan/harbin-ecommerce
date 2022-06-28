import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    const [mobileMenu, setMobileMenu] = useState(false);
    return (
        <>
            <header className="header">
                <div className="container d-flex">
                    <div className="categories d-flex">
                        <span className='fa-solid fa-border-all'></span>
                        <h4>Categories <i className="fa fa-chevron-down"></i></h4>
                    </div>
                    <div className="navLink">
                        <ul className={mobileMenu ? 'nav-links-mobilemenu' : 'link f_flex capitalize'} onClick={() => setMobileMenu(false)}>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/pages'>Pages</Link>
                            </li>
                            <li>
                                <Link to='/user'>User Account</Link>
                            </li>
                            <li>
                                <Link to='/vendor'>Vendor Account</Link>
                            </li>
                            <li>
                                <Link to='/track'>Track my order</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>
                        <button className="toggle" onClick={() => setMobileMenu(!mobileMenu)}>
                            {
                                mobileMenu ? <i className="fa fa-times close home-btn"></i> :
                                    <i className="fa-solid fa-bars open"></i>
                            }
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default NavBar