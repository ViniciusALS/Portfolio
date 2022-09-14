// TODO: break into smaller interfaces
// TODO: rename types to modules
interface IProject {
    id: number,
    attributes: {
        Title: string,
        Content: string,
        Description: string,
        technologies: {
            data: {
                id: number,
                attributes: {
                    Name: string,
                    Logo: {
                        data: {
                            id: number,
                            attributes: {
                                name: string,
                                width: number,
                                height: number,
                                url: string
                            }
                        }
                    }
                }
            }[]
        },
        Cover: {
            data: {
                id: number,
                attributes: {
                    name: string,
                    url: string
                }
            }
        }
    }
}

export default IProject;
