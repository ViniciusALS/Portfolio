import React, { useEffect, useRef } from 'react';
import SvgAnimation from '../../utilities/SvgAnimation';
import styles from './pirateShip.module.css';

export default function Wave() {
    const elementRef = useRef<any>();

    useEffect(() => {
        SvgAnimation.shipEnterScreen(elementRef.current);
        SvgAnimation.rockShip(elementRef.current);
    });

    return (
        <svg ref={elementRef} className={styles.ship} width="465" height="424" viewBox="0 0 465 424" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M164.7 420.4H368.3C424 399.5 449.1 358.5 449.1 305.4C449.1 302.1 448.9 298.7 448.7 295.4C420.8 299.9 391.5 302.5 361.2 303C353 330.6 327.4 350.6 297.1 350.6H226.1C208.3 350.6 193.9 336.3 193.9 318.6V313.4H192C174.2 313.4 159.8 298.9 159.8 281.2V265.6C133.4 261.8 109.3 255.7 87.8 247.7C84.8 258.9 83.1001 270.6 83.1001 282.6C83.0001 348.5 108.9 397.1 164.7 420.4Z" fill="#83321C"/>
            <path d="M159.7 281.1V265.5C133.3 261.7 109.2 255.6 87.7 247.6C84.7 258.8 83 270.5 83 282.5C83 286.9 83.1 291.1 83.3 295.4L177.8 310.2C167.1 304.9 159.7 293.8 159.7 281.1Z" fill="#A54125"/>
            <path d="M324.5 344.7C316.1 348.5 306.9 350.5 297.1 350.5H226.1C219.2 350.5 212.8 348.3 207.5 344.7H92.6C104.6 379.2 128.3 405.2 164.7 420.4H368.3C409.3 405 433.7 378.7 443.7 344.7H324.5Z" fill="#76220A"/>
            <path opacity="0.38" d="M149.3 265.5V282.6C149.3 302.1 165.1 319 184.6 319H186.7V323.7C186.7 343.2 202.5 358.9 222 358.9H300C333.2 358.9 361.4 336.9 370.3 306.7C397.2 306.2 423.5 304.2 448.8 300.9C448.7 299.1 448.6 297.2 448.5 295.4C420.6 299.9 391.3 302.5 361 303C352.8 330.6 327.2 350.6 296.9 350.6H225.9C208.1 350.6 193.7 336.3 193.7 318.6V313.4H191.8C174 313.4 159.6 298.9 159.6 281.2V265.6C133.2 261.8 109.1 255.7 87.6 247.7C87.2 249 86.9 250.3 86.6 251.6C106 257.5 126.9 262.3 149.3 265.5Z" fill="#EA8B98"/>
            <path d="M159.7 281.1V265.5C133.3 261.7 109.2 255.6 87.7 247.6C84.7 258.8 83 270.5 83 282.5C83 286.9 83.1 291.1 83.3 295.4L177.8 310.2C167.1 304.9 159.7 293.8 159.7 281.1Z" stroke="#282828" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path opacity="0.22" d="M143.3 288.1H115.5V315.9H143.3V288.1Z" stroke="#282828" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M398 344.7H324.4C316 348.5 306.8 350.5 297 350.5H226C219.1 350.5 212.7 348.3 207.4 344.7H164.2" stroke="#282828" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M154.8 344.7H92.6C104.6 379.2 128.3 405.2 164.7 420.4H368.3C409.3 405 433.7 378.7 443.7 344.7H407.2" stroke="#282828" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M112.7 381.8C125.6 398.2 142.9 411.2 164.7 420.4H368.3C392.8 411.2 411.3 398.1 424.5 381.8H112.7Z" fill="#641701"/>
            <g opacity="0.25">
                <path d="M448.6 295.4C443.3 296.3 437.8 297 432.4 297.7C432.5 299.9 432.6 302.2 432.6 304.4H370C370 310.9 375.3 316.1 381.7 316.1H432.3C430.1 347.8 418.3 374.7 395.4 395C382.4 406.4 365.6 410.6 348.3 410.6H189.1C175.7 410.6 162.5 408.9 151.1 401.7C109.9 375.8 90.6 331.7 90.6 274.6C90.6 273.3 91.6 266.7 92.2 263C92.4 261.6 93.8 260.7 95.1 261.1L141.1 272.3C145 273.2 149 271.6 151.1 268.2C151.3 267.8 151.5 267.6 151.5 267.4C151.9 264.3 92.5 252.4 93.1 249.4C91.3 248.8 89.5 248.1 87.8 247.5C84.8 258.7 83.1 270.4 83.1 282.4C83.1 348.5 108.9 397.1 164.7 420.4H351.9H368.3C369.9 419.8 371.5 419.2 373 418.5C373.5 418.3 374 418.1 374.5 417.9C375.6 417.5 376.6 417 377.6 416.5C378.1 416.3 378.7 416 379.2 415.8C380.2 415.3 381.2 414.9 382.1 414.4C382.6 414.2 383.1 413.9 383.6 413.7C384.7 413.1 385.8 412.6 386.9 412C387.2 411.8 387.5 411.7 387.8 411.5C389.2 410.8 390.5 410 391.8 409.2C392.2 409 392.6 408.7 393 408.5C393.9 407.9 394.9 407.4 395.8 406.8C396.3 406.5 396.8 406.2 397.2 405.9C398 405.4 398.8 404.9 399.6 404.3C400.1 404 400.5 403.7 401 403.3C401.8 402.7 402.6 402.2 403.4 401.6C403.8 401.3 404.2 401 404.6 400.7C405.7 399.8 406.9 399 407.9 398.1C408.2 397.9 408.4 397.6 408.7 397.4C409.5 396.7 410.4 396 411.2 395.3C411.6 394.9 412 394.6 412.4 394.2C413.1 393.6 413.7 393 414.3 392.4C414.7 392 415.1 391.6 415.5 391.2C416.1 390.6 416.7 390 417.3 389.4C417.7 389 418.1 388.6 418.4 388.2C419.1 387.4 419.9 386.6 420.6 385.9C439.8 364.5 448.8 337 448.8 305.2C449 302.1 448.9 298.7 448.6 295.4Z" fill="#3A121A"/>
            </g>
            <path d="M396 381.8H383.8" stroke="#282828" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M374.1 381.8H112.7C125.6 398.2 142.9 411.2 164.7 420.4H368.3C392.8 411.2 411.3 398.1 424.5 381.8H402.3" stroke="#282828" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M347.6 13.7C321.4 -1.7 295.3 25 269.1 9.49999C269.1 20.6 269.1 31.8 269.1 42.9C295.3 55.6 321.4 26.1 347.6 38.7C341.9 31.5 336.2 26.2 330.5 22.1C336.2 18 341.9 14.9 347.6 13.7Z" fill="#282828"/>
            <path opacity="0.38" d="M283.8 14.3C278.9 13.8 274 12.4 269.2 9.5C269.2 20.6 269.2 31.8 269.2 42.9C274.1 45.3 279 46.2 283.8 46.1V14.3Z" fill="#3D3D3D"/>
            <path d="M269.1 3.09998V350.5" stroke="#282828" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M324.6 329.4C287.6 329.4 250.7 329.4 213.7 329.4C199.7 294.1 199.7 254.8 213.7 219.6C250.7 219.6 287.6 219.6 324.6 219.6C310.6 254.9 310.6 294.1 324.6 329.4Z" fill="#D8D8D9"/>
            <path d="M282.5 251.2C282.5 240 280.8 229.4 277.8 219.6C256.4 219.6 235 219.6 213.7 219.6C199.7 254.9 199.7 294.2 213.7 329.4C223.5 329.4 233.4 329.4 243.2 329.4C266.3 316.1 282.5 286.1 282.5 251.2Z" fill="white"/>
            <path d="M324.6 329.4C287.6 329.4 250.7 329.4 213.7 329.4C199.7 294.1 199.7 254.8 213.7 219.6C250.7 219.6 287.6 219.6 324.6 219.6C310.6 254.9 310.6 294.1 324.6 329.4Z" stroke="#282828" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M312.5 204.3C283.6 204.3 254.7 204.3 225.8 204.3C218.3 185.5 218.3 164.5 225.8 145.7C254.7 145.7 283.6 145.7 312.5 145.7C305 164.5 305 185.5 312.5 204.3Z" fill="#D8D8D9"/>
            <path d="M282.5 158C282.5 153.8 282 149.6 281 145.7C262.6 145.7 244.2 145.7 225.9 145.7C218.4 164.5 218.4 185.5 225.9 204.3C234.3 204.3 242.6 204.3 251 204.3C269.4 196.9 282.5 179 282.5 158Z" fill="white"/>
            <path d="M312.5 204.3C283.6 204.3 254.7 204.3 225.8 204.3C218.3 185.5 218.3 164.5 225.8 145.7C254.7 145.7 283.6 145.7 312.5 145.7C305 164.5 305 185.5 312.5 204.3Z" stroke="#282828" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M299.7 130.4C280.2 130.4 260.8 130.4 241.3 130.4C236.6 118.5 236.6 105.3 241.3 93.4C260.8 93.4 280.2 93.4 299.7 93.4C295 105.3 295 118.5 299.7 130.4Z" fill="#D8D8D9"/>
            <path d="M282.5 93.4C268.8 93.4 255 93.4 241.3 93.4C236.6 105.3 236.6 118.5 241.3 130.4C246.9 130.4 252.5 130.4 258 130.4C278 127.9 287.4 108.1 282.5 93.4Z" fill="white"/>
            <path d="M299.7 130.4C280.2 130.4 260.8 130.4 241.3 130.4C236.6 118.5 236.6 105.3 241.3 93.4C260.8 93.4 280.2 93.4 299.7 93.4C295 105.3 295 118.5 299.7 130.4Z" stroke="#282828" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <g opacity="0.28">
                <path d="M215.5 396.6C220.912 396.6 225.3 392.212 225.3 386.8C225.3 381.388 220.912 377 215.5 377C210.088 377 205.7 381.388 205.7 386.8C205.7 392.212 210.088 396.6 215.5 396.6Z" fill="#FFFFF3"/>
                <path d="M215.5 396.6C220.912 396.6 225.3 392.212 225.3 386.8C225.3 381.388 220.912 377 215.5 377C210.088 377 205.7 381.388 205.7 386.8C205.7 392.212 210.088 396.6 215.5 396.6Z" stroke="#282828" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M261.4 396.6C266.812 396.6 271.2 392.212 271.2 386.8C271.2 381.388 266.812 377 261.4 377C255.988 377 251.6 381.388 251.6 386.8C251.6 392.212 255.988 396.6 261.4 396.6Z" fill="#FFFFF3"/>
                <path d="M261.4 396.6C266.812 396.6 271.2 392.212 271.2 386.8C271.2 381.388 266.812 377 261.4 377C255.988 377 251.6 381.388 251.6 386.8C251.6 392.212 255.988 396.6 261.4 396.6Z" stroke="#282828" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M307.4 396.6C312.812 396.6 317.2 392.212 317.2 386.8C317.2 381.388 312.812 377 307.4 377C301.988 377 297.6 381.388 297.6 386.8C297.6 392.212 301.988 396.6 307.4 396.6Z" fill="#FFFFF3"/>
                <path d="M307.4 396.6C312.812 396.6 317.2 392.212 317.2 386.8C317.2 381.388 312.812 377 307.4 377C301.988 377 297.6 381.388 297.6 386.8C297.6 392.212 301.988 396.6 307.4 396.6Z" stroke="#282828" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M353.4 396.6C358.812 396.6 363.2 392.212 363.2 386.8C363.2 381.388 358.812 377 353.4 377C347.988 377 343.6 381.388 343.6 386.8C343.6 392.212 347.988 396.6 353.4 396.6Z" fill="#FFFFF3"/>
                <path d="M353.4 396.6C358.812 396.6 363.2 392.212 363.2 386.8C363.2 381.388 358.812 377 353.4 377C347.988 377 343.6 381.388 343.6 386.8C343.6 392.212 347.988 396.6 353.4 396.6Z" stroke="#282828" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M169.5 396.6C174.912 396.6 179.3 392.212 179.3 386.8C179.3 381.388 174.912 377 169.5 377C164.088 377 159.7 381.388 159.7 386.8C159.7 392.212 164.088 396.6 169.5 396.6Z" fill="#FFFFF3"/>
                <path d="M169.5 396.6C174.912 396.6 179.3 392.212 179.3 386.8C179.3 381.388 174.912 377 169.5 377C164.088 377 159.7 381.388 159.7 386.8C159.7 392.212 164.088 396.6 169.5 396.6Z" stroke="#282828" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <path d="M213.5 391.6C218.912 391.6 223.3 387.212 223.3 381.8C223.3 376.388 218.912 372 213.5 372C208.088 372 203.7 376.388 203.7 381.8C203.7 387.212 208.088 391.6 213.5 391.6Z" fill="#FFFFF3"/>
            <path d="M213.5 391.6C218.912 391.6 223.3 387.212 223.3 381.8C223.3 376.388 218.912 372 213.5 372C208.088 372 203.7 376.388 203.7 381.8C203.7 387.212 208.088 391.6 213.5 391.6Z" stroke="#282828" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M259.4 391.6C264.812 391.6 269.2 387.212 269.2 381.8C269.2 376.388 264.812 372 259.4 372C253.988 372 249.6 376.388 249.6 381.8C249.6 387.212 253.988 391.6 259.4 391.6Z" fill="#FFFFF3"/>
            <path d="M259.4 391.6C264.812 391.6 269.2 387.212 269.2 381.8C269.2 376.388 264.812 372 259.4 372C253.988 372 249.6 376.388 249.6 381.8C249.6 387.212 253.988 391.6 259.4 391.6Z" stroke="#282828" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M305.4 391.6C310.812 391.6 315.2 387.212 315.2 381.8C315.2 376.388 310.812 372 305.4 372C299.988 372 295.6 376.388 295.6 381.8C295.6 387.212 299.988 391.6 305.4 391.6Z" fill="#FFFFF3"/>
            <path d="M305.4 391.6C310.812 391.6 315.2 387.212 315.2 381.8C315.2 376.388 310.812 372 305.4 372C299.988 372 295.6 376.388 295.6 381.8C295.6 387.212 299.988 391.6 305.4 391.6Z" stroke="#282828" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M351.4 391.6C356.812 391.6 361.2 387.212 361.2 381.8C361.2 376.388 356.812 372 351.4 372C345.988 372 341.6 376.388 341.6 381.8C341.6 387.212 345.988 391.6 351.4 391.6Z" fill="#FFFFF3"/>
            <path d="M351.4 391.6C356.812 391.6 361.2 387.212 361.2 381.8C361.2 376.388 356.812 372 351.4 372C345.988 372 341.6 376.388 341.6 381.8C341.6 387.212 345.988 391.6 351.4 391.6Z" stroke="#282828" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M167.5 391.6C172.912 391.6 177.3 387.212 177.3 381.8C177.3 376.388 172.912 372 167.5 372C162.088 372 157.7 376.388 157.7 381.8C157.7 387.212 162.088 391.6 167.5 391.6Z" fill="#FFFFF3"/>
            <path d="M167.5 391.6C172.912 391.6 177.3 387.212 177.3 381.8C177.3 376.388 172.912 372 167.5 372C162.088 372 157.7 376.388 157.7 381.8C157.7 387.212 162.088 391.6 167.5 391.6Z" fill="#FFFFF3"/>
            <path d="M167.5 391.6C172.912 391.6 177.3 387.212 177.3 381.8C177.3 376.388 172.912 372 167.5 372C162.088 372 157.7 376.388 157.7 381.8C157.7 387.212 162.088 391.6 167.5 391.6Z" stroke="#282828" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M402.2 331.9C407.612 331.9 412 327.512 412 322.1C412 316.688 407.612 312.3 402.2 312.3C396.788 312.3 392.4 316.688 392.4 322.1C392.4 327.512 396.788 331.9 402.2 331.9Z" fill="#FFFFF3"/>
            <path d="M402.2 331.9C407.612 331.9 412 327.512 412 322.1C412 316.688 407.612 312.3 402.2 312.3C396.788 312.3 392.4 316.688 392.4 322.1C392.4 327.512 396.788 331.9 402.2 331.9Z" stroke="#282828" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M164.7 420.4H368.3C424 399.5 449.1 358.5 449.1 305.4C449.1 302.1 448.9 298.7 448.7 295.4C420.8 299.9 391.5 302.5 361.2 303C353 330.6 327.4 350.6 297.1 350.6H226.1C208.3 350.6 193.9 336.3 193.9 318.6V313.4H192C174.2 313.4 159.8 298.9 159.8 281.2V265.6C133.4 261.8 109.3 255.7 87.8 247.7C84.8 258.9 83.1001 270.6 83.1001 282.6C83.0001 348.5 108.9 397.1 164.7 420.4Z" stroke="#282828" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M461.2 255.7H361.1V303H461.2V255.7Z" fill="#F9AA68"/>
            <path d="M361.1 255.7C361.1 260.9 365.3 265.1 370.5 265.1H449V290.8C449 297.5 454.5 303 461.2 303V255.7H361.1V255.7Z" fill="#F28D41"/>
            <path d="M461.2 255.7H361.1V303H461.2V255.7Z" stroke="#282828" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M402.2 303H385V283.1C385 278.4 388.8 274.5 393.6 274.5C398.3 274.5 402.2 278.3 402.2 283.1V303Z" fill="#894532"/>
            <path d="M437.3 303H420.1V283.1C420.1 278.4 423.9 274.5 428.7 274.5C433.4 274.5 437.3 278.3 437.3 283.1V303Z" fill="#894532"/>
            <path d="M402.2 303H385V283.1C385 278.4 388.8 274.5 393.6 274.5C398.3 274.5 402.2 278.3 402.2 283.1V303Z" stroke="#282828" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M437.3 303H420.1V283.1C420.1 278.4 423.9 274.5 428.7 274.5C433.4 274.5 437.3 278.3 437.3 283.1V303Z" stroke="#282828" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M159.7 254.8L57.2 230L54 243.6L159.7 269.1V254.8Z" fill="#F9AA68"/>
            <path d="M159.7 254.8L57.2 230L54 243.6L159.7 269.1V254.8Z" stroke="#282828" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M408.4 108.1V255.7" stroke="#383838" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M443.7 237.4C420.2 237.4 396.7 237.4 373.1 237.4C364.1 214.7 364.1 189.5 373.1 166.8C396.6 166.8 420.1 166.8 443.7 166.8C434.7 189.5 434.7 214.7 443.7 237.4Z" fill="#D8D8D9"/>
            <path d="M419.1 176.8C419.1 173.4 418.9 170 418.5 166.8C403.4 166.8 388.3 166.8 373.1 166.8C364.1 189.5 364.1 214.7 373.1 237.4C378.1 237.4 383.1 237.4 388.1 237.4C406.5 225.7 419.1 203 419.1 176.8Z" fill="white"/>
            <path d="M436.2 154.4C417.7 154.4 399.2 154.4 380.6 154.4C376 142.8 376 129.9 380.6 118.4C399.1 118.4 417.6 118.4 436.2 118.4C431.6 130 431.6 142.8 436.2 154.4Z" fill="#D8D8D9"/>
            <path d="M418.4 118.4C405.8 118.4 393.2 118.4 380.6 118.4C376 130 376 142.9 380.6 154.4C387 154.4 393.3 154.4 399.7 154.4C410.4 145.6 417.5 132.8 418.4 118.4Z" fill="white"/>
            <path d="M443.7 237.4C420.2 237.4 396.7 237.4 373.1 237.4C364.1 214.7 364.1 189.5 373.1 166.8C396.6 166.8 420.1 166.8 443.7 166.8C434.7 189.5 434.7 214.7 443.7 237.4Z" stroke="#282828" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M436.2 154.4C417.7 154.4 399.2 154.4 380.6 154.4C376 142.8 376 129.9 380.6 118.4C399.1 118.4 417.6 118.4 436.2 118.4C431.6 130 431.6 142.8 436.2 154.4Z" stroke="#282828" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M122.9 114.7V245.9" stroke="#383838" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M167.5 219.6C137.8 219.6 108 219.6 78.3 219.6C67 190.9 67 159 78.3 130.4C108 130.4 137.8 130.4 167.5 130.4C156.1 159 156.1 190.9 167.5 219.6Z" fill="#D8D8D9"/>
            <path d="M136.8 154.6C136.8 146.1 135 137.9 131.9 130.4C114 130.4 96.2 130.4 78.3 130.4C67 159.1 67 191 78.3 219.6C80.5 219.6 82.7 219.6 84.9 219.6C115.1 210.3 136.8 184.7 136.8 154.6Z" fill="white"/>
            <path d="M167.5 219.6C137.8 219.6 108 219.6 78.3 219.6C67 190.9 67 159 78.3 130.4C108 130.4 137.8 130.4 167.5 130.4C156.1 159 156.1 190.9 167.5 219.6Z" stroke="#282828" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M54 235.8L3.40002 220.4" stroke="#282828" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M139.6 283.1H111.8V310.9H139.6V283.1Z" fill="#894532"/>
            <path d="M139.6 283.1H111.8V310.9H139.6V283.1Z" stroke="#282828" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.2001 225.8C21.2001 225.8 112.6 162.1 122.9 118.4C164.1 118.4 266.3 85.2 267.7 64.1C276.4 86 319.3 124.7 408.4 108" stroke="#383838" strokeMiterlimit="10"/>
            <path d="M278.1 55.2H257.4V72.9999H278.1V55.2Z" fill="#F9AA68"/>
            <path d="M278.1 55.2H257.4V72.9999H278.1V55.2Z" stroke="#282828" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}
