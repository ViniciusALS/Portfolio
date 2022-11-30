import React from 'react';
import { Hero, Technologies, About, Projects, Footer } from '../sections';
import { Navbar } from '../components';

export default function Home() {
    return(
        <>
            <Navbar/>

            <Hero/>
            <Technologies/>
            <About/>
            <Projects/>
            <Footer/>
        </>
    );
}