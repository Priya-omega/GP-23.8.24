import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M3() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 3: </b> Python for Web Development
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>


                            <div className='session'>
                                <ul>
                                    <li>	Introduction to web development and the role of Python	</li>
                                    <li>	Setting up a web server with Flask	</li>
                                    <li>	Understanding routing, request handling, and templates	</li>
                                    <li>	Working with Jinja2 for dynamic content rendering	</li>
                                    <li>	Building and deploying a basic web application	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

