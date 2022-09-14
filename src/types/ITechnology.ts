import IResponse from './IResponse';
import IImage from './IImage';

interface ITechnologies {
    id: number,
    attributes: {
        Name: string,
        Logo?: IResponse<IImage>
    }
}

export default ITechnologies;
