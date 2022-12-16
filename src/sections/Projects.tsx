import React, { useEffect, useState } from 'react';
import { ProjectCard } from '../components';
import ProjectsService from '../Services/ProjectsService';
import IProject from '../types/IProject';

export default function Projects() {
    const [projects, setProjects] = useState<IProject[]>([]);

    useEffect(() => {
        ProjectsService.findAll()
            .then(response => setProjects(response));
    }, []);

    return(
        <section>
            <h1 className='pt-12 font-roboto uppercase text-2xl flex items-center justify-center pb-6 after:h-[2px] after:bg-black after:flex-1 before:flex-1 before:h-[2px] before:bg-black after:ml-5 before:mr-5 content'>Projects</h1>

            {
                projects.map(project =>
                    <ProjectCard key={project.id} project={project}/>
                )
            }
        </section>

    );
};
