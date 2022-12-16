import React, { useEffect, useState } from 'react';
import { Navbar } from '../components';
import { Footer } from '../sections';
import { useLocation } from 'react-router-dom';
import ProjectsService from '../Services/ProjectsService';
import IProject from '../types/IProject';

export default function Project() {

    const [project, setProject] = useState<any>();

    const path = useLocation().pathname;
    const slug = path.split('/')[2];

    useEffect(() => {
        ProjectsService.findBySlug(slug)
            .then(response => setProject(response));
    }, []);

    // const title = project?.attributes.Title;

    console.log(project[0].attributes);

    return(
        <>
            <Navbar/>
            <div className='h-[80vh]'>
                {/* <h1 className='pt-[100px]'>{title}</h1> */}
            </div>
            <Footer/>
        </>
    );
}