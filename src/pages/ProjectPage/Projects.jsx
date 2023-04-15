import React from 'react'
import ProjectItem from '../../components/ProjectItem/ProjectItem'
import { projectList } from '../../helper/ProjectList'
// import ProjectImage from '../../assets/project.jpg'

import './ProjectsStyle.css'

const Projects = () => {
    return (
        <div className='projects'>
            <h1>My Projects</h1>
            <div className="projectList">
                {/* <ProjectItem name={"Social Media"} image={ProjectImage} /> */}

                {
                    projectList.map((item, index) => (
                        <ProjectItem name={item.name} image={item.image} id={index} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default Projects