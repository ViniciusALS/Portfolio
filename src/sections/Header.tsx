import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import Wave from '../components/Wave';

import pirateShip from '../assets/pirate-ship.svg';

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

    const styles: { [key: string]: React.CSSProperties } = {
        headerContent: {
            marginTop: '15%',
            fontWeight: 700,
            fontSize: '56px',
            lineHeight: '56px'
        },
        ocean: {
            position: 'relative',
            width: '100vw',
            height: '100vh',
            overflowX: 'hidden'
        },
        ship: {
            position: 'absolute',
            transformOrigin: 'center bottom',
            bottom: '29vh',
            right: '20%'
        }
    };

    return (
        <div style={{ ...styles.ocean }}>
            <Wave className="wave1" waveWidth="300vw" color="#56CCF2" waveHeight="30vh"/>

            <img
                className="ship"
                style={{ ...styles.ship }}
                src={pirateShip}
                alt="ship"/>

            <Wave className="wave2" waveWidth="250vw" color="#2D9CDB" waveHeight="26vh"/>

            <Wave className="wave3" waveWidth="200vw" color="#2F80ED" waveHeight="22vh"/>

            <div className="content" style={{ ...styles.headerContent }}>
                <h1>Hi,</h1>
                <h1>I am Vinnie</h1>
            </div>
        </div>
    );
}

export default Header;
