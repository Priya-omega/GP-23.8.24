import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M19() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 19 : </b> Interview Preparation and Career Guidance
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className='session'>
                                <ul>
                                    <li>	SAP FICO Certification Preparation and Mock Tests	</li>
                                    <li>	Resume Building and LinkedIn Optimization	</li>
                                    <li>	Job Interview Preparation: Tips and Mock Interviews	</li>
                                    <li>	Networking Strategies for SAP FICO Professionals	</li>
                                    <li>	Career Pathways and Advancement Opportunities in SAP FICO	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

