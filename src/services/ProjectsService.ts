import axios from 'axios';

import IResponse from '../types/IResponse';
import IProject from '../types/IProject';

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-type': 'application/json'
    }
});

class ProjectsService {
    static async findAll() {
        const response = await apiClient.get<IResponse<IProject[]>>(
            '/projects/?populate[technologies][populate][0]=Logo&populate=Cover'
        );
        return response.data.data;
    }

    static async findByID(id: Number) {
        const response = await apiClient.get<IResponse<IProject>>(
            `/projects/${id}?populate[technologies][populate][0]=Logo&populate=Cover`
        );
        return response.data.data;
    }
}

export default ProjectsService;
