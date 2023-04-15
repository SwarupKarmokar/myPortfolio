import React from 'react'
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons'

import './FooterStyle.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                {/* <FacebookOutlined onClick={() => window.open('https://github.com', '_blank')} />
                <InstagramOutlined onClick={() => window.open('https://github.com', '_blank')} /> */}
                <LinkedinOutlined onClick={() => window.open('https://www.linkedin.com/in/swarup-karmokar-68521816b/', '_blank')} />
                <GithubOutlined onClick={() => window.open('https://github.com/SwarupKarmokar', '_blank')} />
            </div>
            <p>@copyright2023: Swarup Karmokar</p>
        </div>
    )
}

export default Footer