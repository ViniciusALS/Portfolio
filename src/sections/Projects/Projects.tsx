import React, { useEffect, useState } from 'react';
import Content from '../../components/Content/Content';
import ProjectsService from '../../services/ProjectsService';
import IProjects from '../../types/IProjects';

export default function Projects() {
    const [projects, setProjects] = useState<IProjects[]>([]);

    useEffect(() => {
        ProjectsService.findAll()
            .then(response => setProjects(response))
            .catch(); // TODO: handle response error
    });

    return (
        <Content>
            <h2>Projects</h2>

            <div>
                <h3>Project Title</h3>
                <div>Image</div>
                <div>Project description</div>
                <div>Technologies list</div>
                <div>learn more</div>
                <div>Github link</div>
                <div>Live project</div>
            </div>
        </Content>
    );
}
