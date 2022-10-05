import React from 'react';
import {linkedIn, twitter, resume} from '../assets';
import { Ship, Wave, ContactButton } from '../components';

export default function Hero() {
    return(
        <section className='w-[100vw] h-[100vh] bg-darkBlue'>
            <h1 className='flex flex-col font-roboto font-bold text-5xl text-nearWhite content pt-[20vh]'>
                <span>Hi,</span>
                <span>I am Vinicius</span>
            </h1>

            <Wave className='wave3' waveSpeed={50}/>
            <Ship />
            <Wave className='wave2' waveSpeed={45}/>
            <Wave className='wave1' waveSpeed={40}/>

        </section>
    );
}