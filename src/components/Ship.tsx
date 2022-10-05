import { ship } from '../assets';

export default function Ship() {
    return(
        <img
            src={ship}
            alt=''
            className='absolute right-0 left-0 ss:left-auto bottom-[23vh] h-[18rem] ss:h-[20rem] md:h-[22rem] lg:h-[25rem] px-0 ss:px-[10%] md:px-[15%] lg:px-[20%] mx-auto ss:mx-0'/>
    );
}