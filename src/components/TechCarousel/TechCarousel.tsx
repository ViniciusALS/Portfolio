/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import './slick-carousel.css';

import TechCard from '../../components/TechCard/TechCard';
import ITechnology from '../../types/ITechnology';

interface Props {
    technologies: ITechnology[]
}

export default function TechCarousel(props: Props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        swipeToSlide: true
    };

    const { technologies } = props;

    return (
        <div>
            <Slider {...settings}>
                {
                    technologies.map(
                        tech => {
                            const techImgURL = tech.attributes.Logo?.data.attributes.url;
                            const imgURL = process.env.REACT_APP_IMG_URL_PREFIX! + techImgURL;
                            return (
                                <TechCard key={tech.id}>
                                    <img src={imgURL} alt=""/>
                                    <h3>{tech.attributes.Name}</h3>
                                </TechCard>
                            );
                        }
                    )
                }
            </Slider>
        </div>
    );
}
