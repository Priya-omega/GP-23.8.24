import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M1() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 1 : </b>  Introduction to Python Programming
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className='session'>
                                <ul>
                                    <li>Overview of Python and its Applications </li>
                                    <li>Installing Python and setting up the development environment </li>
                                    <li> Basic syntax, variables, and data types</li>
                                    <li> Control structures: loops and conditionals</li>
                                    <li>Functions, modules, and packages </li>
                                    <li> Error handling and debugging</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

