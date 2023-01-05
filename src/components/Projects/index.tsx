import React from 'react';

import { ProjectsMe } from './styles';

import First from '../../assets/first-pic-projects-example.jpg';


const Projects: React.FC = () => {
    return (
        <ProjectsMe>
            <div className='my-projects'><img src={First} alt='first'/></div>
            <div className='my-projects'><img src={First} alt='first'/></div>
            <div className='my-projects'><img src={First} alt='first'/></div>
        </ProjectsMe>
    );
}

export default Projects;