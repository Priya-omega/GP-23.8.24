import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M10() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 10 : </b> Profit Center Accounting (PCA)
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className='session'>
                                <ul>
                                    <li>	Introduction to Profit Center Accounting in SAP	</li>
                                    <li>	Creating and Managing Profit Centers	</li>
                                    <li>	Assignment of Objects to Profit Centers	</li>
                                    <li>	Internal Profitability Analysis and Reporting	</li>
                                    <li>	Integration with Other SAP Modules	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

