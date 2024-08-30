import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M14() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 14 : </b> Final Project and Career Development
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className="heading">
                                <h3> Capstone Project </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li>	Work breakdown structure and requirement specification.	</li>
                                    <li>	The tech stack and project architecture candidates wanted to use.	</li>
                                    <li>	Building a full-stack app: Front-end, back-end & Database integration.	</li>
                                    <li>	Securing, testing, and deploying to the cloud of your new project.	</li>
                                    <li>	Making a documentary of the project and preparing for the final presentation.	</li>
                                </ul>
                            </div>

                        </div>

                        <div>

                            <div className="heading">
                                <h3> Career Development </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li>	Resume for ATS/LinkedIn Profile Creation.	</li>
                                    <li>	Technical Interview Preparation Coding challenges and mock interviews.	</li>
                                    <li>	Your Networking Playbook as a Job Seeker.	</li>
                                    <li>	Assistance for job placement and career guidance.	</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                )
            }




        </>
    )
};

