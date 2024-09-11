import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M14() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 14 : </b>  Capstone Project
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>


                            <div className='session'>
                                <ul>
                                    <li>	Defining a full-stack Python project with real-world applications	</li>
                                    <li>	Applying knowledge from all modules to develop a complete web application	</li>
                                    <li>	Building a front-end interface, back-end logic, and database integration	</li>
                                    <li>	Implementing testing, debugging, and security measures	</li>
                                    <li>	Final project presentation and code review	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

