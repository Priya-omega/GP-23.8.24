import { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'

import { IoIosArrowDown } from "react-icons/io";

export default function M1() {

    const [toggle, setToggle] = useState(true);

    return (
        <>

            <div className="quebtn" >
                <span onClick={() => setToggle(!toggle)}> <b className='boldtext'> Module 1 : </b>  Introduction to SAP and SAP FICO
                </span>    <IoIosArrowDown onClick={() => setToggle(!toggle)} className="plusicon" /> </div>

            {
                toggle && (
                    <div className="question" >

                        <div>

                            <div className='session'>
                                <ul>
                                    <li>	Overview of ERP Systems and SAP	</li>
                                    <li>	Introduction to SAP FICO and its Importance	</li>
                                    <li>	Key Features of SAP FICO Modules	</li>
                                    <li>	SAP System Navigation: Interface, Screens, and Menus	</li>
                                    <li>	Organizational Structure in SAP: Company Code, Chart of Accounts, and Fiscal Year	</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }




        </>
    )
};

