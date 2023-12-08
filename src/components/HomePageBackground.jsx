import "../styling/HomePageBackground.css";
import ThreeDScene from './ThreeDScene';
import { useInView } from 'react-intersection-observer';

function HomePageBackground(){
    const [ref, inView] = useInView({
        triggerOnce: false,
        rootMargin: '-100px 0px', // Adjust this value based on when you want the animation to start
      });    
    return (
        <>
            <div className="fixed-background" ref={ref}>
                <ThreeDScene/>
            </div>
        </>
    );
}

export default HomePageBackground;