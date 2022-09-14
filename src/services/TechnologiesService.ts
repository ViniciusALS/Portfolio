import axios from 'axios';

import IResponse from '../types/IResponse';
import ITechnologies from '../types/ITechnologie';

const apiClient = axios.create({
    baseURL: 'http://localhost:1337/api/',
    headers: {
        'Content-type': 'application/json'
    }
});

const findAll = async () => {
    const response = await apiClient.get<IResponse<ITechnologies[]>>('/technologies');
    return response.data.data;
};

const findByID = async (id: any) => {
    const response = await apiClient.get<IResponse<ITechnologies>>(`/technologies/${id}`);
    return response.data.data;
};

const TechnologiesService = {
    findAll,
    findByID
};

export default TechnologiesService;
