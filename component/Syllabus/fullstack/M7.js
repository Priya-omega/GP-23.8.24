import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M7() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 7 : </b> Career Development
                </span> <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div className='session'>

                            <div className="heading">
                                <h3>Building a Professional Profile</h3>
                            </div>
                            <ul>
                                <li>Resume: Developing a resume that showcases full-stack development skills, experience, and projects. </li>
                                <li>Portfolio: Compiling a portfolio for submission, including code repositories, live demos, and a write-up of the project. </li>
                            </ul>
                        </div>

                        <div className='session'>

                            <div className="heading">
                                <h3>Interviewing</h3>
                            </div>
                            <ul>
                                <li> Technical and Behavioral Interview Questions: Compiling a list of common technical and behavioral interview questions.</li>
                                <li>Mock Interviews: Practicing problem-solving and communication skills through mock interviews. </li>
                            </ul>
                        </div>


                        <div className='session'>

                            <div className="heading">
                                <h3>Job Search</h3>
                            </div>
                            <ul>
                                <li> Networking: Engaging with peers in the industry, attending meetups, and joining online communities.</li>
                                <li>Job Application: Applying widely to companies as a full-stack developer on job boards, company websites, and recruitment platforms. </li>
                            </ul>
                        </div>




                    </div>
                )
            }




        </>
    )
};

