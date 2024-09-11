import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M4() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module  4: </b> Accounts Receivable (AR)
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className='session'>
                                <ul>
                                    <li>	Introduction to Accounts Receivable in SAP	</li>
                                    <li>	Customer Master Data Setup and Management	</li>
                                    <li>	Invoice Generation and Payment Receipt	</li>
                                    <li>	Dunning Process and Credit Management	</li>
                                    <li>	AR Reporting and Analysis	</li>
                                    <li>	Handling Foreign Currency Transactions in AR	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

