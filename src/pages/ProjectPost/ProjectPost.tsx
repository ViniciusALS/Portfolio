import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectPost() {
    const { id } = useParams();

    return (
        <div>
            {id}
        </div>
    );
}

export default ProjectPost;
