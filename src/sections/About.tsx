import React from 'react';

export default function About() {
    return(
        <section className='content flex flex-row justify-center w-full text-center font-roboto font-bold leading-relaxed text-xl sm:leading-loose sm:text-2xl lg:text-3xl lg:leading-loose my-12'>
            <h3>
                I am focused in learning <br className='md:hidden'/><span className='text-highlightPink'>new Technologies</span> <br/>
                that give me the power to <br className='md:hidden'/><span className='text-highlightGreen'>create new things</span> <br/>
                and allow me to solve <br className='md:hidden'/><span className='text-blueOne'>new problems</span>
            </h3>
        </section>
    );
}