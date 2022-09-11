import axios from 'axios';

import IResponse from '../types/IResponse';
import IProjects from '../types/IProjects';

const apiClient = axios.create({
    baseURL: 'http://localhost:1337/api/',
    headers: {
        'Content-type': 'application/json'
    }
});

const findAll = async () => {
    const response = await apiClient.get<IResponse<IProjects[]>>('/projects');
    return response.data.data;
};

const findByID = async (id: any) => {
    const response = await apiClient.get<IResponse<IProjects>>(`/projects/${id}`);
    return response.data.data;
};

const TechnologiesService = {
    findAll,
    findByID
};

export default TechnologiesService;
