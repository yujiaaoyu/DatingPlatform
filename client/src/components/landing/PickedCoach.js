import React from "react";
import './landing.css';

// Toprated coaches
const PickedCoach = (props) => {
    return (
        <div className='card text-center shadow'>
            <div className='overflow'>
                <img className="card-img-top" alt="coach" src={props.imgsrc}/>
            </div>
            <div className='card-body.text-dark'>
                <h4 className="card-tittle-secondary">{props.title}</h4>
                <p className="card-text text-secondary">{props.text}</p>
                <a href={props.website} className="btn btn-outline-success">See More</a>
            </div>
        </div>

    );
};

export default PickedCoach;