import React, { useEffect, useState } from 'react';
import Content from '../../components/Content/Content';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectsService from '../../services/ProjectsService';
import IProject from '../../types/IProject';

export default function Projects() {
    const [projects, setProjects] = useState<IProject[]>([]);

    useEffect(() => {
        ProjectsService.findAll()
            .then(response => setProjects(response));
    }, []);

    return (
        <Content>
            <h2>Projects</h2>

            {
                projects.map(
                    project => <ProjectCard key={project.id} project={project}/>
                )
            }
        </Content>
    );
}
