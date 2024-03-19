import React from 'react';
import "../styles/about.scss";

const About = () => {
    const phoneNumber = "+917891723145"; // Replace with your phone number

    return (
        <div className='about__main'>
            <div>
                <p>8th Semester</p>
                <p>IMSC, Mathematics and Computing</p>
                <p>BIT MESRA, RANCHI</p>
            </div>
            <div className='phone_and_email'>
                <p>Phone: <a href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>
                <p>Email: <a href={`mailto:imh10046.20@bitmesra.ac.in`}>imh10046.20@bitmesra.ac.in</a></p>
            </div>
        </div>
    );
}

export default About;