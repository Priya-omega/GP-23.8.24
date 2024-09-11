import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M11() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 11 : </b> Product Cost Controlling (PCC)
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className='session'>
                                <ul>
                                    <li>	Overview of Product Cost Controlling in SAP	</li>
                                    <li>	Cost Component Structure and Calculation	</li>
                                    <li>	Product Cost Planning and Variance Analysis	</li>
                                    <li>	Cost Object Controlling for Manufacturing	</li>
                                    <li>	Material Ledger and Actual Costing	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

