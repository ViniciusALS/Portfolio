import IResponse from './IResponse';
import ITechnology from './ITechnology';
import IImage from './IImage';

interface IProject {
    id: number,
    attributes: {
        Title: string,
        Content: string,
        Description: string,
        LiveProject: string,
        SourceCode: string,
        Technologies: IResponse<ITechnology[]>,
        Cover: IResponse<IImage>,
        slug: string
    }
}

export default IProject;