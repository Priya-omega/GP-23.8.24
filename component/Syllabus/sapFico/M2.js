import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M2() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module  2: </b> Financial Accounting (FI) Overview
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className='session'>
                                <ul>
                                    <li>	Introduction to Financial Accounting (FI) in SAP	</li>
                                    <li>	General Ledger (GL) Accounting: Structure, Master Data, and Transactions	</li>
                                    <li>	GL Document Posting: Manual and Automatic	</li>
                                    <li>	Chart of Accounts and Account Groups Configuration	</li>
                                    <li>	Open and Close Posting Periods	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

