import React from 'react'
import { LinkedinOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons'

import './HomeStyle.css'


const Home = () => {
    return (
        <div className='home'>
            <div className="about">
                <h2>Hi, My Name is Swarup</h2>
                <div className="prompt">
                    <p>A simple coder who have other hobbies</p>
                    <MailOutlined onClick={() => window.open('mailto:swarupkarmokar123@gmail.com', '_blank')} />
                    <GithubOutlined onClick={() => window.open('https://github.com/SwarupKarmokar', '_blank')} />
                    <LinkedinOutlined onClick={() => window.open('https://www.linkedin.com/in/swarup-karmokar-68521816b/', '_blank')} />
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className='list'>
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>
                            ReactJs, HTML, CSS, Ant-Design, StyledComponents, Redux-Toolkit
                        </span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>
                            NodeJs, ExpressJs, MongoDB, Machine Learning
                        </span>
                    </li>
                    <li className="item">
                        <h2>Programming Language</h2>
                        <span>
                            JavaScript, Python, TypeScript
                        </span>
                    </li>
                    <li className="item">
                        <h2>Tools</h2>
                        <span>
                            Git, GitHub, Visual Studio Code, NPM
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home