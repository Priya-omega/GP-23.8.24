import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M12() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 12 : </b> Security Best Practices in Python Development
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>


                            <div className='session'>
                                <ul>
                                    <li>	Understanding common web security threats (XSS, SQL Injection, CSRF)	</li>
                                    <li>	Implementing security best practices in Python and Django	</li>
                                    <li>	Secure user authentication and session management	</li>
                                    <li>	Data encryption and securing sensitive information	</li>
                                    <li>	Using third-party libraries for security enhancement	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

