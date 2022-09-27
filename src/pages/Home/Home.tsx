import React from 'react';
import Header from '../../sections/Header/Header';
import About from '../../sections/About/About';
import Technologies from '../../sections/Technologies/Technologies';
import Projects from '../../sections/Projects/Projects';

function Home() {
    return (
        <>
            <Header/>
            <About/>
            <Technologies/>
            <Projects/>
        </>
    );
}

export default Home;
