import React, { Fragment, useState } from "react";
import {Button, Modal} from "react-bootstrap";

import './landing.css';
import one from '../../Images/one.png';
import two from '../../Images/two.png';
import three from '../../Images/three.png';


// Three steps of landing page
const Steps = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalIsOpen2, setModalIsOpen2] = useState(false);
    const [modalIsOpen3, setModalIsOpen3] = useState(false);

     return (
         <Fragment>
       
        <div className="steps">You&nbsp;can&nbsp;hire&nbsp;a&nbsp;coach&nbsp;in&nbsp;3&nbsp;easy&nbsp;steps</div>
        
        <img src={one} className="ellipse34_1" alt="step1"/>
        <h2 className="findCoach">Find&nbsp;a&nbsp;coach</h2>
        <h3 className="coach_ex">Find your coach in your area it’s or search your suitable coaches among deffirent specialties</h3>
        <button className="coach_btn" onClick={() => setModalIsOpen(true)}></button>
        <div className="coach_txt">View More</div>
       
       <div>
            <Modal className="modal" show={modalIsOpen}>
                <Modal.Header>Find&nbsp;a&nbsp;coach</Modal.Header>
                <Modal.Body>Find your coach in your area it’s or search your suitable coaches among deffirent specialties.</Modal.Body>
                <Modal.Footer><Button onClick = {()=> setModalIsOpen(false) }>close</Button></Modal.Footer>
            </Modal>
        </div>

        <img src={two} className="ellipse34_2" alt="step2"/>
        <h2 className="chat">Start a chat</h2>
        <h3 className="chat_ex">Reaching out to your coach and describe your needs. You can schedul a call or set a meeting</h3>
        <button className="chat_btn" onClick={() => setModalIsOpen2(true)}></button>
        <div className="chat_txt">View More</div>

        <div>
            <Modal className="modal" show={modalIsOpen2}>
                <Modal.Header>Start a chat</Modal.Header>
                <Modal.Body>Reaching out to your coach and describe your needs. You can schedul a call or set a meeting</Modal.Body>
                <Modal.Footer><Button onClick = {()=> setModalIsOpen2(false) }>close</Button></Modal.Footer>
            </Modal>
        </div>

        <img src={three} className="ellipse34_3" alt="step3"/>
        <h2 className="hireCoach">Hire</h2>
        <h3 className="hireCoach_ex">You are good? You can go ahead and hire your coach with just a click</h3>
        <button className="hireCoach_btn" onClick={() => setModalIsOpen3(true)}></button>
        <div className="hireCoach_txt">View More</div>

        <div>
            <Modal className="modal" show={modalIsOpen3}>
                <Modal.Header>Hire</Modal.Header>
                <Modal.Body>You are good? You can go ahead and hire your coach with just a click</Modal.Body>
                <Modal.Footer><Button onClick = {()=> setModalIsOpen3(false) }>close</Button></Modal.Footer>
            </Modal>
        </div>
 
    </Fragment>

    );
};

export default Steps;