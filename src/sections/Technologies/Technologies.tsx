import React, { useEffect, useState } from 'react';

import TechnologiesService from '../../services/TechnologiesService';

import Content from '../../components/Content/Content';
import TechCarousel from '../../components/TechCarousel/TechCarousel';

import ITechnology from '../../types/ITechnology';

export default function Technologies() {
    const [technologies, setTechnologies] = useState<ITechnology[]>([]);

    useEffect(() => {
        TechnologiesService.findAll()
            .then(response => setTechnologies(response));
    }, []);

    return (
        <Content className="TechnologiesSection">
            <h2>Technologies</h2>

            <p>Over the course of my studies I have used many different technologies on my projects. You can check the things I have build with them bellow.</p>

            <TechCarousel technologies={technologies}/>
        </Content>
    );
}
