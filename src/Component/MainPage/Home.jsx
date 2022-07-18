import React from 'react'
import Categories from './Categories'
import SlideCard from './SlideCard'
import Slider from './Slider'

function Home() {
    return (
        <>
            <section className="home">
                <div className="container d-flex">
                    <Categories />
                    <Slider />
                </div>
            </section>
        </>
    )
}

export default Home