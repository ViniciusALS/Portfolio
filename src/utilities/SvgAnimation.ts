import { gsap } from 'gsap';

class SvgAnimation {
    static moveWave(objName: string, speed: gsap.TweenValue):void {
        gsap.to(objName, {
            duration: speed,
            repeat: -1,
            transform: 'translate(-50%, 0)'
        });
    }

    static shipEnterScreen(objName: string): void {
        gsap.fromTo(objName, { x: 1000 }, {
            x: 0,
            duration: 2,
            ease: 'power1'
        });
    }

    static rockShip(objName: string): void {
        gsap.fromTo(objName, {
            transform: 'translate(50%, 0%) rotate(-5deg)'
        }, {
            duration: 3,
            repeat: -1,
            transform: 'translate(50%, 0%) rotate(4deg)',
            ease: 'power1.out',
            yoyo: true,
            yoyoEase: true
        });
    }
}

export default SvgAnimation;
