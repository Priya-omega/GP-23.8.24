import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M3() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module  3 : </b> Accounts Payable (AP)
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className='session'>
                                <ul>
                                    <li>	Overview of Accounts Payable in SAP	</li>
                                    <li>	Vendor Master Data Creation and Management	</li>
                                    <li>	Invoice Verification, Processing, and Payment Run	</li>
                                    <li>	Automatic Payment Program Configuration	</li>
                                    <li>	Vendor Down Payment and Special GL Transactions	</li>
                                    <li>	Foreign Currency Handling in AP	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

