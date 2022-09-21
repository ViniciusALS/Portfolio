import React, { useEffect } from 'react';

import styles from './header.module.css';

import Content from '../../components/Content/Content';
import Ocean from '../../components/Ocean/Ocean';
import Wave from '../../components/Wave/Wave';
import PirateShip from '../../components/PirateShip/PirateShip';

import SvgAnimation from '../../utilities/SvgAnimation';

function Header() {
    useEffect(() => {
        SvgAnimation.moveWave('.wave1', 20);
        SvgAnimation.moveWave('.wave2', 25);
        SvgAnimation.moveWave('.wave3', 30);

        SvgAnimation.shipEnterScreen('.ship');
        SvgAnimation.rockShip('.ship');
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
