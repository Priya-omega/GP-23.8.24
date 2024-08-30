import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M6() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 6 : </b> Capstone Project
                </span> <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div className='session'>

                            <div className="heading">
                                <h3>Project Planning</h3>
                            </div>
                            <ul>
                                <li> Requirement Gathering: Defining the scope, requirements, and goals for a full-stack project.</li>
                                <li> Selection of Technology Stack: Choosing appropriate technologies for the frontend, backend, and database.</li>
                            </ul>
                        </div>

                        <div className='session'>

                            <div className="heading">
                                <h3>Execution</h3>
                            </div>
                            <ul>
                                <li> Full-Stack Application Development: End-to-end web application development; implementing the frontend, backend, and database layers.</li>
                                <li>Testing and Debugging: Writing unit tests, integration tests, and end-to-end tests; debugging and optimizing the application. </li>
                            </ul>
                        </div>

                        <div className='session'>

                            <div className="heading">
                                <h3>Presentation</h3>
                            </div>
                            <ul>
                                <li> Project Documentation: Documenting the development process, technologies used, and problems faced.</li>
                                <li> Demo and Presentation: Preparing a live demo of the application and presenting the project to peers and instructors.</li>
                            </ul>
                        </div>
                    </div>
                )
            }




        </>
    )
};

