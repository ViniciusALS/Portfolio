import React from 'react';
import ITechnology from '../../types/ITechnology';
import styles from './techCard.module.css';

interface Props {
    technology: ITechnology
}

export default function TechCard(props: Props) {
    const { technology } = props;

    const techImgURL = technology.attributes.Logo?.data.attributes.url;
    const imgURL = process.env.REACT_APP_IMG_URL_PREFIX! + techImgURL;

    return (
        <ul className={styles.card}>
            <img src={imgURL} alt=""/>
            <h3>{technology.attributes.Name}</h3>
        </ul>
    );
}
