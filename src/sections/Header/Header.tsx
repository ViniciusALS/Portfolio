import React from 'react';

import styles from './header.module.css';

import Content from '../../components/Content/Content';
import Ocean from '../../components/Ocean/Ocean';
import Wave from '../../components/Wave/Wave';
import PirateShip from '../../components/PirateShip/PirateShip';

function Header() {
    return (
        <Ocean>
            <Wave className={`wave1 ${styles.wave1}`} waveSpeed={20} waveName=".wave1"/>

            <PirateShip className="ship"/>

            <Wave className={`wave2 ${styles.wave2}`} waveSpeed={20} waveName=".wave2"/>

            <Wave className={`wave3 ${styles.wave3}`} waveSpeed={20} waveName=".wave3"/>

            <Content className={styles.headerContent}>
                <h1>Hi,</h1>
                <h1>I am Vinnie</h1>
            </Content>
        </Ocean>
    );
}

export default Header;
