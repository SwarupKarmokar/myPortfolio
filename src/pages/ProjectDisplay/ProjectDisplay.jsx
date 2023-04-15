import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../../helper/ProjectList';
import { GithubOutlined, DeploymentUnitOutlined } from '@ant-design/icons';

import './ProjectDisplayStyle.css'

const ProjectDisplay = () => {
    const { id } = useParams();
    const project = projectList[id];

    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image} alt="Oops" />
            <p><b>Skills:</b> {project.skill}</p>
            <div className='flex'>
                <GithubOutlined onClick={() => window.open(project.github, '_blank')} />
                <DeploymentUnitOutlined onClick={() => window.open(project.deployedLink, '_blank')} />
            </div>
        </div>
    )
}

export default ProjectDisplay