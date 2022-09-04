import React from 'react';
import styles from './content.module.css';

interface Props {
    className: string,
    children: any
}

export default function Content(props: Props) {
    const { className } = props;
    const { children } = props;

    return (
        <div className={`${className} ${styles.content}`}>
            { children }
        </div>
    );
}
