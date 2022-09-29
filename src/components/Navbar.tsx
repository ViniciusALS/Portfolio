import React from 'react';
import { shipIcon } from '../assets';

// TODO: Make link go to home page if on another page
export default function Navbar() {
    return(
        <nav className='w-full bg-darkerBlue py-[10px] flex items-cente content fixed z-10'>
            <a href='#'>
                <div className='w-[35px] h-[35px] xs:w-[40px] xs:h-[40px] bg-blueTwo'/>
            </a>
        </nav>
    );
}