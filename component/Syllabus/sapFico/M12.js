import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M12() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 12 : </b> Profitability Analysis (CO-PA)
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className='session'>
                                <ul>
                                    <li>	Introduction to Profitability Analysis in SAP	</li>
                                    <li>	Operating Concern and Characteristics Configuration	</li>
                                    <li>	CO-PA Reporting and Analysis	</li>
                                    <li>	Costing-Based and Account-Based Profitability Analysis	</li>
                                    <li>	Integration with SD and MM Modules	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

