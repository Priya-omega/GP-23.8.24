import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M7() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 7 : </b> Controlling (CO) Overview
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className='session'>
                                <ul>
                                    <li>	Introduction to Controlling (CO) in SAP	</li>
                                    <li>	Difference Between FI and CO Modules	</li>
                                    <li>	Controlling Area Setup and Configuration	</li>
                                    <li>	Integration between FI and CO Modules	</li>
                                    <li>	Overview of Cost Elements, Cost Centers, and Profit Centers	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

