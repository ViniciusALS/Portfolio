import React from 'react';

interface Props {
    children: any
}

export default function TechnolyCard(props: Props) {
    const { children } = props;

    const styles: { [key: string]: React.CSSProperties } = {
        ul: {
            display: 'inline-block',
            padding: '1em',
            width: '100px',
            height: '100px',
            border: '1px white dotted',
            margin: '1em',
            textAlign: 'justify'
        }
    };

    return (<ul style={styles.ul}>{ children }</ul>);
}
