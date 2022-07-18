import React, { useEffect } from 'react';
import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Home.css'

function SlideCard() {
    const [sliderData, setSliderData] = useState([]);

    useEffect(() => {
        fetch('./SliderData.JSON')
            .then(res => res.json())
            .then(data => setSliderData(data))
    }, [])


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
            return <ul style={{ margin: "0px " }}>{dots}</ul>
        }
    };

    return (
        <>
            <Slider {...settings}>
                {
                    sliderData.map((value) => {
                        return (
                            <div className="box d-flex top" key={value.id}>
                                <div className="left">
                                    <h1>{value.title}</h1>
                                    <p>{value.desc.slice(0, 120)}</p>
                                    <button className="btn-primary">Visit Collections</button>
                                </div>
                                <div className="right">
                                    <img src={value.cover} alt="" />
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </>
    )
}

export default SlideCard