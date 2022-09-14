import IResponse from './IResponse';
import ITechnologies from './ITechnologie';
import IImage from './IImage';

// TODO: rename types to modules
interface IProject {
    id: number,
    attributes: {
        Title: string,
        Content: string,
        Description: string,
        technologies: IResponse<ITechnologies>[],
        Cover: IResponse<IImage>
    }
}

export default IProject;
