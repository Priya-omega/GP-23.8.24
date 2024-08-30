import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M11() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 11 : </b> Full Stack Integration
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className="heading">
                                <h3>Integration of Front-End to Back-End  </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li>	Using REST APIs in React/Angular.	</li>
                                    <li>	State management & Data flow between client and server.	</li>
                                    <li>	Working with async data using Promises and Observables.	</li>
                                    <li>	Data validation and error handling in Full Stack Applications.	</li>
                                </ul>
                            </div>

                        </div>

                        <div>
                            <div className="heading">
                                <h3> Real-Time Communication  </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li>	HTML, WebSockets: A Comprehensive Overview And Real Life Use Cases.	</li>
                                    <li>	Enhancing Spring Boot With Real-time Features.	</li>
                                    <li>	Implementing WebSocket Communication in React/Angular.	</li>
                                    <li>	Developing chat applications, live notifications, real-time dashboards, etc.	</li>
                                </ul>
                            </div>
                        </div>


                    </div>
                )
            }




        </>
    )
};

