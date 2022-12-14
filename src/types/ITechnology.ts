import IResponse from './IResponse';
import IImage from './IImage';

interface ITechnology {
    id: number,
    attributes: {
        Name: string,
        Logo?: IResponse<IImage>
    }
}

export default ITechnology;
