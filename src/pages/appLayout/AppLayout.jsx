import React, { memo, useEffect, useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DarkModeToggle from "../../components/darkToggleMode";

// import required modules
import Slide1 from '../slide1';
import Slide2 from '../slide2';
import Slide3 from '../slide3';
import Slide4 from '../slide4';
import Slide5 from '../slide5'
import Slide6 from '../slide6';
import Slide7 from '../slide7'; 
import Slide9 from '../slide9';
import Slide10 from '../slide10';
import Slide11 from '../slide11'

const AppLayout = () => {

    var settings = {
        dots: true,
        arrows: false,
        infinite: false,
        autoplay: false,
        speed: 500,
        vertical: true,
        customPaging: (i) => {
            return (<button></button>)
        },
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const sliderRef = useRef(null);
    const wrapperRef = useRef(null);

    let animationBreak = 1500;
    let lastTime = 0;
    const handleWheel = e => {
        const wheelDirection = e.deltaY;
        const currentTime = new Date().getTime();
        const isAnimationEnable = currentTime - lastTime > animationBreak;

        if (!isAnimationEnable) return;

        if (wheelDirection < 0 && isAnimationEnable) {
            sliderRef?.current?.slickPrev()
        }

        if (wheelDirection > 0 && isAnimationEnable) {
            sliderRef?.current?.slickNext()
        }

        lastTime = currentTime;
    };

    const handleArrowKeys = (event) => {
        if (event.key === 'ArrowDown') {
            sliderRef?.current?.slickNext()
        } else if (event.key === 'ArrowUp') {
            sliderRef?.current?.slickPrev()
        }
    };

    useEffect(() => {
        const divElement = wrapperRef.current;

        if (divElement) {
            window.addEventListener('wheel', handleWheel);
            window.addEventListener('keydown', handleArrowKeys)
        }

        return () => {
            if (divElement) {
                window.removeEventListener('wheel', handleWheel);
                window.removeEventListener('keydown', handleArrowKeys)
            }
        };
    }, [])

    return (
        <>
            <div ref={wrapperRef} className="home_wrapper hidden lg:block overflow-hidden">
                <Slider ref={sliderRef} {...settings}>
                    <Slide1 />
                    <Slide2 />
                    <Slide3 />
                    <Slide4 />
                    <Slide5 />
                    <Slide6 />
                    <Slide7 />
                  {/*  <Slide9 />
                    <Slide10 /> */}
                    <Slide11 />
                </Slider>
            </div>

            <div className="home_wrapper lg:hidden">
                <Slide1 />
                <Slide2 />
                <Slide3 />
                <Slide4 />
                <Slide5 />
                <Slide6 />
                <Slide7 />
              {/*  <Slide9 />
                 <Slide10 /> */}
                <Slide11 />
            </div>
            <DarkModeToggle />
        </>

    )
}


export default memo(AppLayout)
