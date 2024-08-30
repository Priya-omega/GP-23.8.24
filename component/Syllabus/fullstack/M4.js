import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M4() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 4 : </b>  Advanced Topics
                </span> <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >
                        <div className='session'>

                            <div className="heading">
                                <h3>Microservices Architecture</h3>
                            </div>
                            <ul>
                                <li>Introduction to Microservices: Understanding microservices architecture, its benefits over monolithic apps, and how to design microservices. </li>
                                <li> Communication Between Microservices: Techniques such as REST, RPC, and message brokers are used in communication between microservices.</li>
                            </ul>
                        </div>
                        <div className='session'>

                            <div className="heading">
                                <h3>Containerization and Virtualization</h3>
                            </div>
                            <ul>

                                <li> Docker: Learning to develop, deploy, and manage containers across development and production environments.</li>
                                <li>Kubernetes: Running containerized applications with a focus on scaling, load balancing, and automated deployment.</li>
                            </ul>
                        </div>

                        <div className='session'>

                            <div className="heading">
                                <h3>Advanced JavaScript Frameworks</h3>
                            </div>
                            <ul>
                                <li>Next.js: Server-side rendering, routing, and API integration. </li>
                                <li>Nuxt.js: Developing server-side rendered Vue applications. </li>
                            </ul>
                        </div>


                    </div>
                )
            }




        </>
    )
};

