import React from "react";
import './landing.css';
import Coach1 from '../../Images/Coaches/coach1.jpeg';
import Coach2 from '../../Images/Coaches/coach2.jpeg';
import Coach3 from '../../Images/Coaches/coach3.jpeg';
import PickedCoach from "./PickedCoach";
import './card-style.css';

// Static card view of Top-rated coaches
const CoachCards = () => {
    return (
        <div>
        <h2 className="picked">Coaches&nbsp;just&nbsp;picked&nbsp;for&nbsp;you</h2>
        <div className='container-fluid d-flex justify-content-center'>
            <div className="row">
                <div className="imageOne">
                    <PickedCoach imgsrc={Coach1} title="John" text="He is a Certified Relationship Coach and successfully helped 500+ people find their ideal dates."/>
                </div>
                <div className="imageTwo">
                    <PickedCoach imgsrc={Coach2} title="Charlotte" text="She is passionate about personal development and mastered the art of dealing with archetypes."/>
                </div>
                <div className="imageThree">
                    <PickedCoach imgsrc={Coach3} title="Amelia" text=" She has the ability to bring light to any situation and to guide her clients through an eye-opening journey."/>
                </div>
            </div>

        </div>
        </div>

    );
};

export default CoachCards;