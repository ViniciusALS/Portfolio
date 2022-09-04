import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import styles from './header.module.css';

import Content from '../../components/Content/Content';
import Ocean from '../../components/Ocean/Ocean';
import Wave from '../../components/Wave/Wave';
import PirateShip from '../../components/PirateShip/PirateShip';

function Header() {
    useEffect(() => {
        gsap.to('.wave1', {
            duration: 20,
            repeat: -1,
            transform: 'translate(-50%, 0)'
        });

        gsap.to('.wave2', {
            duration: 25,
            repeat: -1,
            transform: 'translate(-50%, 0)'
        });

        gsap.to('.wave3', {
            duration: 30,
            repeat: -1,
            transform: 'translate(-50%, 0%)'
        });

        gsap.fromTo('.ship', { x: 1000 }, {
            x: 0,
            duration: 2,
            ease: 'power1'
        });

        gsap.fromTo('.ship', {
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

    return (
        <Ocean>
            <Wave className={`wave1 ${styles.wave1}`}/>

            <PirateShip className="ship"/>

            <Wave className={`wave2 ${styles.wave2}`}/>

            <Wave className={`wave3 ${styles.wave3}`}/>

            <Content className={styles.headerContent}>
                <h1>Hi,</h1>
                <h1>I am Vinnie</h1>
            </Content>
        </Ocean>
    );
}

export default Header;
