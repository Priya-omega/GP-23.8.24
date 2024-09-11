import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M6() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 6 : </b> Bank Accounting
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className='session'>
                                <ul>
                                    <li>	Introduction to Bank Accounting in SAP	</li>
                                    <li>	Bank Master Data Setup and Configuration	</li>
                                    <li>	Electronic Bank Statement (EBS) Configuration and Processing	</li>
                                    <li>	Manual and Automatic Bank Reconciliation	</li>
                                    <li>	Cash Management and Liquidity Forecasting	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

