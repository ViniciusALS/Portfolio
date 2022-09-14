import axios from 'axios';

import IResponse from '../types/IResponse';
import IProject from '../types/IProject';

const apiClient = axios.create({
    baseURL: 'http://localhost:1337/api/',
    headers: {
        'Content-type': 'application/json'
    }
});

const findAll = async () => {
    const response = await apiClient.get<IResponse<IProject[]>>(
        '/projects/?populate[technologies][populate][0]=Logo&populate=Cover'
    );
    return response.data.data;
};

const findByID = async (id: any) => {
    const response = await apiClient.get<IResponse<IProject>>(
        `/projects/${id}?populate[technologies][populate][0]=Logo&populate=Cover`
    );
    return response.data.data;
};

// TODO: Refactor code as class
const ProjectsService = {
    findAll,
    findByID
};

export default ProjectsService;
