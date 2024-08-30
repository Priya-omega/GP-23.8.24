import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function Q1() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 1 : </b>  Full Stack Java Development
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className="heading">
                                <h3> Full Stack Development Overview </h3>
                            </div>

                            <div className='session'>
                                <p>An overview of the full stack role and how crucial it is to development in recent times.</p>
                                <ul>
                                    <li>Technology Stack – Front-End, Back-End and Databases </li>
                                    <li>Installation for Development </li>
                                    <li> Download Java Development Kit (JDK) and Integrated Developer Environment (IDE).</li>
                                    <li> An Introduction to Git and Version Control</li>
                                    <li> Tools: Maven and Gradle</li>

                                </ul>
                            </div>

                        </div>

                        <div>
                            <div className="heading">
                                <h3> Learn Java Programming </h3>
                            </div>

                            <div className='session'>
                                <ul>
                                    <li> Syntax: data types, Operators, etc.</li>
                                    <li> Loops, conditionals Control Branches</li>
                                    <li> Java is a simple example of writing compiling and executing a Java program</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                )
            }




        </>
    )
};

