import React from 'react'
import Head from './Head'
import NavBar from './NavBar'
import Search from './Search';
import './Header.css';

function Header({ productItem }) {
    return (
        <>
            <Head />
            <Search productItem={productItem} />
            <NavBar />
        </>
    )
}

export default Header