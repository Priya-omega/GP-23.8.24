import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M2() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 2 : </b>Back-End Development
                </span> <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div className='session'>

                            <div className="heading">
                                <h3>Introduction to Server-Side Programming</h3>
                            </div>
                            <ul>
                                <li>Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine, enabling server-side scripting. </li>
                                <li> Express.js: A minimal and flexible Node.js web application framework that aids in building solid APIs and web applications.</li>
                            </ul>
                        </div>

                        <div className='session'>

                            <div className="heading">
                                <h3>Database Management </h3>
                            </div>
                            <ul>
                                <li>SQL Databases: A type of relational database; manipulation with SQL; examples include MySQL, PostgreSQL, or SQLite. </li>
                                <li>NoSQL Databases: Examples include NoSQL databases like MongoDB and their flexibility to store unorganized data. </li>
                            </ul>
                        </div>

                        <div className='session'>

                            <div className="heading">
                                <h3>Designing and Implementing REST-Based APIs </h3>
                            </div>
                            <ul>
                                <li>Developing Endpoints for CRUD Operations. </li>
                            </ul>
                        </div>

                        <div className='session'>

                            <div className="heading">
                                <h3>User Authentication and Security </h3>
                            </div>
                            <ul>
                                <li>Implementing User Authentication and Security: Using JWT, OAuth, and applying best security practices. </li>
                            </ul>
                        </div>



                    </div>
                )
            }




        </>
    )
};

