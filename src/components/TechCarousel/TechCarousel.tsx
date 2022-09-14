/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import './slick-carousel.css';

import TechCard from '../../components/TechCard/TechCard';

interface Props {
    technologies: any[] // TODO: create proper interface
}

export default function TechCarousel(props: Props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        swipeToSlide: true
    };

    const { technologies } = props;

    return (
        <div>
            <Slider {...settings}>
                {
                    technologies.map(
                        tech => <TechCard>{tech.attributes.Name}</TechCard>
                    )
                }
            </Slider>
        </div>
    );
}
