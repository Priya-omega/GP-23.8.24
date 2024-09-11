import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M9() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 9 : </b> Internal Orders
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className='session'>
                                <ul>
                                    <li>	Overview of Internal Orders in SAP	</li>
                                    <li>	Types of Internal Orders: Overhead, Investment, and Accrual	</li>
                                    <li>	Internal Order Planning and Budgeting	</li>
                                    <li>	Settlement of Internal Orders to Cost Centers, Profit Centers, and Assets	</li>
                                    <li>	Monitoring and Reporting on Internal Orders	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

