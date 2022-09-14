import React, { useEffect, useState } from 'react';
import Content from '../../components/Content/Content';
import ProjectsService from '../../services/ProjectsService';
import IProjects from '../../types/IProjects';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

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

            {
                projects.map(
                    project => (
                        <ProjectCard>
                            <h3>{project.attributes.Title}</h3>
                            <div>{project.attributes.Cover.data.attributes.url}</div>
                            <div>{project.attributes.Description}</div>
                            <div>Technologies list</div>
                            <div>learn more</div>
                            <div>Github link</div>
                            <div>Live project</div>
                        </ProjectCard>
                    )
                )
            }
        </Content>
    );
}
