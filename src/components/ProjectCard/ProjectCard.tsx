import React from 'react';
// import styles from './techCard.module.css';

interface Props {
    children: any
}

export default function ProjectCard(props: Props) {
    const { children } = props;

    return (<ul>{ children }</ul>);
}
