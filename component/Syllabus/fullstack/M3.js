import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M3() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 3 : </b>Full Stack Integration
                </span> <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >
                        <div className='session'>

                            <div className="heading">
                                <h3>Connecting Frontend with Backend</h3>
                            </div>
                            <ul>
                                <li>Consume APIs: Linking applications at the frontend with the created API endpoints at the backend using tools like fetch, Axios, or other related tools. </li>
                                <li> State Management: Management of state across different components and consistency of data from backend to frontend and vice versa.</li>
                            </ul>
                        </div>

                        <div className='session'>

                            <div className="heading">
                                <h3>WebSockets and Real-Time Communication</h3>
                            </div>
                            <ul>
                                <li>Introduction to WebSockets: Setting up real-time web applications with WebSockets that allow live data exchange. </li>
                                <li> Real-World Use Cases: Chatting apps, live notifications, and other real-time features.</li>
                            </ul>
                        </div>

                        <div className='session'>

                            <div className="heading">
                                <h3>The Basics of Deploying / DevOps</h3>
                            </div>
                            <ul>
                                <li>Version Control with Git: Collaboration on code using Git, branching strategies, and resolving conflicts. </li>
                                <li>CI/CD Pipelines: Continuous integration and continuous deployment with tools like Jenkins, Travis CI, or GitHub Actions. </li>
                                <li>Cloud Deployment: Hosting web applications on cloud platforms like AWS, Heroku, or DigitalOcean, including environment management. </li>
                            </ul>
                        </div>



                    </div>
                )
            }




        </>
    )
};

