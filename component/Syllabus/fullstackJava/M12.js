import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M12() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 12 : </b> Test-and-Debug
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className="heading">
                                <h3> Unit Testing in Java </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li>	JUnit and TestNG started with.	</li>
                                    <li>	Unit Testing (Writing the test cases).	</li>
                                    <li>	Mockito to mock dependencies.	</li>
                                    <li>	How to write good tests.	</li>
                                </ul>
                            </div>

                        </div>

                        <div>
                            <div className="heading">
                                <h3> Integration Testing </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li>	Integration tests in Spring Boot.	</li>
                                    <li>	Unit testing REST APIs / interaction with Database.	</li>
                                    <li>	Jenkins: Continuous Integration (CI).	</li>
                                    <li>	Automating testing pipelines.	</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="heading">
                                <h3> Debugging and Profiling </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li>	IntelliJ/Eclipse Debugging Techniques.	</li>
                                    <li>	Memory and CPU Analysis Of Java Applications.	</li>
                                    <li>	Find & correct performance bottlenecks.	</li>
                                    <li>	Log4j, SLF4J logging frameworks.	</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                )
            }




        </>
    )
};

