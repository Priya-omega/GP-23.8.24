import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M9() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 9 : </b> DevOps Essentials for Python Developers
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>


                            <div className='session'>
                                <ul>
                                    <li>	Introduction to version control with Git and GitHub	</li>
                                    <li>	Continuous Integration/Continuous Deployment (CI/CD) with Python	</li>
                                    <li>	Docker for containerization of Python applications	</li>
                                    <li>	Basics of cloud deployment (AWS, Azure, or Google Cloud)	</li>
                                    <li>	Monitoring and scaling applications	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

