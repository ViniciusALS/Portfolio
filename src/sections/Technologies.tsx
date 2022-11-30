import React, { useEffect, useState } from 'react';
import { TechCarousel } from '../components';
import TechnologiesService from '../Services/TechnologiesService';
import ITechnology from '../types/ITechnology';

export default function Technologies() {
    const [technologies, setTechnologies] = useState<ITechnology[]>([]);

    useEffect(() => {
        TechnologiesService.findAll()
            .then(response => setTechnologies(response));
    }, []);

    return (
        <section>
            <TechCarousel technologies={technologies}/>
        </section>
    );
};
