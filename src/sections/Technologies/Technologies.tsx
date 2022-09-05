import React, { useEffect, useState } from 'react';

import TechnologiesService from '../../services/TechnologiesService';

import Content from '../../components/Content/Content';
import TechCard from '../../components/TechCard/TechCard';

import ITechnologies from '../../types/ITechnologies';

export default function Technologies() {
    const [technologies, setTechnologies] = useState<ITechnologies[]>([]);

    useEffect(() => {
        TechnologiesService.findAll()
            .then(response => setTechnologies(response))
            .catch();
    });

    return (
        <Content className="TechnologiesSection">
            <h2>Technologies</h2>

            <p>Over the course of my studies I have used many different technologies on my projects. You can check the things I have build with them bellow.</p>

            <li>
                {
                    technologies.map(
                        tech => <TechCard>{tech.attributes.Name}</TechCard>
                    )
                }
            </li>
        </Content>
    );
}
