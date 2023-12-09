import "../styling/HomePageBackground.css";
import ThreeDScene from './ThreeDScene';
import ThreeDtest from './ThreeDtest';

function HomePageBackground(){
    
    return (
        <>
            <div className="fixed-background">
                <ThreeDtest/>
            </div>
        </>
    );
}

export default HomePageBackground;