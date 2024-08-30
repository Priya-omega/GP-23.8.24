import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M8() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 8 : </b>Java (Spring Framework) for Back-End Development
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className="heading">
                                <h3> Spring Framework Basics </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li>	Key Concepts: IoC (Inversion of Control) and DI (Dependency Injection).	</li>
                                    <li>	Spring Booting a project.	</li>
                                    <li>	Auto-configuration and Starter projects.	</li>
                                </ul>
                            </div>

                        </div>

                        <div>

                            <div className="heading">
                                <h3> Spring MVC </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li>	Developing Web Application with Spring MVC.	</li>
                                    <li>	VC Architectures, Perform MVP (MODEL VIEW PROVIDER) Pattern.	</li>
                                    <li>	Creating and consuming APIs with RESTful web services.	</li>
                                    <li>	Building request writing response parsing validation handling.	</li>
                                </ul>
                            </div>

                        </div>

                        <div>

                            <div className="heading">
                                <h3> Spring Data JPA </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li>	Introduction to JPA and ORM.	</li>
                                    <li>	Entities, Repositories & JPQL.	</li>
                                    <li>	CRUD operations and transaction management.	</li>
                                    <li>	Communicating with database — Spring Data JPA.	</li>
                                </ul>
                            </div>

                        </div>


                    </div>
                )
            }




        </>
    )
};

