import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M15() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 15 : </b>  SAP FICO Configuration and Customization
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className='session'>
                                <ul>
                                    <li>	Configuration of Basic Settings for SAP FICO	</li>
                                    <li>	Define Tolerance Groups for GL, AP, and AR	</li>
                                    <li>	Financial Document Types and Number Ranges	</li>
                                    <li>	Configure Tax Settings and Procedures	</li>
                                    <li>	Customizing Screens, Layouts, and Workflows in SAP	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

