import React from 'react';
import Slider from 'react-slick';
import '../styles/slick-carousel.css';
import ITechnology from '../types/ITechnology';
import TechCard from './TechCard';

interface Props {
    technologies: ITechnology[]
}

export default function TechCarousel(props: Props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 12,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        swipeToSlide: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 8,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                }
            },
        ]
    };

    return (
        <Slider {...settings} className='pt-5 pb-12'>
            {
                props.technologies.map(
                    tech => <TechCard key={tech.id} technology={tech}/>
                )
            }
        </Slider>
    );
}