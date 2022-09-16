import React from 'react';
import IProject from '../../types/IProject';
import styles from './projectCard.module.css';

interface Props {
    project: IProject
}

export default function ProjectCard(props: Props) {
    const { project } = props;

    return (
        <div className={styles.techCard}>
            <h3>{project.attributes.Title}</h3>
            <div>{project.attributes.Cover.data.attributes.url}</div>
            <div>{project.attributes.Description}</div>
            <div>Technologies list</div>
            <div>learn more</div>
            <div>Github link</div>
            <div>Live project</div>
        </div>
    );
}
