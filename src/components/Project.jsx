import React from 'react';
import "../styles/project.scss";

const Project = ({ image, title, description }) => {
    // Convert description to an array if it's a string
    const descriptionArray = Array.isArray(description) ? description : [description];

    return (
        <div className='project'>
            <div className='project__image-container'>
                <img src={image} alt={title} className='project__image' />
            </div>
            <div className='project__content'>
                <h2 className='project__title'>{title}</h2>
                <p className='project__description'>{descriptionArray.map(item => <p key={item}>{item}</p>)}</p>
                
            </div>
        </div>
    );
}

export default Project;