import React from 'react';
import IProject from '../../types/IProject';
import styles from './projectCard.module.css';

interface Props {
    project: IProject
}

export default function ProjectCard(props: Props) {
    const { project } = props;

    const coverImgURL = project.attributes.Cover.data.attributes.url;
    const coverImgAltText = project.attributes.Cover.data.attributes.name;
    const imgURL = process.env.REACT_APP_IMG_URL_PREFIX! + coverImgURL;

    return (
        <div className={styles.card}>
            <h3>{project.attributes.Title}</h3>
            <img src={imgURL} alt={coverImgAltText}/>
            <div>{project.attributes.Description}</div>
            <div>learn more</div>
            <div>Github link</div>
            <div>Live project</div>
        </div>
    );
}
