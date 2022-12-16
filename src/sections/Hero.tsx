import React from 'react';
import {linkedIn, twitter, resume} from '../assets';
import { Ship, Wave } from '../components';
import '../styles/hero.css';

export default function Hero() {
    return(
        <section className='w-[100vw] h-[100vh] bg-darkBlue relative overflow-hidden flex'>
            <h1 className='flex flex-col font-roboto font-bold text-4xl ss:text-5xl md:text-6xl absolute top-[22vh] ss:top-[30vh] px-[10%] md:px-[15%] lg:px-[20%]'>
                <span className='text-nearWhite'>Hi,</span>
                <span className='text-nearWhite'>I am Vinicius</span>
            </h1>

            <Wave className='wave3' waveSpeed={50}/>
            <Ship />
            <Wave className='wave2' waveSpeed={45}/>
            <Wave className='wave1' waveSpeed={40}/>

        </section>
    );
}