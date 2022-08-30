import React from 'react';

interface Props {
    children: any
}

export default function TechnolyCard(props: Props) {
    const { children } = props;
    return (<ul>{ children }</ul>);
}
