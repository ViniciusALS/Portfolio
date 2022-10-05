import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { ship } from '../assets';

export default function Ship() {
    const elementRef = useRef<any>();

    useEffect(() => {
        gsap.fromTo(elementRef.current, { x: 1000 }, {
            x: 0,
            duration: 2,
            ease: 'power1'
        });

        gsap.fromTo(elementRef.current, {
            transform: 'translate(50%, 0%) rotate(-5deg)'
        }, {
            duration: 3,
            repeat: -1,
            transform: 'translate(50%, 0%) rotate(4deg)',
            ease: 'power1.out',
            yoyo: true,
            yoyoEase: true
        });
    });

    return(
        <img
            ref={elementRef}
            src={ship}
            alt=''
            className='absolute right-0 left-0 ss:left-auto bottom-[23vh] h-[18rem] ss:h-[20rem] md:h-[22rem] lg:h-[25rem] px-0 ss:px-[10%] md:px-[15%] lg:px-[20%] mx-auto ss:mx-0'/>
    );
}