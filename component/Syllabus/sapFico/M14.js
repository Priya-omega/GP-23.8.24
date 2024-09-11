import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M14() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 14 : </b> Financial Closing and Reporting
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className='session'>
                                <ul>
                                    <li>	Month-End and Year-End Closing Procedures in SAP	</li>
                                    <li>	Balance Sheet and Profit & Loss Statement Configuration	</li>
                                    <li>	Financial Statement Version (FSV) Setup	</li>
                                    <li>	Reporting Tools: SAP FIORI, Report Painter, and Report Writer	</li>
                                    <li>	Configuring and Using SAP Query for Custom Reports	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

