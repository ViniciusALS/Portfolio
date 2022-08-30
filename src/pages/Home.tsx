import React from 'react';
import Header from '../components/Header/Header';
import About from '../components/about/About';
import TechnologiesSection from '../components/TechnologiesSection/TechnologiesSection';

function Home() {
    return (
        <>
            <Header/>
            <About/>
            <TechnologiesSection/>
        </>
    );
}

export default Home;
