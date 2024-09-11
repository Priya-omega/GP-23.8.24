import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M18() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 18 : </b> Real-time Case Studies and Project Work
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className='session'>
                                <ul>
                                    <li>	Hands-on experience with Real-Time Case Studies	</li>
                                    <li>	End-to-End SAP FICO Implementation Project	</li>
                                    <li>	Business Process Scenarios and Solutions	</li>
                                    <li>	Configuring, Testing, and Validating Custom Requirements	</li>
                                    <li>	Presentation of Project Work and Certification Guidance	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

