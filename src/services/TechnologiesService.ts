import axios from 'axios';

import IResponse from '../types/IResponse';
import ITechnology from '../types/ITechnology';

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-type': 'application/json'
    }
});

class TechnologiesService {
    static async findAll() {
        const response = await apiClient.get<IResponse<ITechnology[]>>(
            '/technologies?populate=Logo'
        );
        return response.data.data;
    }

    static async findByID(id: Number) {
        const response = await apiClient.get<IResponse<ITechnology>>(
            `/technologies/${id}?populate=Logo`
        );
        return response.data.data;
    }
}

export default TechnologiesService;
