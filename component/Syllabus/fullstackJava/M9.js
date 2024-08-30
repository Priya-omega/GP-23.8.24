import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M9() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 9 : </b>  Microservices Architecture and Spring Cloud
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className="heading">
                                <h3> Introduction to Microservices </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li>	Monolithic Architecture vs. Microservices.	</li>
                                    <li>	Microservices Pros and Cons.	</li>
                                    <li>	Episode 257 Designing microservices with Spring Boot.	</li>
                                </ul>
                            </div>

                        </div>

                        <div>

                            <div className="heading">
                                <h3> Spring Cloud </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li>	Eureka for Service Discovery.	</li>
                                    <li>	Load Balancing with Ribbon.	</li>
                                    <li>	API Gateway – Zuul or Spring Cloud Gateway.	</li>
                                    <li>	Hystrix circuit breakers.	</li>
                                    <li>	Spring Cloud Config for Centralized Configuration.	</li>
                                </ul>
                            </div>

                        </div>

                    </div>
                )
            }




        </>
    )
};

