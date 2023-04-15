import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { BookOutlined, FundProjectionScreenOutlined } from '@ant-design/icons'

import 'react-vertical-timeline-component/style.min.css'

const Experience = () => {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2015 - 2017"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                >
                    <h3 className="vertical-timeline-element-title">
                        Nagar A.M. High School, Nagar, Murshidabad
                    </h3>
                    <p> Higher Secondary Education</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2017 - 2021"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                >
                    <h3 className="vertical-timeline-element-title">
                        Murshidabad college of engineering and technology, Murshidabad, West Bengal
                    </h3>

                    <h4 className="vertical-timeline-element-subtitle">
                        Bachelor's Degree
                    </h4>

                    <p> Computer Science</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2005 - 2015"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                >
                    <h3 className="vertical-timeline-element-title">
                        Parulia U.S. Vidyabhavan
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Murshidabad, West Bengal
                    </h4>
                    <p>Secondary Education</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2021-4month internship"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                >
                    <h3 className="vertical-timeline-element-title">
                        Machine Learning Developer
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Delhi, India
                    </h4>
                    <p>
                        Created some machine learning model with team.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience