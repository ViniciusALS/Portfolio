interface IImage {
    id: number,
    attributes: {
        name: string,
        width: number,
        height: number,
        url: string
    }
}

export default IImage;
