import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import './header.css';

import Waves from '../../components/Waves';

import pirateShip from '../../assets/pirate-ship.svg';
import wave1 from '../../assets/wave1.svg';
import wave2 from '../../assets/wave2.svg';
import wave3 from '../../assets/wave3.svg';

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

        gsap.fromTo('.header-content', {
            x: -500
        }, {
            x: 0,
            duration: 1,
            ease: 'power1'
        });
    });

    const styles = {
        wave1: {
            bottom: '30vh',
            width: '300vw'
        },
        water1: {
            height: '33vh',
            backgroundColor: '#56CCF2'
        }
    } as const;

    return (
        <div className="ocean">
            {/* <img className="wave wave1" src={wave1} alt="wave"/>
            <div className="water1"/> */}
            <Waves
                className="wave1"
                src={wave1}
                alt="wave"
                waveStyle={{ ...styles.wave1 }}
                waterStyle={{ ...styles.water1 }}/>

            <img className="ship" src={pirateShip} alt="ship"/>

            <img className="wave wave2" src={wave2} alt="wave"/>
            <div className="water2"/>

            <img className="wave wave3" src={wave3} alt="wave"/>
            <div className="water3"/>

            <div className="header-content content">
                <h1>Hi,</h1>
                <h1>I am Vinnie</h1>
            </div>
        </div>
    );
}

export default Header;
