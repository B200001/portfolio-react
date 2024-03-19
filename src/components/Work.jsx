import React from 'react'
import "../styles/work.scss"
import Project from './Project'
import background from "../assets/amazon.jpg";
import background2 from "../assets/project2.jpg";
import background3 from "../assets/project3.jpg";
const Work = () => {
    // Example project data
    const projects = [
        {
            id: 1,
            image: background,
            title: "Amazon Clone",
            link: "fdsf",
            description: [
                '- Database Used: Firebase',
                '- Framework used: React.js',
                '- Languages Used: HTML, CSS, JAVASCRIPT, PYTHON'
            ]
        },
        {
            id: 2,
            image: background2,
            title: "React form App and ML project under Professor BK Sarkar (BIT MESRA)",
            description: [
                '- Prediction model for preterm birth of a newborn.',
                '- Libraries used: pandas, NumPy, SkLearn',
                '- Dataset Used: Real life info from Ranchi’s Hospitals',
                '- 92 % accuracy(Test and Validation)',
                '- React App for New Data Collection',
                '- Framework used: React.js',
                '- Languages Used: HTML, CSS, JAVASCRIPT, PYTHON'
        ],
            link: "https://github.com/B200001/formV2"
      },
{
    id: 3,
        image: background3,
            title: "Real Time Face Detection Model with TensorFlow, VGG16 and Open-CV",
                description: [
                    '- Image Classification using CNN for Happy and Sad faces',
                    '- Libraries Used TensorFlow, NumPy, Open-CV, Matplotlib',
                    '- 99% accuracy (Test and Validation)',
                    '- Dataset used – Random Images from Web'
                ]
}
    ];

return (
    <div className='work__main'>
        <div><h1>Projects</h1>
            {projects.map((project) => (
                <Project key={project.id} image={project.image} title={project.title} description={project.description} />
            ))}
        </div>
    </div>
);
  }

export default Work