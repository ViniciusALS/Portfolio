import React from 'react';
import ITechnology from '../types/ITechnology';

interface Props {
    technology: ITechnology
}

export default function TechCard(props: Props) {

    const techImgURL = props.technology.attributes.Logo?.data.attributes.url;
    const imgURL = 'http://localhost:1337' + techImgURL;

    return (
        <div className='flex flex-row items-center px-4'>
            <img src={imgURL} alt='' className='h-8 px-2'/>
            <h3>{props.technology.attributes.Name}</h3>
        </div>
    );
}