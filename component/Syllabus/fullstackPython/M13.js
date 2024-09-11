import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M13() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 13 : </b>  Building and Deploying Python Projects
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>


                            <div className='session'>
                                <ul>
                                    <li>	Project structure and best practices for Python applications	</li>
                                    <li>	Using virtual environments and dependency management with pip	</li>
                                    <li>	Deploying applications on cloud platforms (AWS Elastic Beanstalk, Heroku)	</li>
                                    <li>	Server management and monitoring for Python applications	</li>
                                    <li>	End-to-end deployment of a full-stack Python project	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

