import React from 'react';
import styles from './techCard.module.css';

interface Props {
    children: any
}

export default function TechnolyCard(props: Props) {
    const { children } = props;

    return (<ul className={styles.card}>{ children }</ul>);
}
