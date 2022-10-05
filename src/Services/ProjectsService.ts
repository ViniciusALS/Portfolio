import axios from 'axios';

import IResponse from '../types/IResponse';
import IProject from '../types/IProject';

const apiClient = axios.create({
    baseURL: import.meta.env.REACT_APP_API_URL,
    headers: {
        'Content-type': 'application/json'
    }
});

class ProjectsService {
    static async findAll() {
        try {
            const response = await apiClient.get<IResponse<IProject[]>>(
                '/projects/?populate[technologies][populate][0]=Logo&populate=Cover'
            );
            return response.data.data;
        }
        catch (error) {
            return [];
        }
    }

    static async findByID(id: Number) {
        const response = await apiClient.get<IResponse<IProject>>(
            `/projects/${id}?populate[technologies][populate][0]=Logo&populate=Cover`
        );
        return response.data.data;
    }
}

export default ProjectsService;