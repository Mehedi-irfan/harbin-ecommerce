import React from 'react'
import Head from './Head'
import NavBar from './NavBar'
import Search from './Search';
import './Header.css';

function Header() {
    return (
        <>
            <Head />
            <Search />
            <NavBar />
        </>
    )
}

export default Header