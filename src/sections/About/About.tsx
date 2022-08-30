import React from 'react';
import axios from 'axios';

interface Props {}

interface SocialMedia {
    id: Number,
    URL: String,
    Hypertext?: String,
    IsLink: Boolean
}

interface State {
    aboutMeText: String[],
    socialMedias: SocialMedia[]
}

export default class About extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            aboutMeText: [],
            socialMedias: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:1337/api/home-page-about?populate=SocialMedia')
            .then(response => {
                const data = response.data.data.attributes;
                const aboutMeText: String[] = data.body.split('\n');
                const socialMedias: SocialMedia[] = data.SocialMedia;

                this.setState({
                    aboutMeText,
                    socialMedias
                });
            })
            .catch(error => {
                // eslint-disable-next-line no-console
                console.log(error);
            });
    }

    render() {
        const { aboutMeText, socialMedias } = this.state;
        const aboutMeParagraph = aboutMeText.map(paragraph => <p>{ paragraph }</p>);

        return (
            <div className="about-section content">
                <h2>About me</h2>

                { aboutMeParagraph }
            </div>
        );
    }
}
