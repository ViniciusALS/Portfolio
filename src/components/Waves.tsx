import React from 'react';

interface Props {
    src: string,
    alt: string,
    className: string,
    waveStyle: any,
    waterStyle: any
}

export default function Waves(props: Props) {
    const { src } = props;
    const { alt } = props;
    const { waveStyle } = props;
    const { waterStyle } = props;
    const { className } = props;

    const styles = {
        wave: {
            position: 'absolute',
            left: 0,
            height: '9vh'
        },
        water: {
            content: '',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%'
        }
    } as const;

    return (
        <>
            <img
                className={className}
                style={{ ...styles.wave, ...waveStyle }}
                src={src}
                alt={alt}/>

            <div style={{ ...styles.water, ...waterStyle }}/>
        </>
    );
}
