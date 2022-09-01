import React from 'react';

interface Props {
    src: string,
    className: string,
    style: any
}

export default function Wave(props: Props) {
    const { src } = props;
    const { style } = props;
    const { className } = props;

    const componentStyles: { [key: string]: React.CSSProperties } = {
        wave: {
            position: 'absolute',
            left: 0,
            bottom: 0,
            height: '9vh'
        }
    };

    return (
        <img
            className={className}
            style={{ ...componentStyles.wave, ...style }}
            src={src}
            alt=""/>
    );
}
