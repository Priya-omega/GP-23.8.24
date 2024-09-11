import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M8() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 8 : </b> Cost Center Accounting (CCA)
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className='session'>
                                <ul>
                                    <li>	Understanding Cost Center Accounting in SAP	</li>
                                    <li>	Cost Center Hierarchy and Master Data	</li>
                                    <li>	Cost Allocation, Assessment, and Distribution	</li>
                                    <li>	Internal Orders and Real-Time Cost Tracking	</li>
                                    <li>	Reporting and Analyzing Cost Center Data	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

