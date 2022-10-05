import { wave } from '../assets';

interface Props {
    className: any,
    waveSpeed: gsap.TweenValue
}

export default function Wave() {
    return(
        <div className={`${props.className} absolute bottom-0`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 762 52.917"
                preserveAspectRatio="none"
                className='w-full relative top-1'>

                <path d="M0 0c22.863 0 40.637 25.93 63.5 25.93S104.137 0 127 0s40.637 25.93 63.5 25.93S231.137 0 254 0s40.637 25.93 63.5 25.93S358.137 0 381 0s40.637 25.93 63.5 25.93S485.137 0 508 0s40.637 25.93 63.5 25.93S612.137 0 635 0s40.637 25.93 63.5 25.93S739.137 0 762 0v52.917H0z"/>
            </svg>
            <div className='w-full'/>
        </div>
    );
}