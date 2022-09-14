import React from 'react';
import styles from './wave.module.css';

interface Props {
    className: string
}

export default function Wave(props: Props) {
    const { className } = props;
    // TODO: try finding a better way to display svg
    return (
        <svg
            className={`${className} ${styles.wave}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 762 52.917"
            preserveAspectRatio="none">

            <path d="M0 0c22.863 0 40.637 25.93 63.5 25.93S104.137 0 127 0s40.637 25.93 63.5 25.93S231.137 0 254 0s40.637 25.93 63.5 25.93S358.137 0 381 0s40.637 25.93 63.5 25.93S485.137 0 508 0s40.637 25.93 63.5 25.93S612.137 0 635 0s40.637 25.93 63.5 25.93S739.137 0 762 0v52.917H0z"/>
        </svg>
    );
}
