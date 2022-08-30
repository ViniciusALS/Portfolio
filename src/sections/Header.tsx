import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import Wave from '../components/Wave';

import pirateShip from '../assets/pirate-ship.svg';
import wave1 from '../assets/wave1.svg';
import wave2 from '../assets/wave2.svg';
import wave3 from '../assets/wave3.svg';

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
        wave1: {
            bottom: '30vh',
            width: '300vw'
        },
        water1: {
            height: '33vh',
            backgroundColor: '#56CCF2'
        },
        wave2: {
            bottom: '26vh',
            width: '250vw'
        },
        water2: {
            height: '29vh',
            backgroundColor: '#2D9CDB'
        },
        wave3: {
            bottom: '22vh',
            width: '200vw'
        },
        water3: {
            height: '25vh',
            backgroundColor: '#2F80ED'
        },
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
            <Wave
                className="wave1"
                src={wave1}
                alt="wave"
                waveStyle={{ ...styles.wave1 }}
                waterStyle={{ ...styles.water1 }}/>

            <img
                className="ship"
                style={{ ...styles.ship }}
                src={pirateShip}
                alt="ship"/>

            <Wave
                className="wave2"
                src={wave2}
                alt="wave"
                waveStyle={{ ...styles.wave2 }}
                waterStyle={{ ...styles.water2 }}/>

            <Wave
                className="wave3"
                src={wave3}
                alt="wave"
                waveStyle={{ ...styles.wave3 }}
                waterStyle={{ ...styles.water3 }}/>

            <div className="content" style={{ ...styles.headerContent }}>
                <h1>Hi,</h1>
                <h1>I am Vinnie</h1>
            </div>
        </div>
    );
}

export default Header;
