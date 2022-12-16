import React from 'react';
import ITechnology from '../types/ITechnology';

interface Props {
    technology: ITechnology
}

export default function TechSkill(props: Props) {

    const techName = props.technology.attributes.Name;
    const techColor = props.technology.attributes.Color

    return (
        <li className='flex flex-row items-center mr-3'>
            <div className={`w-2 h-2 rounded-full`} style={{backgroundColor: techColor}}/>
            <p className='ml-1'>{techName}</p>
        </li>
    );
}