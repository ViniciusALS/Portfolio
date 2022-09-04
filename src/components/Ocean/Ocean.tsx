import React from 'react';
import styles from './ocean.module.css';

interface Props {
    children: any
}

export default function Ocean(props: Props) {
    const { children } = props;

    return (
        <div className={styles.ocean}>
            { children }
        </div>
    );
}
