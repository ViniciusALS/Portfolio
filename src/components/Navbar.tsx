import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return(
        <nav className='w-full bg-darkerBlue py-[10px] flex items-cente content fixed z-10'>
            <Link to='/'>
                <div className='w-[35px] h-[35px] xs:w-[40px] xs:h-[40px] bg-blueTwo'/>
            </Link>
        </nav>
    );
}