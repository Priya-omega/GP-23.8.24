import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M11() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module  11: </b> Testing and Debugging Python Applications
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>


                            <div className='session'>
                                <ul>
                                    <li>	Writing unit tests using unittest and pytest	</li>
                                    <li>	Test-driven development (TDD) principles	</li>
                                    <li>	Debugging Python applications using logging and debugging tools	</li>
                                    <li>	Automated testing strategies for web applications	</li>
                                    <li>	Performance testing and optimization	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

