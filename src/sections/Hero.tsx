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

            {/* <div>
                <Wave/>
                <Ship/>
                <Wave/>
                <Wave/>
            </div> */}

            <div className='flex flex-row w-full justify-evenly content'>
                <ContactButton
                    src={linkedIn}
                    alt='LinkedIn'
                    text='Add me on LinkedIn'/>

                <ContactButton
                    src={twitter}
                    alt='Twitter'
                    text='Follow me on Twitter'/>

                <ContactButton
                    src={resume}
                    alt='Resume'
                    text='Download my resume'/>
            </div>

        </section>
    );
}