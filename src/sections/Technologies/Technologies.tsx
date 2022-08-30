import React from 'react';
import axios from 'axios';
import './technologies.css';
import TechCard from '../../components/TechCard/TechCard';

interface Props {}

interface State {
    technologiesText: String[],
    technologies: any[]
}

export default class Technologies extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            technologiesText: [],
            technologies: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:1337/api/home-page-technology')
            .then(response => {
                const technologiesText = response.data.data.attributes.body.split('\n');

                this.setState({ technologiesText });
            })
            .catch(error => {
                // eslint-disable-next-line no-console
                console.log(error);
            });
        axios.get('http://localhost:1337/api/technologies?populate=Logo')
            .then(response => {
                const technologies = response.data.data;
                this.setState({ technologies });
            })
            .catch();
    }

    render() {
        const { technologiesText } = this.state;
        const technologiesParagraphs = technologiesText.map(paragraph => <p>{ paragraph }</p>);

        const { technologies } = this.state;
        const technologiesList = technologies.map(
            tech => <TechCard>{tech.attributes.Name}</TechCard>
        );

        return (
            <div className="TechnologiesSection">
                <h2>Technologies</h2>

                { technologiesParagraphs }

                <li>
                    {technologiesList}
                </li>
            </div>
        );
    }
}
