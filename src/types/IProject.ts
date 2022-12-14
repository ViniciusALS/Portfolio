import IResponse from './IResponse';
import ITechnology from './ITechnology';
import IImage from './IImage';

interface IProject {
    id: number,
    attributes: {
        Title: string,
        Content: string,
        Description: string,
        technologies: IResponse<ITechnology>[],
        Cover: IResponse<IImage>
    }
}

export default IProject;
