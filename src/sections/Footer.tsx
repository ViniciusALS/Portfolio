import React from 'react';
import {linkedIn, twitter, email} from '../assets';

export default function Footer() {
    return(
        <section className='content bg-darkBlue mt-12 py-12 flex flex-col gap-3'>
            <a
                href='https://www.linkedin.com/in/viniciusalsouza/'
                target='_blank'
                className='flex flex-row items-center'>

                <img className='h-[1.4em] pr-2' src={linkedIn} alt="Vinicius' linkedin"/>
                <h3 className='text-nearWhite font-poppins'>/viniciusalsouza</h3>
            </a>

            <a
                href='https://twitter.com/Vinnie_als'
                target='_blank'
                className='flex flex-row items-center'>

                <img className='h-[1.4em] pr-2' src={twitter} alt="Vinicius' twitter"/>
                <h3 className='text-nearWhite font-poppins'>@vinnie_als</h3>
            </a>

            <span
                className='flex flex-row items-center'>

                <img className='h-[1.4em] pr-2' src={email} alt="Vinicius' email"/>
                <h3 className='text-nearWhite font-poppins'>contact@viniciusals.com</h3>
            </span>
        </section>
    );
}